import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';
import { Tabs, Tab, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import '../../../scss/_custom.scss'; 

const TOTAL_ITEMS = 11;

const TechnicalViabilities = () => {
  const [technicalViabilities, setCheckedItems] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [technicalPercentage, setSelectedPercentageState] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedItems = localStorage.getItem('technicalViabilities');
    if (savedItems) {
      setCheckedItems(JSON.parse(savedItems));
    }

    const savedPercentage = localStorage.getItem('technicalPercentage');
    if (savedPercentage) {
      setSelectedPercentageState(parseFloat(savedPercentage));
    }
  }, []);

  const handleCheckboxChange = (event) => {
    const itemName = event.target.name;
    const isChecked = event.target.checked;
    setCheckedItems((prevCheckedItems) => {
      const updatedCheckedItems = {
        ...prevCheckedItems,
        [itemName]: isChecked,
      };
      localStorage.setItem('technicalViabilities', JSON.stringify(updatedCheckedItems));
      return updatedCheckedItems;
    });
  };

  useEffect(() => {
    const selectedOptions = Object.values(technicalViabilities).filter((value) => value).length;
    const percentage = (selectedOptions / TOTAL_ITEMS) * 100;
    if (TOTAL_ITEMS > 0) {
      setSelectedPercentageState(percentage.toFixed(1));
      dispatch({ type: 'SET_TECHNICAL_PERCENTAGE', payload: percentage.toFixed(1) });
      localStorage.setItem('technicalPercentage', percentage.toFixed(1));
    }

    setShowMessage(percentage === 100);
  }, [technicalViabilities, dispatch]);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <h4>Technical Viabilities</h4>
            <hr />
            <div>
              <Alert variant="success">
                Percentage of selected options: {localStorage.getItem('technicalPercentage') || '0.0'}%
              </Alert>
            </div>
            <p>
              The Feasibility Study, in the context of the Guide for Micro-Frontends Adoption (GAM),
              is a strategic and sequential phase that seeks to analyze managerial and technical feasibilities
              before deciding on the implementation of the Micro-Frontends architecture.
              This approach aims to ensure a smooth and successful transition to this innovative architecture. The image below demonstrates the flow
              of activities of the Feasibility Study.
            </p>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardBody>
            <section>
              <Tabs defaultActiveKey="compatibility" id="technical-feasibilities-tabs" className="mb-3">
                <Tab eventKey="compatibility" title="Technological Compatibility">
                  <ul className="no-bullets">
                    <li>
                      <em>Objective:</em> Ensure that the Micro-Frontends architecture is compatible with the existing technologies in the company&apos;s infrastructure, minimizing conflicts and promoting a smooth transition.
                    </li>
                    <li><em>Recommendations:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Evaluation of Current Infrastructure"
                            checked={technicalViabilities['Evaluation of Current Infrastructure'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Evaluation of Current Infrastructure: Perform a detailed analysis of the existing technological infrastructure, identifying the technologies, frameworks, and libraries in use.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Identification of Potential Conflicts"
                            checked={technicalViabilities['Identification of Potential Conflicts'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Identification of Potential Conflicts: Identify possible conflicts between the technologies currently used and those associated with the Micro-Frontends architecture.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Standardization of Technologies"
                            checked={technicalViabilities['Standardization of Technologies'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Standardization of Technologies: Consider the standardization of technologies that are common to both the current infrastructure and the Micro-Frontends architecture to facilitate integration.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Compatibility Testing"
                            checked={technicalViabilities['Compatibility Testing'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Compatibility Testing: Implement specific tests using the pilot project to verify the compatibility between the Micro-Frontends components and the existing infrastructure.
                        </label>
                      </div>
                    </ul>
                  </ul>
                  <div>
                    <div className="blue-box">
                      <strong>Practical Example: </strong> Suppose the company uses Angular as the main framework in its existing systems. When starting the adoption of Micro-Frontends, the compatibility analysis team evaluates the specific version of Angular in use and confirms its compatibility with the Micro-Frontend requirements. Additionally, when identifying the need for a state management library, the team chooses to standardize the use of Redux, which is widely accepted in both the current infrastructure and the Micro-Frontends architecture. During the pilot project, specific tests are conducted to verify the interoperability between the Micro-Frontends and the legacy services, ensuring a smooth transition and minimizing conflicts.
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="integration" title="Integration Challenges">
                  <ul className="no-bullets">
                    <li>
                      <em>Objective:</em> Identify and proactively address integration challenges that may arise during the adoption of the Micro-Frontends architecture.
                    </li>
                    <li><em>Recommendations:</em></li>
                    <ul className="no-bullets">
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Interface Mapping"
                            checked={technicalViabilities['Interface Mapping'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Interface Mapping: Clearly map the interfaces between the Micro-Frontends and other system components.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Definition of Contracts"
                            checked={technicalViabilities['Definition of Contracts'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Definition of Contracts: Establish clear and documented contracts between the Micro-Frontends and the backend services, ensuring consistency in interactions.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Continuous Monitoring"
                            checked={technicalViabilities['Continuous Monitoring'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Continuous Monitoring: Implement continuous monitoring mechanisms to quickly identify and resolve integration issues.
                        </label>
                      </li>
                    </ul>
                  </ul>
                  <div className="blue-box">
                    <strong>Practical Example: </strong> During the implementation of Micro-Frontends, an integration challenge was identified in the communication between a specific Micro-Frontend and an essential backend service. Using the previously documented interface mapping, the team can quickly diagnose the problem and update the API contract. Continuous monitoring alerts the team to the anomaly, allowing for quick intervention and minimizing the impact on end users.
                  </div>
                </Tab>
                <Tab eventKey="functional-complexities" title="Functional Complexities">
                  <ul className="no-bullets">
                    <li>
                      <em>Objective:</em> Understand and mitigate the functional complexities associated with the Micro-Frontends architecture, ensuring the efficient delivery of functionalities.
                    </li>
                    <li><em>Recommendations:</em></li>
                    <ul className="no-bullets">
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Requirements Analysis"
                            checked={technicalViabilities['Requirements Analysis'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Requirements Analysis: Perform an in-depth analysis of the application&apos;s functional requirements, identifying possible complexities.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Modular Design"
                            checked={technicalViabilities['Modular Design'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Modular Design: Adopt a modular design for the Micro-Frontends, dividing the application into independent components to facilitate the management of complexities.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Unit and Integration Testing"
                            checked={technicalViabilities['Unit and Integration Testing'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Unit and Integration Testing: Implement unit and integration tests to validate the functionality of the Micro-Frontends individually and together.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Clear Documentation"
                            checked={technicalViabilities['Clear Documentation'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Clear Documentation: Maintain clear and comprehensive documentation that describes the functional interactions between the Micro-Frontends and other components.
                        </label>
                      </li>
                    </ul>
                  </ul>
                  <div>
                    <div className="blue-box">
                      <strong>Practical Example: </strong> During the requirements analysis, a complex functional requirement related to user permission management in different Micro-Frontends was identified. By adopting a modular design, the team decides to create a dedicated Micro-Frontend solely for permission management. Unit and integration tests are implemented to ensure that this functionality integrates smoothly with the other Micro-Frontends. The clear documentation details the interaction flows, simplifying the understanding of the functional complexity by the team.
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </section>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default TechnicalViabilities;
