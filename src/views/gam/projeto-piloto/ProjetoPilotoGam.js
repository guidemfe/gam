import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react';
import PilotoImg from '../../../assets/images/gam_pilot_project.png'
import React from 'react';

import '../../../scss/_custom.scss';

const ProjetoPilotoGam = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>GAM</strong>
          </CCardHeader>
          <CCardBody>
          <section>
                <h3>Projeto Piloto</h3>
                <p>Esta seção do Projeto Piloto Guidelines for Adopting Micro-Frontends (GAM) representa um marco no processo de implementação prática da arquitetura de Micro-Frontends. Nesta fase, foi utilizado um ambiente controlado, onde o estudo das viabilidades técnicas, as decisões operacionais e de integração previamente delineadas foram aplicadas de maneira tangível. O Projeto Piloto serve como um teste de validação, permitindo que as equipes de desenvolvimento, arquitetos de software e líderes de projeto observem como as estratégias teóricas se traduzem na realidade operacional. A figura abaixo fornece uma visão geral do papel central do Projeto Piloto no contexto do GAM.</p>

<img src={PilotoImg} alt="Projeto Piloto" className="img-fluid mb-3"  />

<p>Durante esta fase, destacaremos não apenas a implementação técnica, mas também as lições aprendidas e os ajustes necessários à medida que a equipe ganha insights valiosos na aplicação prática do paradigma de Micro-Frontends. O Projeto Piloto oferece uma oportunidade única para avaliar a eficácia das escolhas arquiteturais e de integração em um contexto controlado, antes de uma expansão mais ampla para outros projetos ou áreas do sistema. A escolha do Projeto Piloto é um ponto fundamental para o sucesso da adoção de Micro-Frontends. Nesta etapa, os stakeholders devem considerar os seguintes aspectos:</p>

<ul>
  <li><strong>Seleção do Projeto Piloto:</strong>
    <ul>
      <li><strong>Objetivo:</strong> A escolha do Projeto Piloto é um ponto fundamental para o sucesso da adoção de Micro-Frontends. Nesta etapa, os stakeholders devem considerar os seguintes aspectos:</li>
      <li><strong>Considerações:</strong>
        <ul>
          <li><strong>Complexidade do Projeto:</strong> Avaliar a complexidade geral do projeto em termos de funcionalidades, interações e número de componentes. Projetos mais complexos e extensos podem oferecer uma melhor compreensão dos desafios e benefícios do uso de Micro-Frontends.</li>
          <li><strong>Diversidade de Componentes:</strong> Buscar projetos que possuam uma variedade representativa de componentes. Isso permite explorar como diferentes tipos de funcionalidades podem ser encapsulados em Micro-Frontends e integrados de maneira eficiente.</li>
          <li><strong>Representatividade do Cenário:</strong> Certifique-se de que o projeto selecionado seja representativo do ambiente mais amplo da organização. Um Piloto que reflita os desafios e requisitos típicos do desenvolvimento frontend da empresa proporcionará insights mais aplicáveis.</li>
          <li><strong>Impacto Potencial:</strong> Considerar o impacto potencial do Projeto Piloto na organização. Escolher um projeto com impacto significativo, mas controlado, permite avaliar os resultados sem comprometer a estabilidade geral do sistema.</li>
        </ul>
      </li>
    </ul>
    <div className="blue-box"> <strong>Exemplo Prático:</strong> Durante a fase de implementação do projeto piloto, a equipe opta por selecionar a página de carrinho de compras como o cenário inicial, considerando a complexidade do projeto, pois a página envolve diversas funcionalidades, desde a exibição dos itens no carrinho até a gestão de cupons e opções de pagamento. A diversidade de componentes é assegurada, abrangendo desde elementos simples, como ícones, até componentes mais complexos, como a lógica de aplicação de descontos. A representatividade do cenário é garantida, pois a página de carrinho de compras reflete os desafios típicos do frontend, incluindo interações com o banco de dados de inventário, cálculos de preços e integrações com gateways de pagamento. Quanto ao impacto potencial, o projeto possui relevância significativa, uma vez que melhorias na experiência do usuário nessa etapa do processo de compra podem ter um impacto notável, mas controlado, permitindo uma avaliação aprofundada antes de uma expansão mais ampla da arquitetura de Micro-Frontends para outras áreas do sistema.</div>
  </li>
</ul>

                
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

export default ProjetoPilotoGam
