
import ExpnsaoImg from '../../../assets/images/gam_expansion.png'

import { CCard, CCardBody, CCol, CRow, CButton } from '@coreui/react';
import '../../../scss/_custom.scss'
import React from 'react';

const IntroductionExpansion = () => {

  return (
    <CRow>
    <CCol xs={12}>
    <CCard className="mb-4">
      <CCardBody>
      <section>
          <h4>Expansion</h4>
          <hr />
          <p>
            <div className='mb-4'>
            The Expansion phase in the Guidelines for Adopting Micro-Frontends (GAM) represents the
            period in which the Micro-Frontends architecture evolves and extends beyond its initial
            implementation point. This stage is marked by the continuous application of the principles
            and guidelines established in the previous phases, with a focus on the controlled expansion
            of the architecture adoption in different areas of the system.
            During the Expansion phase, the decisions made in the Initial Assessment and Practical
            Implementation continue to shape the development team&apos;s journey. The goal is to scale the
            application of the Micro-Frontends architecture, ensuring a smooth transition and minimizing
            associated risks.
           
            </div>

            <img src={ExpnsaoImg} alt="Expansion" className="img-fluid mb-3 center-img"  />
            <div className='mb-4'>
            This phase encompasses everything from selecting pilot projects to expanding to other
            components of the system. Practical aspects, continuous learning, team training, and constant
            monitoring are key elements to ensure the success of the expansion. The team is encouraged to
            collect feedback, make adjustments to the strategy as necessary, and continuously improve the
            implementation based on lessons learned throughout the process. The figure above illustrates
            suggested strategies for implementing this phase, considering the scalability and maintainability
            of the system in which the micro-frontend architecture is intended to be adopted.
            </div>
          </p>
          
        </section>
      </CCardBody>
    </CCard>
    </CCol>
    </CRow>
    )
}

export default IntroductionExpansion
