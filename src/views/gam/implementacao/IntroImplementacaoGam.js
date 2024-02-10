
import ImplImg from '../../../assets/images/gam_pratical_implementation.png'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react';
import React from 'react';

const IntroImplemantacaoGam = () => {
  return (
    <CRow>
      <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>GAM</strong>
        </CCardHeader>
        <CCardBody>
          <section>
              <h2>Implementação Prática</h2>
              <p>
                <div className='mb-4'>
                A fase de Implementação Prática no Guidelines for Adopting Micro-Frontends (GAM)
                marca a transição do planejamento teórico para a aplicação concreta da arquitetura de
                Micro-Frontends. Dividida em decisões Operacionais e de Integração, esta etapa visa
                guiar os arquitetos e desenvolvedores na execução efetiva do paradigma arquitetônico.
                As estratégias delineadas nas fases anteriores serão agora aplicadas no Projeto Piloto,
                representando um ambiente controlado para validar e consolidar as decisões tomadas pre-
                viamente. A implementação prática é o ponto em que as escolhas teóricas começam a se
                materializar, e cada decisão tem impacto direto na eficiência, escalabilidade e manuteni-
                bilidade do sistema. A Figura abaixo ilustra o fluxo das decisões operacionais e de integração
                durante esta fase.
                </div>
                <img src={ImplImg} alt="Implementação Prática" className="img-fluid mb-3"  />
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

export default IntroImplemantacaoGam
