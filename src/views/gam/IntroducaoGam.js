import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react';
import React from 'react';
import BigPictureImage from '../../assets/images/gam_big_picture.png';

const IntroducaoGam = () => {
  return (
    <CRow className="mb-4">
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Micro-Frontend</strong>
          </CCardHeader>
          <CCardBody>
            <h2>Bem-vindos ao Guia de Adoção de Micro-frontends (GAM)</h2>
            <p>
              Seja você um desenvolvedor ávido por inovações ou um gestor em busca de otimizações na entrega de projetos, 
              temos o prazer de recebê-lo em nosso Guia de Adoção de Micro-frontends. Este é mais que um guia; 
              é uma jornada para transformar sua abordagem no desenvolvimento de aplicações
              web.
            </p>

            <h3>O Desafio:</h3>

            <p>
              Enquanto a complexidade na construção de aplicações web cresce, a adoção do Microfrontend emerge como resposta. Mas como iniciar? Quais são os passos cruciais? O Guia de Adoção de Micro-frontends está aqui para responder a essas perguntas e guiá-lo em cada fase desse processo
              transformador.
            </p>

            <h3>O que Oferecemos:</h3>

            <ul>
              <li>
                <strong>Referencial Teórico Sólido:</strong> Inicie sua jornada com um entendimento profundo da arquitetura de Micro-frontends.
              </li>
              <li>
                <strong>Guia Passo a Passo:</strong> Explore nosso guia prático, fornecendo diretrizes claras desde a adoção até a implementação.
              </li>
              <li>
                <strong>Resultados Validados:</strong> Baseado em uma Revisão Sistemática da Literatura (RSL) e estudo de caso, nosso guia é respaldado por dados reais.
              </li>
              <li>
                <strong>Inclusão de Diferentes Perspectivas:</strong> Os surveys aplicados garantem que atendemos às necessidades tanto de desenvolvedores quanto de públicos específicos envolvidos em estudos de caso.
              </li>
            </ul>

            <h3>Como Começar:</h3>

            <ol>
              <li>
                Explore nosso <a href="#referencial">Referencial Teórico</a>.
              </li>
              <li>
                Siga nosso <a href="#passoapasso">Guia Passo a Passo</a>.
              </li>
              <li>Implemente com confiança, respaldado por dados reais.</li>
              <li>Compartilhe suas experiências e contribua para a comunidade.</li>
            </ol>

            <p>
              <strong>Estamos Empolgados para Compartilhar Essa Jornada com Você!</strong>
            </p>

            <h2>Introdução</h2>

            <p>
              A abordagem de Microfrontend é uma estratégia arquitetural inovadora no desenvolvimento de aplicações web, que busca dividir as interfaces de usuário em partes menores e independentes, chamadas de microfrontends. Essa abordagem é uma extensão do conceito de microserviços aplicado ao
              frontend, permitindo que equipes de desenvolvimento trabalhem de forma mais eficiente, escalável e independente em diferentes partes de uma aplicação web.
            </p>
            <p>
              Ao adotar a abordagem de Microfrontend, a interface do usuário de uma aplicação é dividida em módulos autônomos, cada um responsável por uma funcionalidade específica. Esses microfrontends podem ser desenvolvidos, testados e implantados de forma independente, facilitando a manutenção e
              a evolução contínua da aplicação. Essa flexibilidade é especialmente benéfica para equipes distribuídas, pois permite que diferentes grupos de desenvolvedores trabalhem em paralelo sem interferências.
            </p>
            <p>
              Além disso, a abordagem de Microfrontend promove a reutilização de código e componentes, facilitando a padronização e a consistência visual em toda a aplicação. Essa modularização contribui para uma arquitetura mais resiliente e facilita a integração de tecnologias diversas, já que
              diferentes microfrontends podem ser desenvolvidos utilizando diferentes frameworks ou bibliotecas.
            </p>
            <p>Em resumo, a abordagem de Microfrontend surge como uma solução inovadora para os desafios enfrentados no desenvolvimento de aplicações web complexas, proporcionando maior agilidade, escalabilidade e independência no ciclo de vida do frontend.</p>


            <section>
              <h3>Estrutura do Guia</h3>
              <p>
                O <em>Guidelines for Adopting Micro-Frontends (GAM)</em> foi estruturado de forma a fornecer uma orientação abrangente 
                e prática para equipes de desenvolvimento, arquitetos de software e líderes de projeto. A seguir, destacamos as principais seções que compõem a estrutura do GAM,
                delineando como o guia está organizado para oferecer diretrizes claras e práticas recomendadas.
              </p>
            </section>

            <h3>The Big Picture</h3>

            <img src={BigPictureImage} alt="Big" className="img-fluid mb-3"  />
            <p>
              Ao compreender a jornada da adoção de Micro-Frontends, deve-se enxergar o cenário de forma abrangente, capturando as nuances críticas que moldam o sucesso dessa adoção arquitetural. Essa perspectiva holística, conhecida como “Big Picture“, oferece um olhar amplo e interconectado sobre
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
