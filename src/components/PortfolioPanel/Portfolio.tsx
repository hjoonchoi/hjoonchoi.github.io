import * as React from 'react';

import { SEO } from 'components/SEO'

import './Portfolio.css'

export interface PortfolioPanelProperties {
  renderCallback: () => void;
}

export class PortfolioPanel extends React.Component<PortfolioPanelProperties, {}> {
  public constructor(props) {
    super(props);
    this.props.renderCallback();
  }
  public render() {
    return (
      <>
        <SEO url="portfolio" />
        <div className="portfolio-panel">
      {/* 
        import Typist from 'react-typist';
          <Typist avgTypingDelay={13}>
          </Typist>
      */}
            <h3 className="cs-title" >Code Shrine</h3>
            <img className="cs-demo" src={"https://i.imgur.com/a474EIs.gif"} />
            <br />
            <p>
              Collaborative online code editor/compiler

              built using Node, React, PeerJS, and Chrome extension.
              <br/>
              <a href="https://github.com/roonjoot/CodeShrine">
                GitHub page</a>.
                        </p>
            <br />
            <p><small></small></p>
        </div>
      </>
    );
  }
}
