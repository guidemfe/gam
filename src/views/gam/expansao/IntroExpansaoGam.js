
import ExpnsaoImg from '../../../assets/images/gam_expansion.png'

import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react';
import React from 'react';

const IntroExpansaoGam = () => {

  return (
    <CRow>
    <CCol xs={12}>
    <CCard className="mb-4">
      <CCardHeader>
        <strong>GAM</strong>
      </CCardHeader>
      <CCardBody>
      <section>
                <h2>Expansão</h2>
                <p>
                  <div className='mb-4'>
                  Fase de Expansão no Guidelines for Adopting Micro-Frontends (GAM) representa o
                  período em que a arquitetura de Micro-Frontends evolui e se estende para além do seu
                  ponto inicial de implementação. Esta etapa é marcada pela aplicação contínua dos prin-
                  cípios e diretrizes estabelecidos nas fases anteriores, com foco na ampliação controlada da
                  adoção da arquitetura em diferentes áreas do sistema.
                  Durante a Expansão, as decisões tomadas na Avaliação Inicial e Implementação Prática continuam a moldar a jornada da equipe de desenvolvimento. O objetivo é escalar a
                  aplicação da arquitetura de Micro-Frontends, garantindo uma transição suave e minimizando os riscos associados.
                 
                  </div>

                  <img src={ExpnsaoImg} alt="Expansão" className="img-fluid mb-3"  />
                  <div className='mb-4'>
                  Esta fase abrange desde a seleção de projetos pilotos até a ampliação para outros
                  componentes do sistema. Aspectos práticos, aprendizado contínuo, treinamento da equipe
                  e monitoramento constante são elementos-chave para garantir o sucesso da expansão. A
                  equipe é incentivada a coletar feedback, realizar ajustes na estratégia conforme necessário                   e aprimorar continuamente a implementação com base nas lições aprendidas ao longo do
                  processo. A Figura acima ilustra as estratégias sugeridas para a implementação desta fase
                  considerando a escalabilidade e a manutenibilidade do sistema em que se pretende adotar
                  a arquitetura de micro-frontend.
                  </div>
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

export default IntroExpansaoGam
