import { CCard, CCardBody, CCol, CRow } from '@coreui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Tabs, Tab, Alert } from 'react-bootstrap';

import PilotoImg from '../../../assets/images/gam_pilot_project.png'
import '../../../scss/_custom.scss';

const TOTAL_ITEMS = 4;

const PilotProject = () => {
  const [pilotProject, setCheckedItems] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [pilotPercentage, setSelectedPercentageState] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedItems = localStorage.getItem('pilotProject');
    if (savedItems) {
      setCheckedItems(JSON.parse(savedItems));
    }

    const savedPercentage = localStorage.getItem('pilotPercentage');
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
      localStorage.setItem('pilotProject', JSON.stringify(checkedItemsManagerialFeasibility));
      return checkedItemsManagerialFeasibility;
    });
  };

  useEffect(() => {
    const selectedOptions = Object.values(pilotProject).filter((value) => value).length;
    const percentage = (selectedOptions / TOTAL_ITEMS) * 100;
    if (TOTAL_ITEMS > 0) {
      setSelectedPercentageState(percentage.toFixed(1));
      dispatch({ type: 'SET_PILOT_PERCENTAGE', payload: percentage.toFixed(1) });
      localStorage.setItem('pilotPercentage', percentage.toFixed(1));
    }

    setShowMessage(percentage === 100);
  }, [pilotProject, dispatch]);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
              <h4>Pilot Project</h4>
              <hr />
              <div>
                <Alert variant="success">
                  Percentage of selected options: {localStorage.getItem('pilotPercentage') || '0.0'}%
                </Alert>
              </div>
              <hr />
              <p>
              This section of the Pilot Project Guidelines for Adopting Micro-Frontends (GAM) represents a milestone in the practical implementation process of the Micro-Frontends architecture. In this phase, a controlled environment was used, where the study of technical feasibility, previously outlined operational and integration decisions were applied tangibly. The Pilot Project serves as a validation test, allowing development teams, software architects, and project leaders to observe how theoretical strategies translate into operational reality. The figure below provides an overview of the central role of the Pilot Project in the context of GAM.
              </p>
              <p>
              <img src={PilotoImg} alt="Pilot Project" className="img-fluid mb-3 center-img" />
              </p>
              <p>During this phase, we will highlight not only the technical implementation but also the lessons learned and necessary adjustments as the team gains valuable insights into the practical application of the Micro-Frontends paradigm. The Pilot Project offers a unique opportunity to evaluate the effectiveness of architectural and integration choices in a controlled context before a broader expansion to other projects or areas of the system. The choice of the Pilot Project is a key point for the success of Micro-Frontends adoption. At this stage, stakeholders should consider the following aspects:</p>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardBody>
            <section>
              <Tabs defaultActiveKey="alignment" id="integration-implementation-tabs" className="mb-3">
                <Tab eventKey="alignment" title="Pilot Project Selection">
                  <ul className="no-bullets">
                    <li><em>Objective:</em> The choice of the Pilot Project is a key point for the success of Micro-Frontends adoption. At this stage, stakeholders should consider the following aspects.</li>
                    <li><em>Recommendations:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Project Complexity"
                            checked={pilotProject['Project Complexity'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Project Complexity: Evaluate the overall complexity of the project in terms of functionalities, interactions, and number of components. More complex and extensive projects can provide a better understanding of the challenges and benefits of using Micro-Frontends.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Diverse Component"
                            checked={pilotProject['Diverse Component'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Diverse Component: Look for projects that have a representative variety of components. This allows exploring how different types of functionalities can be encapsulated in Micro-Frontends and integrated efficiently.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Scenario Representativeness"
                            checked={pilotProject['Scenario Representativeness'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Scenario Representativeness: Ensure that the selected project is representative of the broader organization&apos;s environment. A Pilot that reflects typical frontend development challenges and requirements will provide more applicable insights.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Potential Impact"
                            checked={pilotProject['Potential Impact'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Potential Impact: Consider the potential impact of the Pilot Project on the organization. Choosing a project with significant but controlled impact allows evaluating the results without compromising the overall system stability.
                        </label>
                      </div>
                    </ul>
                    <div className="blue-box-2">
                      <strong>Practical Example: </strong> 
                      During the implementation phase of the pilot project, the team chooses to select the shopping cart page as the initial scenario, considering the project&apos;s complexity as the page involves various functionalities, from displaying items in the cart to managing coupons and payment options. Component diversity is ensured, ranging from simple elements like icons to more complex components like discount application logic. Scenario representativeness is guaranteed as the shopping cart page reflects typical frontend challenges, including interactions with the inventory database, price calculations, and integrations with payment gateways. As for potential impact, the project has significant relevance as improvements in the user experience at this stage of the purchase process can have a noticeable but controlled impact, allowing for in-depth evaluation before a broader expansion of the Micro-Frontends architecture to other areas of the system.
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

export default PilotProject;
