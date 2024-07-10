import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';
import { Tabs, Tab, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import '../../../scss/_custom.scss'; 

const TOTAL_ITEMS = 9;

const Maintainability = () => {
  const [maintainability, setCheckedItems] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [maintainabilityPercentage, setSelectedPercentageState] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedItems = localStorage.getItem('maintainability');
    if (savedItems) {
      setCheckedItems(JSON.parse(savedItems));
    }

    const savedPercentage = localStorage.getItem('maintainabilityPercentage');
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
      localStorage.setItem('maintainability', JSON.stringify(updatedCheckedItems));
      return updatedCheckedItems;
    });
  };

  useEffect(() => {
    const selectedOptions = Object.values(maintainability).filter((value) => value).length;
    const percentage = (selectedOptions / TOTAL_ITEMS) * 100;
    if (TOTAL_ITEMS > 0) {
      setSelectedPercentageState(percentage.toFixed(1));
      dispatch({ type: 'SET_MAINTAINABILITY_PERCENTAGE', payload: percentage.toFixed(1) });
      localStorage.setItem('maintainabilityPercentage', percentage.toFixed(1));
    }

    setShowMessage(percentage === 100);
  }, [maintainability, dispatch]);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <h4>Maintainability</h4>
            <hr />
            <div>
              <Alert variant="success">
                Percentage of selected options: {localStorage.getItem('maintainabilityPercentage') || '0.0'}%
              </Alert>
            </div>
            <p>
              ISO/IEC 25010 defines maintainability as the ability of a system to be modified, updated, and adapted. Its main subcharacteristics include Modularity, Reusability, Analyzability, Modifiability, and Testability. In the context of the micro-frontend Adoption Guide (GAM), maintainability emphasizes code, adapting the concepts to focus on Analyzability, Modifiability, and Testability, highlighting the importance of efficient analysis, effective modification, and robust testing of source code in micro-frontend environments.
            </p>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardBody>
            <section>
              <Tabs defaultActiveKey="compatibility" id="technical-feasibilities-tabs" className="mb-3">
                <Tab eventKey="compatibility" title="Analyzability">
                  <ul className="no-bullets">
                    <li>
                      <em>Objective:</em> Understand the structure and functioning of micro-frontends to diagnose problems quickly and accurately.
                    </li>
                    <li><em>Recommendations:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Naming Conventions"
                            checked={maintainability['Naming Conventions'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Naming Conventions: Adopt consistent naming conventions to facilitate identification and understanding of components.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Documentation"
                            checked={maintainability['Documentation'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Documentation: Maintain detailed documentation about the architecture, interactions, and responsibilities of each micro-frontend.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Static Analysis Tools"
                            checked={maintainability['Static Analysis Tools'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Static Analysis Tools: Use tools like ESLint and TSLint for static code analysis, identifying patterns, complexity, and potential issues. More comprehensive tools like Sonar can provide a holistic view of code quality, including source code metrics, code coverage, and detection of potential security issues.
                        </label>
                      </div>
                    </ul>
                  </ul>
                  <div>
                    <div className="blue-box">
                      <strong>Practical Example: </strong> A developer is assigned to update the interface of the product details page. During the process, the developer follows naming conventions, consults the documentation to understand the structure and interactions, while static analysis tools (ESLint and TSLint) flag potential code improvements. Sonar complements this analysis by providing detailed metrics and identifying areas of concern, resulting in efficient and secure modifications to the micro-frontend.
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="integration" title="Modifiability">
                  <ul className="no-bullets">
                    <li>
                      <em>Objective:</em> Enable efficient modifications to micro-frontends without introducing defects or degrading quality.
                    </li>
                    <li><em>Recommendations:</em></li>
                    <ul className="no-bullets">
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Modular Design"
                            checked={maintainability['Modular Design'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Modular Design: Structure micro-frontends in a modular way, minimizing coupling between them.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Continuous Refactoring"
                            checked={maintainability['Continuous Refactoring'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Continuous Refactoring: Encourage refactoring practices to keep the code clean and adaptable.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Version Control"
                            checked={maintainability['Version Control'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Version Control: Use efficient version control systems like Git to track changes and facilitate rollbacks if necessary. Tools like Veracode can be incorporated to perform static and dynamic security analysis, helping to ensure secure modifications.
                        </label>
                      </li>
                    </ul>
                  </ul>
                  <div className="blue-box">
                    <strong>Practical Example: </strong> A new feature needs to be added to one of the micro-frontends. With modular design, the developer can isolate the implementation of the new feature without affecting other parts of the system. During the process, continuous refactoring practices ensure that the code remains clean and adaptable. Efficient use of version control allows the developer to track and manage changes in an organized manner. Veracode integration checks for potential security vulnerabilities, ensuring secure modifications before deployment.
                  </div>
                </Tab>
                <Tab eventKey="functional-complexities" title="Testability">
                  <ul className="no-bullets">
                    <li>
                      <em>Objective:</em> Ensure the effectiveness of tests, allowing early detection of failures and safe changes.
                    </li>
                    <li><em>Recommendations:</em></li>
                    <ul className="no-bullets">
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Unit and Integration Testing"
                            checked={maintainability['Unit and Integration Testing'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Unit and Integration Testing: Implement unit tests (using Jest and Enzyme for React, for example) and integration tests to verify isolated functionality and interaction between micro-frontends.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Test Automation"
                            checked={maintainability['Test Automation'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Test Automation: Use test automation tools like Cypress to streamline the verification process.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Production-like Test Environments"
                            checked={maintainability['Production-like Test Environments'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Production-like Test Environments: Maintain test environments that faithfully reproduce production conditions to validate the real behavior of the system.
                        </label>
                      </li>
                    </ul>
                  </ul>
                  <div>
                    <div className="blue-box">
                      <strong>Practical Example: </strong> A new feature is added to a specific micro-frontend. Unit tests ensure that the isolated functionality works as expected, using tools like Jest to validate React components. Integration tests, incorporating tools like Cypress, verify the interaction between different micro-frontends. Automation of these tests streamlines the verification process, allowing the development team to detect potential failures early on. By maintaining production-like test environments, the team ensures that real system conditions are simulated, comprehensively validating the behavior of the micro-frontend before deployment.
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

export default Maintainability;
