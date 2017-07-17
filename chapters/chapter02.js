const React = require('react')
import { connect } from 'react-redux'
import { Map, List, FromInventory, RenderSection, NextChapter, AllButSelection} from 'windrift'

import Reader  from '../components/reader'
import ListCard from '../components/listCard'

import { docs } from '../docs'

export default ({currentSection, inventory}) => {
  const sections = [
    <Reader inventory={inventory} docs={[docs.notes, docs.bellamy, docs.age1, docs.frag1]} />,
    <section>
      <p>The papers were abruptly snatched out of my hand. "Excuse me, what are you doing?" I looked up to
        see a <ListCard
          expansions={["plain-looking"]}
          tag="c2-woman-intro"
          card={<span>Her hair was limp, unstyled, and wore and she a long-sleeved, ankle length dress.</span>}
              /> woman standing over me and regarding me with suspicion.
      </p>
      <p>I reminded myself that I was invited here and didn't need to <ListCard
        expansions={["apologize"]}
        tag="c2-apologize"
        card={<span>Except maybe for breaking into someone's office.</span>} />.
        "I'm Miriam Kemper. I'm substituting for Jeffrey Lynn."
      </p>
      <p>She looked surprised, as if I wasn't what she had expected. "Oh, yes, of course, I heard someone was coming.
        "Welcome to St. Isidore."
      </p>
      <p>
        "Thank you," I said cautiously. "There was no one here when I arrived so I—" When she didn't respond, I said,
        "Do you know where I'm supposed to be staying?"
      </p>
      <p>"I assume the guest faculty quarters. Shall I take you to them?" She glanced down at the papers in her hand,
        which she did not move to return to the desk.
      </p>
      <Map from={inventory.c2_qs} to={{
        "_undefined": <p>
          I hesitated, torn between <List expansions={[["curiosity", "exhaustion"], "_last"]} tag="c2_qs" conjunction="and" />.
        </p>,
        "curiosity": <div>
          <p>I hesitated, and then asked, "What happened to Professor Lynn?"</p>
          <p>She seemed taken back by my directness. "He didn't come back after winter break. I understand that finding a
            last-minute replacement was difficult."
          </p>
          <p>"Yes, luckily the university had <ListCard expansions={["my credentials on file."]} tag="c2-creds"
            card={<span>From an old application for a teaching position I didn't get.</span>} />" I said, "but what I mean <nobr>is—</nobr>"
          </p>
          <p>"Shall I bring you to your room?" she repeated. I was too tired to press her further, so I just nodded and
            followed her out. I saw her leave the papers by the entrance, and lock the door on her way out.
          </p>
        </div>,
        "exhaustion": <p>
          I hesitated, then nodded. "Yes, I'm extremely tired." She turned without saying anything further, and I followed her
          out. I saw her leave the papers by the entrance, and lock the door on her way out.
        </p>
      }} />

    </section>,
    <section>
      <p>We went back to my car to get my things. She didn't offer to help with my <ListCard expansions={["bags"]} tag="c2-bags"
          card={<span>They were pathetically small anyway. Shouldn't a grown woman have more <em>stuff</em>?</span>} />, but she seemed to know the
        college by heart.
      </p>
      <p>The residence was as dark and quiet as the rest of the campus. If anyone else were staying there,
        they weren't night owls. "Let's put you in here," she said, gesturing into a room with a single small window
        and <ListCard expansions={["spartan"]} tag="c2-room"
        card={<span>Honestly I was just happy I wasn't in a snow-filled ditch on the side of the road.</span>} /> wooden furnishings.
        I dropped everything in place, mumbled my thanks, and collapsed on the bed as she closed the door. Only
        as I was drifting off did I realize she'd never
        told me her name.
      </p>
      <NextChapter chapter={3} />

    </section>
        ]
  return <RenderSection currentSection={currentSection} sections={sections} />
}
