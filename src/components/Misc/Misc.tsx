import * as React from 'react';

import { Panel } from 'components/Panel';
import { SEO } from 'components/SEO';

import './Misc.css';

export interface MiscPanelProperties {
  renderCallback: () => void;
}

export class MiscPanel extends React.Component<MiscPanelProperties, {}> {
  public constructor(props) {
    super(props);
    this.props.renderCallback();
  }

  public render() {
    return (
      <>
        <SEO url="misc" />
        <Panel
          title="Personal Movie Tier List"
          subtitle="- Last updated: Mar. 4, 2020"
        >
          {/*  */}

          <div className="misc-item">
            <h3>God Tier: </h3>
            <ul>
              <li>There Will Be Blood</li>
              <li>Whiplash</li>
              <li>Uncut Gems</li>
              <li>City of God</li>
              <li>The Prestige</li> 
              <li>Burning</li>
              <li>Pan's Labyrinth</li> 
            </ul>
          </div>

          <br/>
          
          <div className="misc-item">
            <h3>Tier 1: </h3>
            <ul>
              <li>Léon: The Professional</li> 
              <li>Punch-Drunk Love</li>
              <li>Parasite</li> 
              <li>Good Time</li>
              <li>One Flew Over the Cuckoo's Nest</li>
              <li>Phantom Thread</li>
              <li>Mulholland Drive</li> 
              <li>Her</li> 
              <li>Chungking Express</li>
              <li>No Country for Old Men</li>
              <li>Memories of Murder</li>
              <li>The Godfather Part 2</li> 
              <li>Manchester by the Sea</li> 
              <li>Once Upon a Time In Hollywood</li>
              <li>Hereditary</li>
              <li>American History X</li> 
              <li>Three Billboards Outside Ebbing, Missouri</li>
              <li>Goodfellas</li>
            </ul>
          </div>

           <br/>

          <div className="misc-item">
            <h3>Tier 2: </h3>
            <ul>
              <li>Happiness</li>
              <li>Moonlight</li>
              <li>American Beauty</li>
              <li>The Florida Project</li> 
              <li>Dear Zachary: A Letter to a Son About His Father</li>
              <li>The Witch</li>
              <li>Clerks</li>
              <li>Apocalypse Now</li>
              <li>Saving Private Ryan</li>
              <li>Oldboy</li>
              <li>First Reformed</li>
              <li>The Master</li>
              <li>The Godfather</li>
              <li>Eternal Sunshine of the Spotless Mind</li>
              <li>Call Me By Your Name</li>
              <li>The Shawshanks Redemption</li>
              <li>Black Swan</li>
              <li>The Shape of Water</li>
              <li>Spirited Away</li>
              <li>Requiem for a Dream</li>
              <li>Birdman</li>
            </ul>
          </div>  


           <br/>

          <div className="misc-item">
            <h3>Tier 3: </h3>
            <ul>
              <li>A Simple Plan</li>
              <li>The Lighthouse </li>
              <li>The Bourne Identity</li>
              <li>The Usual Suspects</li>
              <li>Under the Skin</li>
              <li>A Beautiful Mind</li>
              <li>The Silence of the Lambs</li>
              <li>Midsommar</li>
              <li>Interstellar</li>
              <li>Ordinary People</li>
              <li>Joker</li>
              <li>Forrest Gump</li>
              <li>Columbus</li>
              <li>Lady Bird</li>
              <li>Memento</li>
              <li>Shoplifters</li>
              <li>10 Cloverfield Lane</li>
              <li>2001: A Space odyssey</li>
              <li>Pulp Fiction</li>
              <li>Green Book</li>
              <li>Boyhood</li>
              <li>The Graduate</li>
              <li>It</li>
              <li>Full Metal Jacket</li>
              <li>Howl's Moving Castle</li>
              <li>The Wolf of Wall Street</li>
              <li>The Departed</li>
              <li>The Matrix</li>
              <li>Django Unchained</li>
              <li>Me and Earl and the Dying Girl</li>
            </ul>
          </div>


           <br/>

          <div className="misc-item">
            <h3>Tier 4: </h3>
            <ul>
              <li>Chronicle</li>
              <li>Dead Man's Shoes</li>
              <li>Donnie Darko</li>
              <li>Good Will Hunting</li>
              <li>Fight Club</li>
              <li>Grave of the Fireflies</li>
              <li>Bakjwi</li>
              <li>Arrival</li>
              <li>My Friend Dahmer</li>
              <li>Ex Machina</li>
              <li>Ingrid Goes West</li>
              <li>Thoroughbreds</li>
              <li>American Psycho</li>
              <li>Gladiator</li>
              <li>The Shining</li>
              <li>The Dark Knight</li>
              <li>The Wind Rises</li>
              <li>Eighth Grade</li>
              <li>Chopper</li>
              <li>The Babadook</li>
              <li>Minority Report</li>
              <li>The Fugitive</li>
              <li>Ray</li>
              <li>Looper</li>
              <li>It Follows</li>
              <li>Scarface</li>
              <li>Limitless</li>
              <li>Face/Off</li>
            </ul>
          </div>


        </Panel>
      </>
    );
  }
}
