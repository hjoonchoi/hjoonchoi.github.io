import * as React from 'react';

import { Panel } from 'components/Panel';
import { SEO } from 'components/SEO';

import './Education.css';

export interface EducationPanelProperties {
  renderCallback: () => void;
}

export class EducationPanel extends React.Component<EducationPanelProperties, {}> {
  public constructor(props) {
    super(props);
    this.props.renderCallback();
  }

  public render() {
    return (
      <>
        <SEO url="education" />
        <Panel
          title="University of Toronto"
          subtitle="  Computer Science"
        >
          {/*  */}
          <div className="education-item">
            <h3>Date: </h3><h4>September 2014 - September 2019</h4>
          </div>

          <div className="education-item">
            <h3>Stream: </h3><h4>Software Engineering Specialist</h4>
          </div>
          <div className="education-item">
            <h3>Relevant Coursework: </h3>
            <ul>
              <li>
                <h4>Software & Design</h4>
                <ul>
                  <li>Engineering Large Software Systems (CSCD01)</li>
                  <li>Introduction to Software Engineering (CSCC01)</li>
                  <li>Operating Systems (CSCC69)</li>
                  <li>Principles of Programming Languages (CSCC24)</li>
                  <li>Introduction to Databases (CSCC43)</li>
                  <li>Software Tools and Systems Programming (CSCB09)</li>
                  <li>Software Design (CSCB07)</li>
                </ul>
              </li>
              <li>
                <h4>Computer Science Theory & Mathematics</h4>
                <ul>
                  <li>Algorithm Design and Analysis (CSCC73)</li>
                  <li>Computability and Computational Complexity (CSCC63)</li>
                  <li>Introduction to Numerical Algorithms for Computational Mathematics (CSCC37)</li>
                  <li>Design and Analysis of Data Structures (CSCB63)</li>
                  <li>Techniques of the Calculus of Several Variables (MATB41)</li>
                  <li>Linear Algebra II (MATB24)</li>
                </ul>
              </li>
              <li>
                <h4>Computer Science Electives</h4>
                <ul>
                  <li>Computer and Network Security (CSCD27)</li>
                  <li>Programming on the Web (CSCC09)</li>
                  <li>Human-Computer Interaction (CSCC10)</li>
                  <li>Social and Information Networks (CSCC46)</li>
                  <li>Computers & Society (CSC300)</li>
                </ul>
              </li>
            </ul>
          </div>
        </Panel>
      </>
    );
  }
}
