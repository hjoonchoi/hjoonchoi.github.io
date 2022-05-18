import * as React from 'react';

import { SEO } from 'components/SEO';
import { JobEntry } from 'components/JobEntry';

import './Workpanel.css'

export interface WorkPanelProperties {
  renderCallback: () => void;
}

export class WorkPanel extends React.Component<WorkPanelProperties, {}> {
  public constructor(props) {
    super(props);
    this.props.renderCallback();
  }
  public render() {
    return (
      <>
        <SEO url="professional" />
        <div className="workpanels">
          <div className="entries">

            {/* */}
           <div className="job-entry">
              <h3>2022</h3>
              <JobEntry company="Wish" role="- Software Engineer" time="Mar. 2022 - Present">
                <p>

                              </p>
              </JobEntry>
           </div>

           <div className="job-entry">
              <h3>2020</h3>
              <JobEntry company="Amazon" role="- Software Development Engineer" time="Apr. 2020 - Feb. 2022">
                <p>

                              </p>
              </JobEntry>
           </div>


           <div className="job-entry">
              <h3>2019</h3>
              <JobEntry company="Southpaw Technology" role="- Software Developer" time="Apr. 2019 - Mar. 2020">
                <p>

                              </p>
              </JobEntry>
           </div>

            <div className="job-entry">
              <h3>2019</h3>
              <div className="workpanel-marker workpanel-marker-uoft">
              </div>
              <div className="timeline-entry">
                <div className="timeline-entry-title">
                  <h4><b>University of Toronto</b> - Finished University, <small>Sept. 2014 - Sept. 2019</small></h4>
                </div>
              </div>
            </div>


           <div className="job-entry">
              <h3>2018</h3>
              <JobEntry company="Southpaw Technology" role="- Application Engineer (Internship)" time="May. 2018 - Apr. 2019">
                <p>

                              </p>
              </JobEntry>
           </div>

           {/* 
            <div className="job-entry">
              <h3>2014</h3>
              <div className="workpanel-marker workpanel-marker-uoft">
              </div>
              <div className="timeline-entry">
                <div className="timeline-entry-title">
                  <h4><b>University of Toronto</b> - Started University, <small>Sept. 2014</small></h4>
                </div>
              </div>
            </div>
            */}
          </div>
          <div className="workpanels-content">
          </div>
        </div>
      </>
    );
  }
}
