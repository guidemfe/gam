import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';
import { Tabs, Tab, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import '../../../scss/_custom.scss'; 

const TOTAL_ITEMS = 12;

const Scalability = () => {
  const [scalability, setCheckedItems] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [scalabilityPercentage, setSelectedPercentageState] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedItems = localStorage.getItem('scalability');
    if (savedItems) {
      setCheckedItems(JSON.parse(savedItems));
    }

    const savedPercentage = localStorage.getItem('scalabilityPercentage');
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
      localStorage.setItem('scalability', JSON.stringify(updatedCheckedItems));
      return updatedCheckedItems;
    });
  };

  useEffect(() => {
    const selectedOptions = Object.values(scalability).filter((value) => value).length;
    const percentage = (selectedOptions / TOTAL_ITEMS) * 100;
    if (TOTAL_ITEMS > 0) {
      setSelectedPercentageState(percentage.toFixed(1));
      dispatch({ type: 'SET_SCALABILITY_PERCENTAGE', payload: percentage.toFixed(1) });
      localStorage.setItem('scalabilityPercentage', percentage.toFixed(1));
    }

    setShowMessage(percentage === 100);
  }, [scalability, dispatch]);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <h4>Scalability</h4>
            <hr />
            <div>
              <Alert variant="success">
                Percentage of selected options: {localStorage.getItem('scalabilityPercentage') || '0.0'}%
              </Alert>
            </div>
            <p>
            This step aims to empower the application to grow efficiently and adapt to variable environmental demands. The main areas of focus are adding new micro-frontends, load management, and cache strategies.
            </p>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardBody>
            <section>
              <Tabs defaultActiveKey="compatibility" id="technical-feasibilities-tabs" className="mb-3">
                <Tab eventKey="compatibility" title="Adding Micro-Frontends">
                  <ul className="no-bullets">
                    <li>
                      <em>Objective:</em> Facilitate the incorporation of new micro-frontends into the existing system.
                    </li>
                    <li><em>Recommendations:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Dynamic Modularization"
                            checked={scalability['Dynamic Modularization'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Dynamic Modularization: Develop a modular architecture that supports the dynamic addition of new micro-frontends without impacting the existing ones.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Load Balancing"
                            checked={scalability['Load Balancing'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Load Balancing: Implement an automatic load balancing system such as orchestration services using tools like Kubernetes to facilitate automatic scaling based on traffic metrics.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Cache Management"
                            checked={scalability['Cache Management'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Cache Management: Adopt cache strategies like Redis to temporarily store micro-service responses, improving the throughput of micro-frontend composition. Explore in-memory caching of micro-frontend DOM to reduce the need for recomposition on every request.
                        </label>
                      </div>
                    </ul>
                  </ul>
                  <div>
                    <div className="blue-box">
                      <strong>Practical Example: </strong> In a micro-frontend-based e-commerce scenario, a new micro-frontend called &quot;Personalized Recommendations&quot; was added. An automatic load balancing system with Kubernetes was implemented for dynamic scalability based on traffic. To enhance performance, cache strategies including Redis were used to temporarily store micro-service responses and micro-frontend DOM in in-memory caches, reducing the need for recomposition on every request.
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="integration" title="Load Management">
                  <ul className="no-bullets">
                    <li>
                      <em>Objective:</em> Ensure operational efficiency and optimized performance of the application even under increasing demands.
                    </li>
                    <li><em>Recommendations:</em></li>
                    <ul className="no-bullets">
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Cloud Auto-scalability"
                            checked={scalability['Cloud Auto-scalability'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Cloud Auto-scalability: Utilize auto-scalability features offered by cloud providers to dynamically adjust the infrastructure based on traffic patterns. Choose efficient computing layers like containers for fast execution and consider managed options like serverless services to simplify infrastructure operationalization.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Load Prediction and Manual Adjustment"
                            checked={scalability['Load Prediction and Manual Adjustment'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Load Prediction and Manual Adjustment: Establish a baseline infrastructure capable of handling predictable loads, such as Black Friday sales, by adopting comparison practices between different services and plug-and-play options.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Latency Optimization with CDN"
                            checked={scalability['Latency Optimization with CDN'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Latency Optimization with CDN: Utilize a CDN to increase the speed of web page delivery, reducing latency between the client and requested content.
                        </label>
                      </li>
                    </ul>
                  </ul>
                  <div className="blue-box">
                    <strong>Practical Example: </strong> To optimize the performance of the e-commerce platform, cloud auto-scalability was leveraged using serverless services and containers to dynamically adjust the infrastructure based on traffic patterns, ensuring fast execution and operational efficiency. To handle predictable peaks like &quot;Black Friday&quot; sales, a baseline infrastructure was established with manual adjustments when necessary, using comparison practices between different services and plug-and-play options. Additionally, a CDN was incorporated to optimize latency, speeding up web page delivery and enhancing the user experience in high-demand scenarios.
                  </div>
                </Tab>
                <Tab eventKey="functional-complexities" title="Cache Strategies">
                  <ul className="no-bullets">
                    <li>
                      <em>Objective:</em> Optimize application performance by reducing server load and accelerating response time.
                    </li>
                    <li><em>Recommendations:</em></li>
                    <ul className="no-bullets">
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Requirements Analysis"
                            checked={scalability['Requirements Analysis'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Requirements Analysis: Perform an in-depth analysis of the application&quot;s functional requirements, identifying possible complexities.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Static Content Cache"
                            checked={scalability['Static Content Cache'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Static Content Cache: Implement caching for static content such as images, stylesheets, and scripts, reducing loading latency.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Dynamic Data Cache"
                            checked={scalability['Dynamic Data Cache'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Dynamic Data Cache: Utilize cache strategies for dynamic data, minimizing frequent server queries.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Efficient Cache Invalidation"
                            checked={scalability['Efficient Cache Invalidation'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Efficient Cache Invalidation: Implement effective cache invalidation methods to ensure users receive up-to-date information.
                        </label>
                        </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Response Cache"
                            checked={scalability['Response Cache'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Response Cache: Implement caches to temporarily store micro-frontend responses, using solutions like Redis, temporarily storing micro-service responses to increase throughput.
                        </label>
                        </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="DOM Storage Cache"
                            checked={scalability['DOM Storage Cache'] || false}
                            onChange={handleCheckboxChange}
                          />
                          DOM Storage Cache: Store the complete DOM of micro-frontends in in-memory caches to avoid excessive recomposition on every request.
                        </label>
                      </li>
                    </ul>
                  </ul>
                  <div>
                    <div className="blue-box">
                      <strong>Practical Example: </strong> In a web application, caches were introduced for static content (images and stylesheets), dynamic data, and micro-frontend and micro-service responses, using solutions like Redis. These approaches reduce loading latency, minimize frequent server queries, and increase throughput. Additionally, effective cache invalidation methods were adopted to ensure up-to-date information, and the DOM of micro-frontends was stored in in-memory caches, avoiding excessive recomposition on every request.
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

export default Scalability;
