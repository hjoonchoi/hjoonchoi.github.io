import * as React from "react";
import './About.css'
import Typist from 'react-typist'
import { SEO } from 'components/SEO';

enum TerminalStep {
  ABOUT_START = 0,
  ABOUT_CALL_NEXT = 1,
  CONTACT_START = 2,
  DONE = 3
}

export interface TerminalProps {
  renderCallback: () => void;
}

export interface TerminalState {
  step: TerminalStep
}

const SHELL_INPUT = <span>➜  ~ </span>;
const CALL_ABOUT_ME = 'cat about_me.txt';
const CALL_NEXT = 'cat contact_me.txt';


const ABOUT_NODE = (
  <div>
    <p>
      Hello, welcome to my personal website! I'm a
      Software Engineer based in Toronto, and I studied Computer Science at the University of Toronto.
    </p>
    <p>
      I'm currently working full-time as a Software Engineer at Wish, and previously worked at Amazon as a Software Development Engineer.
    </p>
    <p>
    </p>
  </div>
);

const CONTACT_NODE = (
  <div>
    <p><b>Resume: </b><a href="https://drive.google.com/file/d/1KmsfTnfP5rM5j1N0Hkf0lDvkh570AzJC/view?usp=sharing">View</a></p>
    <p><b>LinkedIn: </b><a href="https://www.linkedin.com/in/joon-choi-927542187/">Joon Choi</a></p>
    <p><b>Email: </b><a href="mailto:joonkbjc@gmail.com">joonkbjc@gmail.com</a></p>
    <p><b>GitHub: </b><a href="https://github.com/hjoonchoi" target="_blank">hjoonchoi</a></p>
  </div>
);


const BLINKER_NODE = (
  <div>
    {/* <p><b>Design thanks to: </b><a href="https://github.com/jeraguilon" target="_blank">JerAguilon</a></p> */}
    <p>{SHELL_INPUT}<span className="Cursor Cursor--blinking">|</span></p>

  </div>
);

export class About extends React.Component<TerminalProps, TerminalState> {
  public constructor(props: TerminalProps) {
    super(props);
    this.state = { step: TerminalStep.ABOUT_START };
    this.props.renderCallback();
  }

  public render() {
    return (
      <div className={'about'}>
        <SEO url="about" />
        <div className={'terminal terminal-about'}>
          <div className={'terminal-header'}>
            About Me
              <div className={'terminal-buttons'}>
                <div className={'terminal-button terminal-button-max'} />
                <div className={'terminal-button terminal-button-min'} />
                <div className={'terminal-button terminal-button-close'} />
            </div>
          </div>
          {this.state.step >= TerminalStep.ABOUT_START
            ? this.createTypist(TerminalStep.ABOUT_START, CALL_ABOUT_ME) : ''}
          {this.state.step >= TerminalStep.ABOUT_CALL_NEXT 
            ? ABOUT_NODE : ''}
          {this.state.step >= TerminalStep.ABOUT_CALL_NEXT
            ? this.createTypist(TerminalStep.ABOUT_CALL_NEXT, CALL_NEXT) : ''}
          {this.state.step >= TerminalStep.CONTACT_START
            ? CONTACT_NODE : ''}
          {this.state.step >= TerminalStep.CONTACT_START 
            ? BLINKER_NODE : ''}
        </div>
      </div>
    );
  }

  private createTypist = (step: TerminalStep, command: string) => {
    const doneHandler = this.proceedNext(step);
    return (
      <div>
        {SHELL_INPUT}
        <Typist avgTypingDelay={30}
          onTypingDone={doneHandler}
          cursor={{ hideWhenDone: true }}
          startDelay={500}>
          <p>{command}</p>
        </Typist>
      </div>
    );
  }

  private proceedNext = (step: TerminalStep) => {
    return () => this.setState({ step: TerminalStep[TerminalStep[(step + 1)]] });
  }
}
