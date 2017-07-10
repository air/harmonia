const React = require('react')
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { List } from 'windrift'
import * as actions from '../actions'

import jsPlumb from 'jsPlumb'

var j = jsPlumb.jsPlumb
j.setContainer(document.getElementById("container"))
j.importDefaults({
  ConnectionsDetachable: false
})

const Card = ({tag, text, visible}) => {
  if (visible) {
    return <span className="card" id={"card-" + tag}>
      { text }
    </span>
  }
  else return null
}

class _ListCard extends React.Component {

  constructor(props) {
    super(props)
    this.onComplete = this.onComplete.bind(this)
    this.expansions = props.expansions
    // If the expansions list is one item long, double it (usually these won't change)
    if (props.expansions.length === 1) {
      this.expansions.push(props.expansions[0])
    }

  }
  onComplete() {
    this.props.onAddCard(this.props.tag)
  }

  // TODO plumb lines get left behind when going back
  // TODO call a re-render on the SVG after a window resize event

  componentDidUpdate() {
    var sourceId = 'source-' + this.props.tag
    var targetId = 'card-' + this.props.tag
    var source = document.getElementById(sourceId)
    var target = document.getElementById(targetId)

    if (source && target) { // Gross
      var pos = this.positionTargetX(source)
      var anchors = ["Right", "Left"]

      if (pos === 'right') {
        target.classList.add('right')
        target.classList.remove('left')
      }
      else {
        target.classList.add('left')
        target.classList.remove('right')
        anchors = ["Left", "Right"]
      }

      this.positionTargetY(source, target)

      j.connect({
        source: sourceId,
        target: targetId,
        endpoint: "Blank",
        anchors: anchors
      })
    }
    else {
      j.deleteConnectionsForElement(sourceId)
    }
  }
  positionTargetY(source, target) {
    // Move the card down if necessary to avoid overlapping other cards

    let cards = document.getElementsByClassName('card')
    let targetTop = target.getBoundingClientRect().top + window.scrollY
    let targetBottom = targetTop + target.getBoundingClientRect().height

    for (let card of cards) {

      if (card.id != target.id) {
        let box = card.getBoundingClientRect()
        let cardBottom = card.getBoundingClientRect().top + window.scrollY + card.getBoundingClientRect().height
        if (cardBottom > targetTop && cardBottom < targetBottom) {
          // Move the target down until it doesn't overlap
          target.style.top = (cardBottom + 30) + 'px'
          target.style.marginTop = 0
        }
        // Either way, probably safe to break here
        break
      }
    }
  }

  positionTargetX(source) {
    // Position the card in the right or left margin relative to the source link and the current viewport.
    // Returns the left/right position of the card
    let width = document.documentElement.clientWidth
    let srcWidth = source.getBoundingClientRect().right

    if (srcWidth < width / 2) {
      return 'left'
    }
    else {
      return 'right'
    }
  }

  render() {
    // Stick the element in a stupid nobr so jsPlumb doesn't get confused about the bounding box
    return <span>
      <nobr className="link-source" id={'source-' + this.props.tag}>
        <List {...this.props} expansions={this.expansions} onComplete={this.onComplete} />
      </nobr>
      <Card text={this.props.card} tag={this.props.tag} visible={this.props.added} />
    </span>

  }
}
_ListCard.propTypes = {
  nextUnit: PropTypes.oneOf(['chapter', 'section', 'none']),
  tag: PropTypes.string.isRequired,
  expansions: PropTypes.array.isRequired,
  config: PropTypes.object,
  currentExpansion: PropTypes.number,
  conjunction: PropTypes.string,
  persistLast: PropTypes.bool,
  onLoad: PropTypes.func
}
_ListCard.defaultProps = {
  nextUnit: "none"
}

const mapStateToProps = (state, ownProps, added=false) => {
  if (state.inventory.present.hasOwnProperty(ownProps.tag)) {
    added = true
  }
  return {
    added: added
  }
}

const ListCard = connect(
  mapStateToProps,
  {
    onAddCard: actions.cardCreated
  }
)(_ListCard)

export default ListCard
