import { CCard, CCardBody, CCol, CRow } from '@coreui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Tabs, Tab, Alert } from 'react-bootstrap';

import '../../../scss/_custom.scss';

const TOTAL_ITEMS = 11;

const IntegrationDecision = () => {
  const [integrationDecisions, setCheckedItems] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [integrationPercentage, setSelectedPercentageState] = useState(0);
  const [selectValue, setSelectValue] = useState('');
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const dispatch = useDispatch();

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

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setSelectValue(selectedOption);
    setShowCheckboxes(true); // Mostra os checkboxes quando uma opção é selecionada
  };

  const handleCheckboxChange = (event) => {
    const itemName = event.target.name;
    const isChecked = event.target.checked;
    setCheckedItems((prevCheckedItems) => {
      const checkedItemsManagerialFeasibility = {
        ...prevCheckedItems,
        [itemName]: isChecked,
      };
      localStorage.setItem('integrationDecisions', JSON.stringify(checkedItemsManagerialFeasibility));
      return checkedItemsManagerialFeasibility;
    });
  };

  useEffect(() => {
    const selectedOptions = Object.values(integrationDecisions).filter((value) => value).length;
    const percentage = (selectedOptions / TOTAL_ITEMS) * 100;
    if (TOTAL_ITEMS > 0) {
      setSelectedPercentageState(percentage.toFixed(1));
      dispatch({ type: 'SET_INTEGATION_PERCENTAGE', payload: percentage.toFixed(1) });
      localStorage.setItem('integrationPercentage', percentage.toFixed(1));
    }

    setShowMessage(percentage === 100);
  }, [integrationDecisions, dispatch]);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <h4>Integration Decisions</h4>
            <hr />
            <div>
              <Alert variant="success">
                Percentage of selected options: {localStorage.getItem('integrationPercentage') || '0.0'}%
              </Alert>
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
              <Tabs defaultActiveKey="alignment" id="integration-implementation-tabs" className="mb-3">
                <Tab eventKey="define" title="Define">
                  <p>
                    Choose the Orientation. Identify and define the micro-frontend from the point of view of its division. We can choose to have multiple micro-frontends in the same view (Horizontal Division) or have only one micro-frontend per view (Vertical Division).
                  </p>
                  <select id="define-options" value={selectValue} onChange={handleChange}>
                    <option value="">Select an option...</option>
                    <option value="Horizontal">Horizontal</option>
                    <option value="Vertical">Vertical</option>
                  </select>
                  <div>
                    {showCheckboxes && (
                      <div>
                        {selectValue === 'Horizontal' && (
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
                        {selectValue === 'Vertical' && (
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
                  <select id="opcoes" value={selectValue} onChange={handleChange}>
                    <option value="">Select an option...</option>
                    <option value="Client-Side">Client-Side</option>
                    <option value="Server-Side">Server-Side</option>
                    <option value="Edge-Side">Edge-Side</option>
                  </select>
                  <div>
                    {showCheckboxes && (
                      <div>
                        {selectValue === 'Client-Side' && (
                          <ul className="no-bullets">
                            <li><em>Objective:</em> Facilitate the dynamic integration of micro-frontends into the client application shell, allowing different parts of the interface to be loaded efficiently.</li>
                            <li><em>Recommendation:</em></li>
                            <ul className="no-bullets">
                              <div>
                                <label className='ml-2'>
                                  <input className='input-label'
                                    type="checkbox"
                                    name="Use of Iframes"
                                    checked={integrationDecisions['Use of Iframes'] || false}
                                    onChange={handleCheckboxChange}
                                  />
                                  Use of Iframes: Ensure that each micro-frontend has a JavaScript or HTML file defined as an entry point, facilitating dynamic addition to the Document Object Model (DOM) by the application shell.
                                </label>
                              </div>
                              <div>
                                <label className='ml-2'>
                                  <input className='input-label'
                                    type="checkbox"
                                    name="Single-SPA"
                                    checked={integrationDecisions['Single-SPA'] || false}
                                    onChange={handleCheckboxChange}
                                  />
                                  Single-SPA: Enable the composition and delivery of micro-frontends through JavaScript-based integration using Single Page Application (Single-SPA) frameworks like Angular, React, and Vue.
                                </label>
                              </div>
                              <div>
                                <label className='ml-2'>
                                  <input className='input-label'
                                    type="checkbox"
                                    name="Web Components"
                                    checked={integrationDecisions['Web Components'] || false}
                                    onChange={handleCheckboxChange}
                                  />
                                  Web Components: Deliver micro-frontends by creating reusable custom elements with web components.
                                </label>
                              </div>
                              <div>
                                <label className='ml-2'>
                                  <input className='input-label'
                                    type="checkbox"
                                    name="Client-Side Transclusion"
                                    checked={integrationDecisions['Client-Side Transclusion'] || false}
                                    onChange={handleCheckboxChange}
                                  />
                                  Client-Side Transclusion: Evaluate the client-side inclusion technique, using libraries like h-include, to load components late and dynamically.
                                </label>
                              </div>

                            </ul>
                            <div className="blue-box-2">
                              <strong>Practical Example: </strong>
                              In an online news application, the goal is to dynamically integrate different modules such as headlines, related articles, and comments, providing a seamless reading experience. To achieve this, each module will be developed as a micro-frontend with a defined entry point, allowing dynamic embedding in the application shell using iframe elements. The use of the Single-SPA framework will facilitate the integration of micro-frontends developed in Angular, React, and Vue. Custom elements like headline-module and comment-module will be created as Web Components, ensuring modularity and reusability.
                            </div>
                          </ul>
                        )}
                        {selectValue === 'Server-Side' && (
                          <ul className="no-bullets">
                            <li><em>Objective:</em> Assemble the view at the CDN level, optimizing the global delivery of the application through strategies like Edge Side Includes (ESI).</li>
                            <li><em>Recommendation:</em></li>
                            <ul className="no-bullets">
                              <div>
                                <label className='ml-2'>
                                  <input className='input-label'
                                    type="checkbox"
                                    name="Use of ESI"
                                    checked={integrationDecisions['Use of ESI'] || false}
                                    onChange={handleCheckboxChange}
                                  />
                                  Use of ESI: Consider using Edge Side Includes (ESI) to compose at the edge, leveraging the scaling capabilities offered by CDNs and facilitating view assembly.
                                </label>
                              </div>
                              <div>
                                <label className='ml-2'>
                                  <input className='input-label'
                                    type="checkbox"
                                    name="Consideration of CDN Variations"
                                    checked={integrationDecisions['Consideration of CDN Variations'] || false}
                                    onChange={handleCheckboxChange}
                                  />
                                  Consideration of CDN Variations: Be aware that ESI can be implemented differently by different CDN providers, requiring special considerations in a multi-CDN strategy or migrations between providers.
                                </label>
                              </div>

                            </ul>
                            <div className="blue-box-2">
                              <strong>Practical Example: </strong>
                              In a global e-commerce site, the goal is to optimize content delivery by assembling the view at the CDN level. Edge Side Includes (ESI) strategy is adopted to dynamically compose elements like shopping cart, promotions, and recommendations based on the user&apos;s location. The use of ESI allows efficient assembly at the network edge, leveraging the scaling capabilities offered by CDNs. Careful implementation will consider variations between CDN providers, ensuring an effective strategy in multi-CDN environments or provider migrations.
                            </div>
                          </ul>
                        )}
                        {selectValue === 'Edge-Side' && (
                          <ul className="no-bullets">
                            <li><em>Objective:</em> Allow the origin server to compose the view, retrieving different micro-frontends and assembling the final page.</li>
                            <li><em>Recommendation:</em></li>
                            <ul className="no-bullets">
                              <div>
                                <label className='ml-2'>
                                  <input className='input-label'
                                    type="checkbox"
                                    name="Use Case Analysis"
                                    checked={integrationDecisions['Use Case Analysis'] || false}
                                    onChange={handleCheckboxChange}
                                  />
                                  Use Case Analysis: Before opting for server-side composition, perform a thorough analysis of the application&apos;s use cases to understand the nature and requirements of the pages to be composed.
                                </label>
                              </div>
                              <div>
                                <label className='ml-2'>
                                  <input className='input-label'
                                    type="checkbox"
                                    name="Scalability"
                                    checked={integrationDecisions['Scalability'] || false}
                                    onChange={handleCheckboxChange}
                                  />
                                  Scalability: Develop a clear scalability strategy for the servers to handle a large volume of requests, especially when there is page personalization for each user, to avoid downtime for these users.
                                </label>
                              </div>
                              <div>
                                <label className='ml-2'>
                                  <input className='input-label'
                                    type="checkbox"
                                    name="Cache"
                                    checked={integrationDecisions['Cache'] || false}
                                    onChange={handleCheckboxChange}
                                  />
                                  Cache: Evaluate the cacheability of the page to determine the effectiveness of server-side composition. If the page is highly cacheable, leverage the long-lived time policies offered by CDNs, optimizing performance and content delivery efficiency.
                                </label>
                              </div>

                            </ul>
                            <div className="blue-box-2">
                              <strong>Practical Example: </strong>
                              In a customized content management system, where different clients require specific views, the goal is to allow the origin server to compose the view by retrieving personalized micro-frontends and assembling the final page. A detailed analysis of use cases is performed to understand the nature and requirements of the pages to be composed. A scalability strategy is adopted considering page personalization for each user. The cacheability of the page is also evaluated, allowing efficient server-side composition, optimizing performance and content delivery efficiency.
                            </div>
                          </ul>
                        )}
                      </div>
                    )}
                  </div>

                  <hr />

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
}

export default IntegrationDecision;
