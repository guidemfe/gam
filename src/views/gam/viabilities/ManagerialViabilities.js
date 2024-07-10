import { CCard, CCardBody, CCol, CRow, CButton } from '@coreui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Tabs, Tab, Alert } from 'react-bootstrap';

import '../../../scss/_custom.scss';

const TOTAL_ITEMS = 9;

const ManagerialViabilities = () => {
  const [managerialViabilities, setCheckedItems] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [managerialPercentage, setSelectedPercentageState] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedItems = localStorage.getItem('managerialViabilities');
    if (savedItems) {
      setCheckedItems(JSON.parse(savedItems));
    }

    const savedPercentage = localStorage.getItem('managerialPercentage');
    if (savedPercentage) {
      setSelectedPercentageState(parseFloat(savedPercentage));
    }
  }, []);

  const handleCheckboxChange = (event) => {
    const itemName = event.target.name;
    const isChecked = event.target.checked;
    setCheckedItems((prevCheckedItems) => {
      const checkedItemsManagerialViabilities = {
        ...prevCheckedItems,
        [itemName]: isChecked,
      };
      localStorage.setItem('managerialViabilities', JSON.stringify(checkedItemsManagerialViabilities));
      return checkedItemsManagerialViabilities;
    });
  };

  useEffect(() => {
    const selectedOptions = Object.values(managerialViabilities).filter((value) => value).length;
    const percentage = (selectedOptions / TOTAL_ITEMS) * 100;
    if (TOTAL_ITEMS > 0) {
      setSelectedPercentageState(percentage.toFixed(1));
      dispatch({ type: 'SET_MANAGERIAL_PERCENTAGE', payload: percentage.toFixed(1) });
      localStorage.setItem('managerialPercentage', percentage.toFixed(1));
    }

    setShowMessage(percentage === 100);
  }, [managerialViabilities, dispatch]);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
              <h4>Managerial Viability</h4>
              <hr />
              <div>
                <Alert variant="success">
                  Percentage of selected options: {localStorage.getItem('managerialPercentage') || '0.0'}%
                </Alert>
              </div>
              <hr />
              <p>
              In the context of implementing Micro-Frontends architecture, various managerial viability become crucial for the project success. This document addresses strategic, financial, and change management issues that organizations should consider when adopting this architectural approach. The managerial viability presented include alignment with strategic objectives, cost and budget evaluation, and change management and training. Each topic highlights practical recommendations and examples, providing valuable insights for leaders and teams involved in the transition to Micro-Frontends architecture.
              </p>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardBody>
            <section>
              <Tabs defaultActiveKey="alignment" id="managerial-viability-tabs" className="mb-3">
                <Tab eventKey="alignment" title="Alignment with Strategic Objectives">
                  <ul>
                    <li>Objective: Ensure that the implementation of the Micro-Frontends architecture is aligned with the organization&apos;s strategic objectives.</li>
                    <li>Recommendations:</li>
                    <ul>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Management Impact Analysis"
                            checked={managerialViabilities['Management Impact Analysis'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Management Impact Analysis: Conduct an impact analysis of the progressive introduction of micro-frontends on strategic management objectives. Evaluate the feasibility of gradual alignment without forcing an immediate transition.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Benefit Mapping:"
                            checked={managerialViabilities['Benefit Mapping:'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Benefit Mapping: Identify the potential benefits of the gradual adoption of micro-frontends for the company&apos;s strategic objectives, prioritizing harmonization with existing goals.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Strategic Goal Adjustments"
                            checked={managerialViabilities['Strategic Goal Adjustments'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Strategic Goal Adjustments: Analyze the need to adjust or realign strategic goals to optimize the adoption of micro-frontends, ensuring they are aligned with the organization&apos;s long-term vision.
                        </label>
                      </div>
                    </ul>
                    <div className="blue-box-2">
                      <strong>Practical Example: </strong> 
                       To align the adoption of micro-frontends architecture with strategic objectives, management should identify specific goals, involve stakeholders, establish measurable key performance indicators (KPIs), implement agile methodologies, conduct continuous evaluations with feedback from end users, adjust strategies as necessary, and maintain transparent communication about progress and challenges.
                    </div>
                  </ul>
                </Tab>
                <Tab eventKey="costs" title="Costs and Budget">
                  <ul>
                    <li>Objective: Evaluate the financial impacts related to the adoption of micro-frontends architecture within the context of GAM, identifying associated costs and ensuring effective budget management.</li>
                    <li>Recommendations:</li>
                    <ul>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Detailed Cost Assessment"
                            checked={managerialViabilities['Detailed Cost Assessment'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Detailed Cost Assessment: Conduct a survey of the costs associated with the implementation of micro-frontends. Include expenses related to team training, potential infrastructure upgrades, and acquisition of specific tools.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Flexible Budget"
                            checked={managerialViabilities['Flexible Budget'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Flexible Budget: Establish a flexible budget that allows for adaptations as the micro-frontends adoption project evolves. Incorporate a contingency margin for unforeseen events and adjustments during the initial phases of implementation.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="roi"
                            checked={managerialViabilities['roi'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Return on Investment (ROI) Evaluation: Develop metrics for assessing return on investment. Monitor key indicators to ensure expected benefits align with the financial resources invested.
                        </label>
                      </div>
                    </ul>
                    <div className="blue-box-2">
                      <strong>Practical Example: </strong> 
                      When adopting the micro-frontends architecture, XYZ company needs to assess the costs associated with the transition. This includes expenses for team training, acquisition of specific tools for development and maintenance of the new architecture, and potential platform licensing costs. It is recommended to conduct a thorough analysis to estimate these costs, allowing for proper allocation of resources in the budget. Additionally, creating alternative scenarios, such as maintaining the current structure or evaluating other architectures, provides a comprehensive view of available options, contributing to a strategically and financially sound decision.
                    </div>
                  </ul>
                </Tab>
                <Tab eventKey="change-management" title="Change Management and Training">
                  <ul>
                    <li>Objective: Evaluate the organization&apos;s ability to manage the changes that adopting Micro-Frontends architecture may bring. This includes identifying impacts on processes, organizational culture, and team structure, as well as preparing the team for the transition.</li>
                    <li>Recommendations:</li>
                    <ul>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Effective Communication"
                            checked={managerialViabilities['Effective Communication'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Effective Communication: Establish a clear and open communication plan to inform team members about the planned changes. Communicate the benefits of the new architecture, emphasizing how it will contribute to the company&apos;s strategic objectives.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Customized Training"
                            checked={managerialViabilities['Customized Training'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Customized Training: Develop specific training programs for teams directly involved with Micro-Frontends. Ensure team members have the necessary skills to work efficiently with the new architecture.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Defining Milestones and Metrics"
                            checked={managerialViabilities['Defining Milestones and Metrics'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Defining Milestones and Metrics: Establish clear milestones and measurable metrics to assess progress during the transition. Defining success indicators will help monitor the effectiveness of change management strategies and identify areas that need adjustment.
                        </label>
                      </div>
                    </ul>
                    <div className="blue-box-2">
                      <strong>Practical Example: </strong> 
                      A company looking to adopt Micro-Frontends architecture needs to assess its organizational capacity to handle the changes that come with this transition. To ensure a smooth transition, the company adopts practices such as effective communication, holding regular meetings to highlight the benefits of the new architecture, and providing customized training for involved teams. Simultaneously, clear milestones and measurable metrics are established to monitor progress, enabling continuous evaluation and the ability to adjust change management strategies as needed. These measures aim to prepare the team and organizational structure for the transformations that come with adopting Micro-Frontends.
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

export default ManagerialViabilities;
