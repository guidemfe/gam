import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react';
import React from 'react';

import '../../../scss/_custom.scss';

const ImplementacaoOperacionalGam = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <section>
              <h4>Decisões Operacionais</h4>
              <hr />
              <p>As decisões operacionais focam nas escolhas estratégicas das áreas de compilação e implantação, compartilhamento de código, otimização de desempenho e a estrutura organizacional. No contexto dos micro-frontends, a tomada de decisões operacionais práticas e bem-informadas é fundamental para assegurar a agilidade, a colaboração eficiente entre equipes e a adaptação contínua às demandas dinâmicas do desenvolvimento de software distribuído.</p>

              <h5>Compilação e Implantação</h5>
              <ul>
                <li>Objetivo: Implementar um processo eficiente de compilação e implantação para permitir atualizações rápidas e independentes de cada micro-frontend. [1].</li>
                <li>Recomendações:
                  <ul>
                    <li>Automação
                      <ul>
                        <li>Integração e Entrega contínua (CI/CD): Utilizar ferramentas de integração contínua e entrega contínua (CI/CD) para automatizar o processo de compilação, testes e implantação. Garanta que cada alteração no código seja submetida a um pipeline automatizado para validar e implantar automaticamente.</li>
                        <li>Pipeline: Configurar pipelines de entrega contínua para garantir uma integração suave e implantações rápidas. Automatize a geração de artefatos, como contêineres ou pacotes, prontos para a implantação em ambientes de produção.</li>
                        <li>Orquestração: Explorar ferramentas como Kubernetes para orquestração de contêineres e escalabilidade.</li>
                      </ul>
                    </li>
                    <li>Observabilidade
                      <ul>
                        <li>Logs e rastreamento: Integrar sistemas de registro (logs) e rastreamento para acompanhar eventos durante o processo de compilação e implantação. Isso facilita a identificação rápida de problemas e a análise de desempenho.</li>
                        <li>Métricas de Desempenho: Implementar métricas de desempenho durante a compilação e a implantação para monitorar a eficiência do processo. Utilize ferramentas que ofereçam visibilidade em tempo real e alertas para eventos críticos.</li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <div className="blue-box"> <strong>Exemplo Prático: </strong> Ao implementar a automação, a equipe decide integrar uma ferramenta CI/CD, como <a href="https://www.jenkins.io/" target="_blank" rel="noreferrer">Jenkins</a>, ao repositório de código-fonte...</div>
              </ul>

              <h5>Compartilhamento de Código</h5>
              <ul>
                <li>Objetivo: Facilitar e otimizar o compartilhamento de código entre os diferentes micro-frontends, promovendo uma abordagem eficiente e colaborativa no desenvolvimento distribuído.</li>
                <li>Recomendações:
                  <ul>
                    <li>Identificação de Funcionalidades Comuns: Identificar funcionalidades comuns que possam ser usadas por bibliotecas;</li>
                    <li>Web Components e Design System: Criar Web Components para encapsular funcionalidades específicas, garantindo modularidade e reusabilidade e integrar ao Design System da organização, garantindo consistência visual e de interação em todos os micro-frontends.</li>
                    <li>Controle de Versão: Implementar um sistema de controle de versão como git utilizando ferramentas de gestão de pacotes npm ou yarn.</li>
                  </ul>
                </li>
                <div className="blue-box"> <strong>Exemplo Prático: </strong> A equipe inicia o processo identificando funcionalidades comuns que podem ser encapsuladas em bibliotecas. Desenvolvem Web Components reutilizáveis para modularidade e reusabilidade, integrando-os ao Design System da organização para garantir consistência visual e de interação. Optam por utilizar <a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git</a> como sistema de controle de versão, combinado com <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">npm</a> ou <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">yarn</a> para gerenciamento eficiente de pacotes...</div>
              </ul>

              <h5>Performance</h5>
              <ul>
                <li>Objetivo: Garantir um desempenho eficiente na arquitetura de Micro-Frontends, otimizando a carga, renderização e interação das interfaces para proporcionar uma experiência do usuário ágil e responsiva.</li>
                <li>Recomendações:
                  <ul>
                    <li>Carregamento Assíncrono de Módulos: Adotar estratégias de carregamento assíncrono, como Lazy Loading, para carregar módulos somente quando necessário, reduzindo o tempo de carregamento inicial.</li>
                    <li>Otimização de Renderização: Utilizar técnicas como Virtual DOM ou Shadow DOM para otimizar a renderização, minimizando as atualizações desnecessárias na interface do usuário.</li>
                    <li>Gestão de Estado: Implementar uma gestão de estado escolhendo uma solução que minimize a reatividade excessiva e mantenha um estado coerente entre os micro-frontends.</li>
                    <li>Cache de Recursos: Implementar estratégias de cache para recursos estáticos e dinâmicos, reduzindo a necessidade de buscar repetidamente os mesmos dados do servidor.</li>
                  </ul>
                </li>
                <div className="blue-box"> <strong>Exemplo Prático: </strong> A equipe decide adotar o Lazy Loading para carregar módulos de forma assíncrona, especialmente aqueles que não são essenciais na carga inicial. Implementam o Virtual DOM para otimizar a renderização, garantindo atualizações eficientes. Escolhem o Redux como solução de gestão de estado devido à sua eficiência com micro-frontends. Adicionalmente, estabelecem estratégias de cache usando armazenamento local para recursos estáticos e cache de servidor para dados dinâmicos, promovendo um desempenho eficiente na arquitetura de Micro-Frontends...</div>
              </ul>

              <h5>Estrutura Organizacional</h5>
              <ul>
                <li>Objetivo: Estabelecer uma estrutura organizacional eficiente para a implementação de Micro-Frontends, promovendo uma colaboração fluida entre equipes e garantindo a coesão na entrega de funcionalidades.</li>
                <li>Recomendações:
                  <ul>
                    <li>Modelo de Squad: Implementar o modelo de Squads, onde equipes multifuncionais e autônomas são responsáveis por recursos específicos. Isso promove a especialização e agilidade, favorecendo a entrega independente de micro-frontends.</li>
                    <li>Metodologia Ágil: Adotar metodologias ágeis, como Scrum ou Kanban, para gerenciar o desenvolvimento de micro-frontends. Sprints regulares, reuniões de retrospectiva e práticas ágeis fortalecem a colaboração e a adaptação contínua.</li>
                    <li>Ferramentas de Colaboração: Utilizar ferramentas de colaboração, como Slack, Microsoft Teams ou outras plataformas de comunicação. Essas ferramentas facilitam a comunicação entre equipes distribuídas, promovendo a troca de informações de forma eficaz.</li>
                    <li>Cultura de DevOps: Cultivar uma cultura de DevOps, integrando desenvolvimento e operações. Isso inclui automação de processos, entrega contínua e monitoramento, garantindo eficiência na implementação e manutenção.</li>
                  </ul>
                </li>
                <div className="blue-box"> <strong>Exemplo Prático: </strong> A equipe decide adotar o modelo de Squads, formando equipes dedicadas a diferentes micro-frontends. Escolhem a metodologia Scrum para gerenciar o desenvolvimento, realizando sprints regulares e reuniões de retrospectiva. Utilizam o Teams como plataforma de comunicação para facilitar a colaboração entre as equipes distribuídas. Essas escolhas estruturais contribuem para uma implementação prática e colaborativa de Micro-Frontend.</div>
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

export default ImplementacaoOperacionalGam
