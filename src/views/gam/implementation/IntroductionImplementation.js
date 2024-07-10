
import ImplImg from '../../../assets/images/gam_pratical_implementation.png'
import { CCard, CCardBody, CCol, CRow, CButton } from '@coreui/react';
import React from 'react';
import '../../../scss/_custom.scss'

const IntroductionImplementation = () => {
  return (
    <CRow>
      <CCol xs={12}>
      <CCard className="mb-4">
      <CCardBody>
        <section>
          <h4>Practical Implementation</h4>
          <hr />
          <p>
          <div className='mb-4'>
          The Practical Implementation phase in the Guidelines for Adopting Micro-Frontends (GAM)
          marks the transition from theoretical planning to the concrete application of the Micro-Frontends architecture.
          Divided into Operational and Integration decisions, this stage aims to guide architects and developers in the effective execution of the architectural paradigm.
          The strategies outlined in the previous phases will now be applied in the Pilot Project, representing a controlled environment to validate and consolidate the decisions made previously.
          Practical implementation is the point where theoretical choices begin to materialize, and each decision has a direct impact on the efficiency, scalability, and maintainability of the system.
          The figure below illustrates the flow of operational and integration decisions during this phase.
          </div>
          <img src={ImplImg} alt="Practical Implementation" className="img-fluid mb-3 center-img"  />
          </p>
          
        </section>
      </CCardBody>
      </CCard>
      </CCol>
    </CRow>
    )
}

export default IntroductionImplementation
