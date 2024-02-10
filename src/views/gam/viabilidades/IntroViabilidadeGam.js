
import ViabilityImg from '../../../assets/images/gam_viabilities_study.png'

import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react';
import React from 'react';

const IntroViabilidadesGam = () => {

  return (
    <CRow>
    <CCol xs={12}>
    <CCard className="mb-4">
      <CCardHeader>
        <strong>GAM</strong>
      </CCardHeader>
      <CCardBody>
      <section>
                <h2>Estudo das Viabilidades</h2>
                <p>
                  <div className='mb-4'>
                    A etapa de Estudo da Viabilidade do Guidelines for Adopting Micro-Frontends (GAM) é 
                    a fase que busca analisar as viabilidades gerenciais e técnicas antes de decidir sobre a ado-
                    ção da arquitetura de Micro-Frontends. Essa avaliação é subdividida em dois momentos
                    distintos: Viabilidades Técnicas e Viabilidades Gerenciais. É fundamental destacar que o
                    estudo da viabilidade técnica precede o estudo da viabilidade gerencial. Essa abordagem
                    garante que a gestão tenha artefatos e informações suficientes para analisar, por exemplo,
                    os custos associados à transição, contribuindo para uma decisão fundamentada. A Figura
                    abaixo ilustra o fluxo das análises necessárias para que a equipe decida pela adoção ou não
                    da arquitetura.
                  </div>
                  <img src={ViabilityImg} alt="Viability" className="img-fluid mb-3"  />
                </p>
                
            </section>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardBody>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <CButton color="primary" className="me-md-2">
            Voltar
          </CButton>
          <CButton color="primary">Avançar</CButton>
        </div>
      </CCardBody>
    </CCard>
    </CCol>
  </CRow>
  )
}

export default IntroViabilidadesGam
