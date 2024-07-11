import { CCard, CCardBody, CCol, CRow } from '@coreui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Tabs, Tab, Alert } from 'react-bootstrap';

import '../../../scss/_custom.scss';

const IntegrationDecision = () => {
  const [integrationDecisions, setCheckedItems] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [integrationPercentage, setSelectedPercentageState] = useState(0);
  const [selectValueDefine, setSelectValueDefine] = useState('');
  const [selectValueComposition, setSelectValueComposition] = useState('');
  const [showCheckboxesDefine, setShowCheckboxesDefine] = useState(false);
  const [showCheckboxesComposition, setShowCheckboxesComposition] = useState(false);
  const dispatch = useDispatch();


  const TOTAL_ITEMS_DEFINE_HORIZONTAL = 2;
  const TOTAL_ITEMS_DEFINE_VERTICAL = 1;
  const TOTAL_ITEMS_COMPOSITION_CLIENT = 4;
  const TOTAL_ITEMS_COMPOSITION_SERVER = 2;
  const TOTAL_ITEMS_COMPOSITION_EDGE = 3;
  const TOTAL_ITEMS_ROUTE = 3;
  const TOTAL_ITEMS_COMMUNICATION = 5;

  const getTotalItems = () => {
    let total = TOTAL_ITEMS_ROUTE + TOTAL_ITEMS_COMMUNICATION; // items without select

    if (selectValueDefine === 'Horizontal') {
      total += TOTAL_ITEMS_DEFINE_HORIZONTAL;
    } else if (selectValueDefine === 'Vertical') {
      total += TOTAL_ITEMS_DEFINE_VERTICAL;
    }

    if (selectValueComposition === 'Client-Side') {
      total += TOTAL_ITEMS_COMPOSITION_CLIENT;
    } else if (selectValueComposition === 'Server-Side') {
      total += TOTAL_ITEMS_COMPOSITION_SERVER;
    } else if (selectValueComposition === 'Edge-Side') {
      total += TOTAL_ITEMS_COMPOSITION_EDGE;
    }

    return total;
  };

  useEffect(() => {
    const savedItems = localStorage.getItem('integrationDecisions');

    if (savedItems) {
      setCheckedItems(JSON.parse(savedItems));
    }

    const savedPercentage = localStorage.getItem('integrationPercentage');
    if (savedPercentage) {
      setSelectedPercentageState(parseFloat(savedPercentage));
    }
  }, []);

  const handleSelectChangeDefine = (event) => {
    const selectedOption = event.target.value;
    setSelectValueDefine(selectedOption);
    setShowCheckboxesDefine(true);
  };

  const handleSelectChangeComposition = (event) => {
    const selectedOption = event.target.value;
    setSelectValueComposition(selectedOption);
    setShowCheckboxesComposition(true);
  };

  const handleCheckboxChange = (event) => {
    const itemName = event.target.name;
    const isChecked = event.target.checked;
    setCheckedItems((prevCheckedItems) => {
      const checkedItemsIntegrationDecisions = {
        ...prevCheckedItems,
        [itemName]: isChecked,
      };
      localStorage.setItem('integrationDecisions', JSON.stringify(checkedItemsIntegrationDecisions));
      return checkedItemsIntegrationDecisions;
    });
  };

  useEffect(() => {
    const totalItems = getTotalItems();


    if (localStorage.getItem('integrationDecisions') === null) {
      console.log('esta vazio')
    }
    else {
      console.log('nao esta vazio')
      let isHorizontal = localStorage.getItem('integrationDecisions')
        .includes('Effective Coordination":true') || localStorage.getItem('integrationDecisions')
          .includes('Rigorous Governance":true')
      console.log("isHorizontal: ", isHorizontal);

      let isVertical = localStorage.getItem('integrationDecisions')
        .includes('Responsibility by Domain":true')
      console.log("isVertical: ", isVertical);



      if (isHorizontal && isVertical) {
        console.log('isHorizontal && isVertical')
      }

    }

    const selectedOptions = Object.values(integrationDecisions).filter((value) => value).length;
    const percentage = (selectedOptions / totalItems) * 100;
    if (totalItems > 0) {
      setSelectedPercentageState(percentage.toFixed(1));
      dispatch({ type: 'SET_INTEGATION_PERCENTAGE', payload: percentage.toFixed(1) });
      localStorage.setItem('integrationPercentage', percentage.toFixed(1));
    }

    setShowMessage(percentage === 100);
  }, [integrationDecisions, dispatch, selectValueDefine, selectValueComposition]);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <h4>Integration Decisions</h4>
            <hr />
            <div>
              {integrationPercentage <= 100 ? (
                <Alert variant="success">
                  Percentage of selected options: {localStorage.getItem('integrationPercentage') || '0.0'}%
                </Alert>
              ) : null}
              {integrationPercentage > 100 ? (
                <Alert variant="danger">
                  The total percentage of selected options exceeds 100%. Please review your selections Define and Composition.
                </Alert>
              ) : null}
            </div>
            <hr />
            <p>
              Integration Decisions play a key role in the Practical Implementation phase of GAM. In this context, choices related to Key Decisions include defining Composition, Routing, and Communication strategies. As for Orientation, it includes the decision between Vertical Division or Horizontal Division. Regarding composition and routing, it includes deciding on client-side, edge-side, or server-side. Each decision in this category directly impacts the application structure, influencing development and deployment independence, module organization logic, and the choice of specific architectural patterns.
            </p>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardBody>
            <section>
              <Tabs defaultActiveKey="define" id="integration-decisions-tabs" className="mb-3">

                <Tab eventKey="define" title="Define">
                  <p>
                    Choose the Orientation. Identify and define the micro-frontend from the point of view of its division. We can choose to have multiple micro-frontends in the same view (Horizontal Division) or have only one micro-frontend per view (Vertical Division).
                  </p>
                  <select id="define-options" value={selectValueDefine} onChange={handleSelectChangeDefine}>
                    <option value="">Select an option...</option>
                    <option value="Horizontal">Horizontal</option>
                    <option value="Vertical">Vertical</option>
                  </select>
                  <div>
                    {showCheckboxesDefine && (
                      <div>
                        {selectValueDefine === 'Horizontal' && (
                          <ul className="no-bullets">
                            <li><em>Objective:</em> Define the orientation of multiple micro-frontends in the same view</li>
                            <li><em>Recommendation:</em></li>
                            <ul className="no-bullets">
                              <div>
                                <label className='ml-2'>
                                  <input className='input-label'
                                    type="checkbox"
                                    name="Effective Coordination"
                                    checked={integrationDecisions['Effective Coordination'] || false}
                                    onChange={handleCheckboxChange}
                                  />
                                  Effective Coordination: Given the presence of multiple micro-frontends in the same view, it is essential to establish effective channels of communication and coordination between teams to ensure cohesion in the user experience.
                                </label>
                              </div>
                              <div>
                                <label className='ml-2'>
                                  <input className='input-label'
                                    type="checkbox"
                                    name="Rigorous Governance"
                                    checked={integrationDecisions['Rigorous Governance'] || false}
                                    onChange={handleCheckboxChange}
                                  />
                                  Rigorous Governance: Due to the flexibility offered by this approach, it is crucial to implement rigorous governance to prevent uncontrolled proliferation of micro-frontends. Establish clear guidelines to ensure consistency and quality.
                                </label>
                              </div>
                            </ul>
                            <div className="blue-box-2">
                              <strong>Practical Example: </strong>
                              In the Horizontal Orientation approach, we have as an example the e-commerce scenario, where different teams are responsible for distinct components such as the navigation bar, shopping cart, and displayed products. Each team can develop and evolve their micro-frontend independently, facilitating coordination between them.
                            </div>
                          </ul>
                        )}
                        {selectValueDefine === 'Vertical' && (
                          <ul className="no-bullets">
                            <li><em>Objective:</em> Define the orientation of only one micro-frontend per view</li>
                            <li><em>Recommendation:</em></li>
                            <ul className="no-bullets">
                              <div>
                                <label className='ml-2'>
                                  <input className='input-label'
                                    type="checkbox"
                                    name="Responsibility by Domain"
                                    checked={integrationDecisions['Responsibility by Domain'] || false}
                                    onChange={handleCheckboxChange}
                                  />
                                  Responsibility by Domain: By adopting vertical division, each team is responsible for a specific business domain. It is recommended to apply Domain-Driven Design (DDD) principles to ensure an architecture aligned with business requirements.
                                </label>
                              </div>


                            </ul>
                            <div className="blue-box-2">
                              <strong>Practical Example: </strong>
                              Each team would be in charge of a specific domain, such as authentication, ensuring that all aspects related to that domain are encapsulated. For example, one team can handle the entire authentication process, from login to security, providing a holistic view of the domain.
                            </div>
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                </Tab>

                <Tab eventKey="composition" title="Composition">
                  <p>
                    Choose the composition strategy for Micro-frontends, covering Client-Side, Server-Side, or Edge-Side *
                  </p>
                  <select id="composition-options" value={selectValueComposition} onChange={handleSelectChangeComposition}>
                    <option value="">Select an option...</option>
                    <option value="Client-Side">Client-Side</option>
                    <option value="Server-Side">Server-Side</option>
                    <option value="Edge-Side">Edge-Side</option>
                  </select>
                  {showCheckboxesComposition && (
                    <div>
                      {selectValueComposition === 'Client-Side' && (
                        <ul className="no-bullets">
                          <li><em>Objective:</em> Define the strategy for Client-Side Composition</li>
                          <li><em>Recommendation:</em></li>
                          <ul className="no-bullets">
                            <li>
                              <label className="ml-2">
                                <input
                                  className="input-label"
                                  type="checkbox"
                                  name="Component-Based Architecture"
                                  checked={integrationDecisions['Component-Based Architecture'] || false}
                                  onChange={handleCheckboxChange}
                                />
                                Component-Based Architecture: Utilize a modular approach where each micro-frontend is a self-contained component, promoting reusability and maintainability.
                              </label>
                            </li>
                            <li>
                              <label className="ml-2">
                                <input
                                  className="input-label"
                                  type="checkbox"
                                  name="Dynamic Loading"
                                  checked={integrationDecisions['Dynamic Loading'] || false}
                                  onChange={handleCheckboxChange}
                                />
                                Dynamic Loading: Implement dynamic loading mechanisms to load micro-frontends on demand, optimizing performance and user experience.
                              </label>
                            </li>
                            <li>
                              <label className="ml-2">
                                <input
                                  className="input-label"
                                  type="checkbox"
                                  name="Loose Coupling"
                                  checked={integrationDecisions['Loose Coupling'] || false}
                                  onChange={handleCheckboxChange}
                                />
                                Loose Coupling: Ensure loose coupling between micro-frontends to enable independent development, testing, and deployment.
                              </label>
                            </li>
                            <li>
                              <label className="ml-2">
                                <input
                                  className="input-label"
                                  type="checkbox"
                                  name="State Management"
                                  checked={integrationDecisions['State Management'] || false}
                                  onChange={handleCheckboxChange}
                                />
                                State Management: Define clear strategies for state management to maintain consistency and synchronization between micro-frontends.
                              </label>
                            </li>
                          </ul>
                          <div className="blue-box-2">
                            <strong>Practical Example:</strong> In the context of Client-Side Composition, consider an e-commerce platform where the shopping cart, product catalog, and user profile are separate micro-frontends loaded dynamically based on user interaction, ensuring a responsive and modular architecture.
                          </div>
                        </ul>
                      )}
                      {selectValueComposition === 'Server-Side' && (
                        <ul className="no-bullets">
                          <li><em>Objective:</em> Define the strategy for Server-Side Composition</li>
                          <li><em>Recommendation:</em></li>
                          <ul className="no-bullets">
                            <li>
                              <label className="ml-2">
                                <input
                                  className="input-label"
                                  type="checkbox"
                                  name="Server-Side Includes (SSI)"
                                  checked={integrationDecisions['Server-Side Includes (SSI)'] || false}
                                  onChange={handleCheckboxChange}
                                />
                                Server-Side Includes (SSI): Utilize SSI to include server-side processed content in the response, optimizing server load and enhancing performance.
                              </label>
                            </li>
                            <li>
                              <label className="ml-2">
                                <input
                                  className="input-label"
                                  type="checkbox"
                                  name="Template-Based Composition"
                                  checked={integrationDecisions['Template-Based Composition'] || false}
                                  onChange={handleCheckboxChange}
                                />
                                Template-Based Composition: Implement template-based composition where server-side templates are used to assemble micro-frontends into a cohesive page structure.
                              </label>
                            </li>
                          </ul>
                          <div className="blue-box-2">
                            <strong>Practical Example:</strong> In a Server-Side Composition scenario, consider a content management system where server-side templates dynamically assemble micro-frontends such as headers, navigation bars, and content sections based on user requests, ensuring server-side flexibility and control.
                          </div>
                        </ul>
                      )}
                      {selectValueComposition === 'Edge-Side' && (
                        <ul className="no-bullets">
                          <li><em>Objective:</em> Define the strategy for Edge-Side Composition</li>
                          <li><em>Recommendation:</em></li>
                          <ul className="no-bullets">
                            <li>
                              <label className="ml-2">
                                <input
                                  className="input-label"
                                  type="checkbox"
                                  name="Content Delivery Network (CDN)"
                                  checked={integrationDecisions['Content Delivery Network (CDN)'] || false}
                                  onChange={handleCheckboxChange}
                                />
                                Content Delivery Network (CDN): Leverage CDN to cache and deliver micro-frontends from edge servers closer to the user, reducing latency and improving performance.
                              </label>
                            </li>
                            <li>
                              <label className="ml-2">
                                <input
                                  className="input-label"
                                  type="checkbox"
                                  name="Edge Computing"
                                  checked={integrationDecisions['Edge Computing'] || false}
                                  onChange={handleCheckboxChange}
                                />
                                Edge Computing: Utilize edge computing capabilities to process and deliver micro-frontends closer to the user, enhancing responsiveness and reducing dependency on centralized servers.
                              </label>
                            </li>
                            <li>
                              <label className="ml-2">
                                <input
                                  className="input-label"
                                  type="checkbox"
                                  name="Global Load Balancing"
                                  checked={integrationDecisions['Global Load Balancing'] || false}
                                  onChange={handleCheckboxChange}
                                />
                                Global Load Balancing: Implement global load balancing strategies to distribute micro-frontends across edge locations based on user demand and traffic patterns, ensuring optimal performance and availability.
                              </label>
                            </li>
                          </ul>
                          <div className="blue-box-2">
                            <strong>Practical Example:</strong> In the context of Edge-Side Composition, consider a global e-commerce platform where micro-frontends are cached and delivered from edge servers located worldwide, ensuring fast and reliable access to product catalogs, promotional banners, and checkout processes, enhancing global scalability and user experience.
                          </div>
                        </ul>
                      )}
                    </div>
                  )}
                </Tab>
                <Tab eventKey="route" title="Route">
                  <ul className="no-bullets">
                    <li><em>Objective:</em> Ensure a cohesive and agile user experience aligned with the chosen composition strategy (origin, edge-side, or client-side). This involves correctly routing page requests to the appropriate micro-frontends, considering the specific characteristics of the project.</li>
                    <li><em>Recommendations:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Server-Side Routing"
                            checked={integrationDecisions['Server-Side Routing'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Server-Side Routing: Consider using application servers like Nginx to handle efficient routing and load distribution.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Edge-Side Routing"
                            checked={integrationDecisions['Edge-Side Routing'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Edge-Side Routing: Adopt CDNs like Cloudflare or Akamai that support Edge Side Includes (ESI) to compose micro-frontends at the edge.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Client-Side Routing"
                            checked={integrationDecisions['Client-Side Routing'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Client-Side Routing: Use client-side routing libraries like React Router or Vue Router for efficient navigation between micro-frontends. If opting for a SPA application shell, frameworks like Angular or React can handle internal routing between micro-frontends.
                        </label>
                      </div>
                    </ul>
                    <div className="blue-box-2">
                      <strong>Practical Example: </strong>
                      In an e-commerce application with micro-frontends covering different functionalities such as product catalog, shopping cart, and payment area, if the chosen strategy is client-side routing, the goal would be to dynamically load these micro-frontends based on user actions. Using React as the client-side framework, React Router could be implemented to manage transitions between micro-frontends. Webpack can be used to package and optimize the micro-frontends before loading in the browser, ensuring an efficient user experience.
                    </div>
                  </ul>
                </Tab>
                <Tab eventKey="communication" title="Communication">
                  <ul className="no-bullets">
                    <li><em>Objective:</em> Ensure consistent interaction between different components, even when they are distributed across multiple teams or parts of the application.</li>
                    <li><em>Recommendations:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Event Emitter"
                            checked={integrationDecisions['Event Emitter'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Event Emitter: Implement an Event Emitter or native JavaScript event functionality to enable asynchronous communication between micro-frontends.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Custom Events"
                            checked={integrationDecisions['Custom Events'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Custom Events: Adopt custom events like CustomEvent to notify other micro-frontends about specific events.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="EventBus Injection"
                            checked={integrationDecisions['EventBus Injection'] || false}
                            onChange={handleCheckboxChange}
                          />
                          EventBus Injection: Consider injecting an EventBus in the micro-frontends container to facilitate global communication.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Local Storage"
                            checked={integrationDecisions['Local Storage'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Local Storage: Use local storage to share persistent data between micro-frontends.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'></label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Query Strings"
                            checked={integrationDecisions['Query Strings'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Query Strings: Explore passing data via query strings for specific cases, such as product identification or page information.
                        </label>
                      </div>
                    </ul>
                    <div className="blue-box-2">
                      <strong>Practical Example: </strong>
                      A micro-frontend responsible for the authentication process needs to notify another micro-frontend about the successful completion of authentication, providing an access token. In this case, the use of custom events would be appropriate. The authentication micro-frontend dispatches a custom event, like &apos;userAuthenticated&apos;, with details containing the token. Other interested micro-frontends can adopt listening to this event and act accordingly, ensuring efficient and decoupled communication between components. The EventBus injected in the micro-frontends container would facilitate this global communication.
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
};

export default IntegrationDecision;

