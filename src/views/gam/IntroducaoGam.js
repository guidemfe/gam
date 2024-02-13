import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react';
import React from 'react';
import BigPictureImage from '../../assets/images/gam_big_picture.png';

const IntroducaoGam = () => {
  return (
    <CRow className="mb-4">
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <h4>Bem-vindos ao Guia de Adoção de Micro-frontends (GAM)</h4>
            <hr />
            <p>Este guia foi desenvolvido para ajudar equipes de desenvolvimento, 
              arquitetos de software e líderes de projeto a adotar a arquitetura de Micro-frontends de forma eficaz e eficiente.
            </p>

            <h5>O desafio:</h5>

            <p>
              Enquanto a complexidade na construção de aplicações web cresce, a adoção do Microfrontend emerge como resposta. 
              Mas como iniciar? Quais são os passos? O Guia de Adoção de Micro-frontends está aqui para responder a essas 
              perguntas e guiá-lo em cada fase desse processo transformador.
            </p>

            <h5>Motivos para usar GAM:</h5>

            <ul>
              <li>
                <strong>Micro-frontend:</strong> Inicie sua jornada com um entendimento da arquitetura de Micro-frontends baseado na literatura.
              </li>
              <li>
                <strong>Get Started:</strong> Explore nosso guia, seguindo as diretrizes desde estudo da viabilidade até a implementação de um projeto piloto.
              </li>
              <li>
                <strong>Resultados Validados:</strong> Baseado em uma Revisão Sistemática da Literatura (RSL) e estudo de caso, o GAM é respaldado por dados reais.
              </li>
            </ul>

            <h5>Como começar:</h5>

            <ol>
              <li>
                Explore a introdução sobre a arquitetura na seção <a href="#referencial">Micro-frontend</a>.
              </li>
              <li>Get Started.
                <ul>
                  <li> <a href="">Estudo da Viabilidade</a></li>
                  <li> <a href="">Implementação</a></li>
                  <li> <a href="">Expansão</a></li>
                  <li> <a href="">Projeto Piloto</a></li>
                </ul>
              </li>
            </ol>

            <section>
              <h5>Estrutura do Guia</h5>
              <p>
                O <em>Guidelines for Adopting Micro-Frontends (GAM)</em> foi estruturado de forma a fornecer uma orientação abrangente 
                e prática para equipes de desenvolvimento, arquitetos de software e líderes de projeto. A seguir, destacamos as principais seções que compõem a estrutura do GAM,
                delineando como o guia está organizado para oferecer diretrizes claras e práticas recomendadas.
              </p>
            </section>


            <img src={BigPictureImage} alt="Big" className="img-fluid mb-3"  />
            <p>
              Ao compreender a jornada da adoção de Micro-Frontends, deve-se enxergar o cenário de forma abrangente, capturando as nuances críticas que moldam o sucesso dessa adoção arquitetural. O fluxo apresentado na figura acima oferece um olhar amplo e interconectado sobre
              as etapas-chave envolvidas, delineando um fluxo estruturado que orienta desde a Estudo da Viabilidade até a expansão.
            </p>

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
};
export default IntroducaoGam;
