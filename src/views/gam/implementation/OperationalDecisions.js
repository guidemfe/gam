import { CCard, CCardBody, CCol, CRow } from '@coreui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Tabs, Tab, Alert } from 'react-bootstrap';

import '../../../scss/_custom.scss';

const TOTAL_ITEMS = 16;

const OperationalDecisions = () => {
  const [operationalDecisions, setCheckedItems] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [operationalPercentage, setSelectedPercentageState] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedItems = localStorage.getItem('operationalDecisions');
    if (savedItems) {
      setCheckedItems(JSON.parse(savedItems));
    }

    const savedPercentage = localStorage.getItem('operationalPercentage');
    if (savedPercentage) {
      setSelectedPercentageState(parseFloat(savedPercentage));
    }
  }, []);

  const handleCheckboxChange = (event) => {
    const itemName = event.target.name;
    const isChecked = event.target.checked;
    setCheckedItems((prevCheckedItems) => {
      const checkedItemsManagerialFeasibility = {
        ...prevCheckedItems,
        [itemName]: isChecked,
      };
      localStorage.setItem('operationalDecisions', JSON.stringify(checkedItemsManagerialFeasibility));
      return checkedItemsManagerialFeasibility;
    });
  };

  useEffect(() => {
    const selectedOptions = Object.values(operationalDecisions).filter((value) => value).length;
    const percentage = (selectedOptions / TOTAL_ITEMS) * 100;
    if (TOTAL_ITEMS > 0) {
      setSelectedPercentageState(percentage.toFixed(1));
      dispatch({ type: 'SET_OPERATIONAL_PERCENTAGE', payload: percentage.toFixed(1) });
      localStorage.setItem('operationalPercentage', percentage.toFixed(1));
    }

    setShowMessage(percentage === 100);
  }, [operationalDecisions, dispatch]);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
              <h4>Operational Decisions</h4>
              <hr />
              <div>
                <Alert variant="success">
                  Percentage of selected options: {localStorage.getItem('operationalPercentage') || '0.0'}%
                </Alert>
              </div>
              <hr />
              <p>
              Operational decisions focus on the strategic choices of compilation and deployment areas, code sharing, performance optimization, and organizational structure. In the context of micro-frontends, making practical and well-informed operational decisions is crucial to ensure agility, efficient collaboration between teams, and continuous adaptation to the dynamic demands of distributed software development.
              </p>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardBody>
            <section>
              <Tabs defaultActiveKey="alignment" id="integration-implementation-tabs" className="mb-3">
                <Tab eventKey="alignment" title="Build an Deploy">
                  <ul className="no-bullets">
                    <li><em>Objective:</em> Implement an efficient compilation and deployment process to enable quick and independent updates of each micro-frontend.</li>
                    <li><em>Recommendations:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Continuous Integration and Delivery (CI/CD)"
                            checked={operationalDecisions['Continuous Integration and Delivery (CI/CD)'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Continuous Integration and Delivery (CI/CD): Use continuous integration and delivery (CI/CD) tools to automate the compilation, testing, and deployment process. Ensure that each code change is submitted to an automated pipeline for validation and automatic deployment.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Pipeline"
                            checked={operationalDecisions['Pipeline'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Pipeline: Set up continuous delivery pipelines to ensure smooth integration and rapid deployments. Automate the generation of artifacts, such as containers or packages, ready for deployment in production environments.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Orchestration"
                            checked={operationalDecisions['Orchestration'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Orchestration: Explore tools like Kubernetes for container orchestration and scalability.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Logs and Tracing"
                            checked={operationalDecisions['Logs and Tracing'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Logs and Tracing: Integrate logging and tracing systems to track events during the compilation and deployment process. This facilitates quick problem identification and performance analysis.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Performance Metrics"
                            checked={operationalDecisions['Performance Metrics'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Performance Metrics: Implement performance metrics during compilation and deployment to monitor the efficiency of the process. Use tools that provide real-time visibility and alerts for critical events.
                        </label>
                      </div>
                    </ul>
                    <div className="blue-box-2">
                      <strong>Practical Example: </strong> 
                      When implementing automation, the team decides to integrate a CI/CD tool, such as Jenkins, into the source code repository. Each code change automatically triggers a continuous delivery pipeline, which includes automated testing and the generation of Docker containers ready for deployment. Additionally, they choose to use Kubernetes to orchestrate these containers, ensuring efficient scalability. For observability, they integrate logging and tracing tools like the ELK Stack to monitor events during the build and deployment process. Performance metrics are configured using Prometheus, providing real-time visibility and alerts for critical events. These operational decisions promote agile and efficient building and deployment of micro-frontends.
                    </div>
                  </ul>
                </Tab>
                <Tab eventKey="costs" title="Code Sharing">
                  <ul className="no-bullets">
                    <li><em>Objective:</em> Facilitate and optimize code sharing among different micro-frontends, promoting an efficient and collaborative approach in distributed development.</li>
                    <li><em>Recommendations:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Identification of Common Functionalities"
                            checked={operationalDecisions['Identification of Common Functionalities'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Identification of Common Functionalities: Identify common functionalities that can be used by libraries.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Web Components and Design System"
                            checked={operationalDecisions['Web Components and Design System'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Web Components and Design System: Create Web Components to encapsulate specific functionalities, ensuring modularity and reusability, and integrate them into the organization&apos;s Design System, ensuring visual and interaction consistency across all micro-frontends.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Version Control"
                            checked={operationalDecisions['Version Control'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Version Control: Implement a version control system like git using package management tools like npm or yarn.
                        </label>
                      </div>
                    </ul>
                    <div className="blue-box-2">
                      <strong>Practical Example: </strong> 
                      The team begins the process by identifying common functionalities that can be encapsulated into libraries. They develop reusable Web Components for modularity and reusability, integrating them into the organization&apos;s Design System to ensure visual and interaction consistency. They choose to use Git as the version control system, combined with npm or yarn for efficient package management. These decisions aim to promote efficient code sharing among the micro-frontends, facilitating collaborative and distributed development.
                    </div>
                  </ul>
                </Tab>
                <Tab eventKey="change-management" title="Performance">
                  <ul className="no-bullets">
                    <li><em>Objective:</em> Ensure efficient performance in the Micro-Frontends architecture, optimizing the loading, rendering, and interaction of interfaces to provide an agile and responsive user experience.</li>
                    <li><em>Recommendations:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Asynchronous Module Loading"
                            checked={operationalDecisions['Asynchronous Module Loading'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Asynchronous Module Loading: Adopt asynchronous loading strategies, such as Lazy Loading, to load modules only when needed, reducing the initial loading time.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Rendering Optimization"
                            checked={operationalDecisions['Rendering Optimization'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Rendering Optimization: Use techniques like Virtual DOM or Shadow DOM to optimize rendering, minimizing unnecessary updates to the user interface.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="State Management"
                            checked={operationalDecisions['State Management'] || false}
                            onChange={handleCheckboxChange}
                          />
                          State Management: Implement state management by choosing a solution that minimizes excessive reactivity and maintains consistent state across micro-frontends.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Resource Caching"
                            checked={operationalDecisions['Resource Caching'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Resource Caching: Implement caching strategies for static and dynamic resources, reducing the need to repeatedly fetch the same data from the server.
                        </label>
                      </div>
                    </ul>
                    <div className="blue-box-2">
                      <strong>Practical Example: </strong> 
                      The team decides to adopt Lazy Loading to asynchronously load modules, especially those not essential during the initial load. They implement the Virtual DOM to optimize rendering, ensuring efficient updates. They choose Redux as the state management solution due to its efficiency with micro-frontends. Additionally, they establish caching strategies using local storage for static resources and server-side caching for dynamic data, promoting efficient performance in the Micro-Frontends architecture.
                    </div>
                  </ul>
                </Tab>
                <Tab eventKey="organizational-structure" title="Organizational Structure">
                  <ul className="no-bullets">
                    <li><em>Objective:</em> Establish an efficient organizational structure for the implementation of Micro-Frontends, promoting seamless collaboration between teams and ensuring cohesion in feature delivery.</li>
                    <li><em>Recommendations:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Squad Model"
                            checked={operationalDecisions['Squad Model'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Squad Model: Implement the Squad model, where multifunctional and autonomous teams are responsible for specific features. This promotes specialization and agility, enabling independent delivery of micro-frontends.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Agile Methodology"
                            checked={operationalDecisions['Agile Methodology'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Agile Methodology: Adopt agile methodologies like Scrum or Kanban to manage the development of micro-frontends. Regular sprints, retrospective meetings, and agile practices strengthen collaboration and continuous adaptation.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Collaboration Tools"
                            checked={operationalDecisions['Collaboration Tools'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Collaboration Tools: Use collaboration tools like Slack, Microsoft Teams, or other communication platforms. These tools facilitate communication between distributed teams, promoting effective information exchange.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="DevOps Culture"
                            checked={operationalDecisions['DevOps Culture'] || false}
                            onChange={handleCheckboxChange}
                          />
                          DevOps Culture: Foster a DevOps culture by integrating development and operations. This includes process automation, continuous delivery, and monitoring, ensuring efficiency in implementation and maintenance.
                        </label>
                      </div>
                    </ul>
                    <div className="blue-box-2">
                      <strong>Practical Example: </strong> 
                      The team decides to adopt the Squad model, forming teams dedicated to different micro-frontends. They choose the Scrum methodology to manage development, conducting regular sprints and retrospective meetings. They use Teams as the communication platform to facilitate collaboration among distributed teams. These structural choices contribute to a practical and collaborative implementation of Micro-Frontends.
                    </div>
                  </ul>
                </Tab>
              </Tabs>
            </section>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default OperationalDecisions;
