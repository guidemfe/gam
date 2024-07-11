
import ViabilityImg from '../../../assets/images/gam_viabilities_study.png'

import { CCard, CCardBody, CCol, CRow } from '@coreui/react';

import '../../../scss/_custom.scss';
import React from 'react';

const IntroductionViabilities = () => {

  return (
    <CRow>
    <CCol xs={12}>
    <CCard className="mb-4">
      <CCardBody>
      <section>
        <h4>Viability Study</h4>
        <hr />
        <p>
            <div className='mb-4'>
                The Viability Study phase of the Guidelines for Adopting Micro-Frontends (GAM) is the stage that seeks to analyze managerial and technical viabilities before deciding on adopting the Micro-Frontends architecture. This evaluation is subdivided into two distinct moments: Technical Feasibilities and Managerial Feasibilities. It is essential to highlight that the technical Viability study precedes the managerial Viability study. This approach ensures that management has sufficient artifacts and information to analyze, for example, the costs associated with the transition, contributing to a well-founded decision. The figure below illustrates the flow of the necessary analyses for the team to decide on the adoption of the architecture.
            </div>
            <img src={ViabilityImg} alt="Viability" className="img-fluid mb-3 center-img" />
        </p>
      </section>

      </CCardBody>
    </CCard>
    </CCol>
  </CRow>
  )
}

export default IntroductionViabilities
