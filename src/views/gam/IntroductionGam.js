import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react';
import React from 'react';
import BigPictureImage from '../../assets/images/gam_big_picture.png';

const IntroductionGam = () => {
  return (
    <CRow className="mb-4">
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <h4>Welcome to the Guidelines to Adoption Micro-frontends (GAM)</h4>
            <hr />
            <p>In this guide, you will find detailed information on the principles and best practices for adopting this modern architecture, which allows for greater flexibility, scalability, and autonomy in developing complex web applications.

Our goal is to provide a clear and practical path so that you can fully leverage the benefits of micro-frontends, from the planning phase to ongoing execution and maintenance.

Whether you are an experienced developer or a curious beginner, the GAM offers valuable insights, practical examples, and step-by-step guidance to facilitate your journey.
            </p>

            <img src={BigPictureImage} alt="Big" className="img-fluid mb-3"  />

            <h5><strong>Phases of the GAM</strong></h5>
            <ul>
              <li>
              <strong>Viability Study:</strong> The first phase of our guide involves a thorough feasibility study, where essential techniques and management approaches for adopting micro-frontends are explored;            
              </li>
              <li>
              <strong>Implementation:</strong> In the implementation phase, you will be guided through the operational and integration decisions necessary to build a micro-frontends-based application.
              </li>
              <li>
              <strong>Expansion:</strong> Once the micro-frontends are in operation, the focus shifts to expansion, where we address scalability and maintainability aspects
              </li>
              <li>
              <strong>Pilot Project:</strong> A crucial component present in all phases is the pilot project. This project serves as a testing ground for the practices and strategies discussed in the previous phases.
              </li>
            </ul>
            <h5><strong>How to Navigate the Guidelines to Adoption Micro-frontends (GAM)</strong></h5>
            <p>The Guidelines to Adoption Micro-frontends (GAM) is structured to provide you with a clear and organized pathway through each phase of the adoption process. Each phase is divided into its own dedicated page, making it easy to follow and implement the steps sequentially.</p>
            <h6><strong>Phase Breakdown</strong></h6>
            <p>
            Each phase (Viability Study, Implementation, Expansion, and Pilot Project) is comprehensively detailed on separate pages. As you progress through the guide, you will encounter specific recommendations and best practices tailored to that phase. These recommendations are designed to help you implement the micro-frontends architecture efficiently and effectively.
            </p>
            <h6>
            <strong>Interactive Recommendations</strong> 
            <p>
            To facilitate your progress, each recommendation within the guide is interactive. You can select the recommendations you have implemented, which helps you keep track of your progress. When a recommendation is selected, it is marked as completed.
            </p>
            </h6>
            <h6><strong>Progress Indicator</strong></h6>
            <p>At the top of each page, you will find a progress indicator. This visual aid shows the percentage of completed recommendations, giving you a clear overview of your progress through the current phase. This feature ensures that you always know how far you have come and what remains to be done.
            </p>
            <h6><strong>Session-based Tracking</strong></h6>
            <p>All your interactions and progress within the guide are saved in your browser session. This means that your progress is retained as long as your session is active, allowing you to pick up right where you left off without losing any information.</p>
          </CCardBody>
        </CCard>

      </CCol>
    </CRow>
  )
};
export default IntroductionGam;
