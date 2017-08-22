const React = require('react')
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Map, List, RenderSection, ManyMap, FromInventory, NextChapter, AllButSelection, gameReducers} from 'windrift'
import * as actions from '../actions'
import ListCard from '../components/listCard'
import Reader  from '../components/reader'
import { docs } from '../docs'

export default ({currentSection, inventory, cards}) => {
  const sections = [
    <section>
      <heading>
        <h2>Chapter Nine</h2>
        <blockquote>
          "There were no policemen, for there was no disorder, but thrift, sobriety, and decorum ruled,
          and the days passed in calm monotony."<br/>
          —<i>A Divided Republic</i>, Lillie Blake (1887)
        </blockquote>
      </heading>
      <p>
        Right by the tunnel entrance there were signs of modern intrusion: several plastic milkcrates, some rubber gloves, a few
        empty bags of potato chips, a gas generator. The milkcrates were stuffed full of
        notebooks and papers and as I knelt down, flashlight tucked under one arm, I almost wept with joy.
        I'd been collecting these one-by-one like a scavenger hunt and here was a small library.
      </p>
      <p>
        I greedily snatched a folder off the top of one—it had a recent date in Lynn's hand. The first page
        was an original issue of The Circular, <ListCard expansions={[["annotated"], ["annotated"]]}
          tag="c9_paper"
          nextUnit="section"
          card={<span>This edition was from the end of the community's existence, when the full-length newspaper had
          shrunk to a single double-sided broadsheet.</span>} /> by Lynn:
      </p>
    </section>,
    <section>
      <Reader inventory={inventory} docs={[docs.paper4]}/>
    </section>,
    <section>
      <p>
        There was another paper behind the broadsheet. It was also old:
      </p>
      <Reader inventory={inventory} docs={[docs.diagram1]}/>
    </section>,
    <section>
      <p style={{marginTop: "20em"}}>
        I put the folder aside, my hands shaking a little, and cast the flashlight on the gas generator.
        I closed my eyes, took a deep breath, and <List expansions={[["pulled the starter cord—"], ["pulled the starter cord."]]} tag="c9-start1" />
      </p>
    </section>,
    <section>
      <p>
        The motor shuddered but didn't rev up. I shook out my arm, then heard a <ListCard expansions={["thud"]}
          tag="c9-thud" card={<span>A door slam?</span>} /> upstairs. I waited, but there was only silence.
          I <List expansions={[["pulled"], ["pulled"]]} tag="c9-start2" /> again.
      </p>
    </section>,
    <section>
      <p>
        The generator roared to life and three connected tripod-mounted spotlights lit up in sequence.
        My knees went weak and I had to sit down on a crate to take it all in. The drawing was real.
      </p>
      <p>
        I was, in fact, within an enormous cavern—surely natural in origin—sunken into the slope on which the
        college was built. The space was dominated by a pockmarked black boulder the size of a house,
        which protruded from the ceiling and disappeared into the floor, half still buried in the wall of
        the cavern.
      </p>
      <p>
        The machinery depicted in the sketch was all here, but in gross disrepair. Rubber tubes had cracked or
        sprung from their sockets. The
        brass cranks and gears were coated in a thick patina. The wooden platform looked especially unstable,
        and the enormous wheel and crankshaft
        were wrapped in copper wire which had oxidized to a dull green. Debris was everywhere.
      </p>
      <p>
        And yet, <ListCard expansions={["someone"]} tag="c9_repair"
          nextUnit="section"
          card={<span>Lynn, surely, though he must've been pretty handy for an English professor.</span>} /> had
          been repairing it. All along the edge of the cavern were modern tools and
          materials—shiny new wire spools, a tablesaw, neat stacks of fresh lumber.
      </p>
    </section>,
    <section>
      <p>
        I approached the great machine. Surely this was no bomb, or it would've been itself destroyed in the
        explosion. As I got closer, I realized I had been so distracted by the machine that I'd
        failed to really take in the massive <List expansions={[["rock"], ["rock"]]} tag="c9_rock" />.
      </p>
    </section>,
    <section>
      <p>"The Astrolith," I said, wonderingly. The <ListCard expansions={["tip"]} tag="c9-tip"
        card={<span>The estimate on the meteorite's plaque put its weight at 30 tons. It was more likely to be
        3,000.</span>} /> above the surface was unmistakable in its profile.
      </p>
      <p>
        Up close, I could see that the wooden platform had in fact already been repaired in places, and
        with some skill. Also repaired was the enormous lever by the base—it moved along a half-moon
        track like a <ListCard expansions={["railway switch"]} tag="c9_switch"
          card={<span>The original mechanism was, in fact, a railroad switch stand.</span>} />.
          A handcart full of fresh coal rested next to a cast-iron stove.
      </p>
      <p>Tantalizingly, the ladder led up to a two-stage platform which seemed to disappear into the
        meteor itself. <Map from={inventory.c9_search || inventory.c9_climb}
          to={{
            _undefined: <span>I hesistated, wondering if I should stick to what I knew best
             and <List expansions={[["search"], ["search"]]}
                tag="c9_search" /> through that trove of archives</span>,
            _any: `I hesistated, wondering if I should stick to what I knew best
              and search through that trove of archives`
          }}  />
          <Map from={inventory.c9_climb || inventory.c9_search}
            to={{
              _undefined: <span>, or throw caution to the wind and <List expansions={[["climb"], ["climb"]]}
                tag="c9_climb" /> right up.</span>,
              _any: ", or throw caution to the wind and climb right up."
            }}  />
          </p>
    </section>,
    <section>
      <Map from={inventory.c9_climb || inventory.c9_search}
        to={{
          climb: <div>
            <p>
              I'd risked so much already, why stop now?
            </p>
            <p>
              I shook the ladder—hard. It wobbled but held. This close I could see how much of it had been
              replaced; there were new steps and shiny anchors bolted to the surface of the meteroite. I climbed up a few
              tentative steps, and it held. I continued to rise.
            </p>
            <p>
              At the top of the main platform was a small work area. Another milkcrate, this time upside-down as a
              seat, with a gas camping lamp and a notebook atop a wobbly stool. Nearby I could see the huge
              wheel-like mechanism, gleaming new copper threads interwoven with the old. From afar it had seemed like
              a solid piece of engineering; this close it was obvious how much the machine had been pieced together
              from spare parts, some recognizable farm machinery, others utterly mysterious.
            </p>
            <p>
              I picked up the notebook. It had a recent date on the cover in Lynn's handwriting. It was largely
              blank, just two short fragments, hastily written:
            </p>
            <Reader inventory={inventory} docs={[docs.lynn2]} />
            <Reader inventory={inventory} docs={[docs.lynn3]} />
          </div>,
          search: <div>
            <p>
              With effort, I turned back to the crates of documents and quickly found a notebook with a recent date
              on it in Lynn's handwriting. It was largely blank, just two short fragments, hastily written:
            </p>
            <Reader inventory={inventory} docs={[docs.lynn2]} />
            <Reader inventory={inventory} docs={[docs.lynn3]} />
          </div>
        }} />
    </section>,
    <section>
      <p>
        Another loud slam sound from the entrance tunnel. I put the paper down, and watched, without surprise,
        as Alice Gilman emerged through the passage.
      </p>
      <p>
        "You're <ListCard expansions={["Elsie Cadwell"]} tag="c9-short"
          card={<span><i>Elsie</i> is a diminitive for both Elizabeth, which I'd known, and Alice,
        which I'd forgotten.</span>} />," I said. "Is Gilman your maiden name?"
      </p>
      <p>
        "Yes," she said, approaching slowly.
      </p>
      <p>
        There were two entrances to the cavern, <Map from={inventory.c9_climb || inventory.c9_search}
          to={{
            climb: "both unreachable from the platform where I stood",
            search: " and one was nearby, but when I looked inside, it had been bricked up. Recently."
          }} />.
      </p>
      <p>
        "And this is—"
      </p>
      <p>
        "I think you'd call it a time machine. We called it the Instrument."
      </p>
      <p>
        "And <List expansions={[["Cadwell created it to—"], ["Cadwell—"]]} tag="c9-made it" />
      </p>
    </section>,
    <section>
      <p>
        "<i>I</i> created it," she corrected me. "Ignatius was an idiot, a college dropout who never did a day's work in his life.
        He dreamt up with nonsense and left it to me to make it a reality."
      </p>
      <p><Map from={inventory.c9_climb || inventory.c9_search}
        to={{
          climb: "She was almost at the base of the platform. I scrambled up the steps to the top level.",
          search: `I backed away from her, but there was nowhere to go but the wooden platform. I scrambled up the
          ladder to the first level, praying the thing would hold my weight.`
        }} />
      </p>
      <p>Gilman seemed to ignore me, and began calmly feeding coal into the stove. </p>
      <p>"What happened to Lynn?" I called down.</p>
      <p>"He was obsessed with the past. I gave it to him."</p>
      <p>"And Cadwell?"</p>
      <p>Even from here I could see her scowl. "He didn't belong here."</p>

      <p>She finished loading the stove and struck a match to light it. Smoke began leaking out of the seams in the chimney.
        She crossed over to the main mechanism and began winding it.
      </p>
      <p>
        "You can't believe it until you experience it," she said.
      </p>
      <p>
        "Experience what? The machine?" I could feel the hair on my arms begin to <ListCard expansions={["stand up"]}
          tag="c9-hair" card={<span>I thought this was fear, but then realized it was the air—static electricity
          was building up around the machine.</span>} />.
      </p>
      <p>
        "The past," she said. "Everything you take for granted." She turned a crank with tremendous effort and
        the machine leapt to a shuddering start. The huge wire-wrapped wheel beneath me began to spin,
        the attached arm rotating along with it faster and faster. The static discharge intensified; my
        clothes seemed to float away from my body. The entire platform vibrated, and over the roar of the
        device I could hear the ping-ping of rivets popping out of their sockets. I wasn't sure this
        machine could run much longer without tearing itself apart.
      </p>
      <p>
        Gilman moved to the massive lever, leaning on it but not yet pushing. "Get inside," she yelled.
      </p>
      <p>
        "No."
      </p>
      <p>She sighed and reached into the satchel slung around her chest. She pulled out a skinny antique
        pistol and aimed it upwards, almost indifferently. "Trust me," she shouted, "it's a lot less old than it looks."
      </p>
      <p>
        <Map from={inventory.c9_climb || inventory.c9_search}
          to={{
            climb: `I glanced behind me at the
            chamber inside the meteorite. `,
            search: `I backed awkwardly up the stairs to the last platform and looked inside the chamber.`
          }} /> Thinly-woven copper fibers descended from the ceiling, ending in a
          copper pull-cord with handle. There was a matching copper plate on the floor. All of them were
          shiny and new. I stepped away from her a bit more, but didn't cross the threshold.
      </p>
      <p>"You <ListCard expansions={["want to go in"]}
        tag="c9-want"
        nextUnit="section"
        card={<span>She was right, of course. I mean, wouldn't you?</span>} />! How can you not?" she yelled. "Either way, I'm not
        going back, and I won't be made a freak. Get in, or stay there and watch me brick up the last entrance."
        She gestured around the space. "You see how unstable it is. Those bulldozers will come through tomorrow,
        start digging expecting an ordinary boulder, and this will all cave in. And if it doesn't, well, I've set off explosives before."
        </p>
    </section>,
    <section>
      <p>
        "What will happen to Lillian?" I said, taking the smallest of steps backwards into the chamber. The shaking
        had gotten worse and moments later one of the supports on the platform snapped in two. The lower platform tilted
        violently, and I could feel the strain on the upper platform, pulled hard to the left. I wasn't even sure I
        could get back down now if I wanted to.
      </p>
      <p>
        "After tomorrow, this will be a caved-in pile of twisted metal, another example of laughable utopian
        pseudo-science. Without proof I'll have nothing to fear."
      </p>
      <p>
        This was utter madness. I took another step back, positioned my feet on the floor plate, and grabbed on to the
        handle. I nodded.
      </p>
      <p>She grimaced and threw the lever.</p>
    </section>


    ]

      return <RenderSection currentSection={currentSection} sections={sections}  />

}
