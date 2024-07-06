import { CCard, CCardBody, CCol, CRow } from '@coreui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Tabs, Tab, Alert } from 'react-bootstrap';

import '../../../scss/_custom.scss';

const TOTAL_ITEMS = 16;

const OperationalImplementation = () => {
  const [operationalImplementation, setCheckedItems] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [operationalPercentage, setSelectedPercentageState] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedItems = localStorage.getItem('operationalImplementation');
    if (savedItems) {
      setCheckedItems(JSON.parse(savedItems));
    }

    const savedPercentage = localStorage.getItem('operationalPercentage');
    if (savedPercentage) {
      setSelectedPercentageState(parseFloat(savedPercentage));
    }
  }, []);

  const handleCheckboxChange = (event) => {
    const itemName = event.target.name;
    const isChecked = event.target.checked;
    setCheckedItems((prevCheckedItems) => {
      const checkedItemsManagerialFeasibility = {
        ...prevCheckedItems,
        [itemName]: isChecked,
      };
      localStorage.setItem('operationalImplementation', JSON.stringify(checkedItemsManagerialFeasibility));
      return checkedItemsManagerialFeasibility;
    });
  };

  useEffect(() => {
    const selectedOptions = Object.values(operationalImplementation).filter((value) => value).length;
    const percentage = (selectedOptions / TOTAL_ITEMS) * 100;
    if (TOTAL_ITEMS > 0) {
      setSelectedPercentageState(percentage.toFixed(1));
      dispatch({ type: 'SET_OPERATIONAL_PERCENTAGE', payload: percentage.toFixed(1) });
      localStorage.setItem('operationalPercentage', percentage.toFixed(1));
    }

    setShowMessage(percentage === 100);
  }, [operationalImplementation, dispatch]);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
              <h4>Decisões de Operacionais</h4>
              <hr />
              <div>
                <Alert variant="success">
                  Percentual de opções selecionadas: {localStorage.getItem('operationalPercentage') || '0.0'}%
                </Alert>
              </div>
              <hr />
              <p>
              As decisões operacionais focam nas escolhas estratégicas das áreas de compilação e implantação, compartilhamento de código, otimização de desempenho e a estrutura organizacional. No contexto dos micro-frontends, a tomada de decisões operacionais práticas e bem-informadas é fundamental para assegurar a agilidade, a colaboração eficiente entre equipes e a adaptação contínua às demandas dinâmicas do desenvolvimento de software distribuído.
              </p>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardBody>
            <section>
              <Tabs defaultActiveKey="alignment" id="integration-implementation-tabs" className="mb-3">
                <Tab eventKey="alignment" title="Compilação e Implantação">
                  <ul className="no-bullets">
                    <li><em>Objetivo:</em> Implementar um processo eficiente de compilação e implantação para permitir atualizações rápidas e independentes de cada micro-frontend.</li>
                    <li><em>Recomendações:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Integração e Entrega contínua (CI/CD)"
                            checked={operationalImplementation['Integração e Entrega contínua (CI/CD)'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Integração e Entrega contínua (CI/CD): Utilizar ferramentas de integração contínua e entrega contínua (CI/CD) para automatizar o processo de compilação, testes e implantação. Garanta que cada alteração no código seja submetida a um pipeline automatizado para validar e implantar automaticamente.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Pipeline"
                            checked={operationalImplementation['Pipeline'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Pipeline: Configurar pipelines de entrega contínua para garantir uma integração suave e implantações rápidas. Automatize a geração de artefatos, como contêineres ou pacotes, prontos para a implantação em ambientes de produção.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Orquestração"
                            checked={operationalImplementation['Orquestração'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Orquestração: Explorar ferramentas como Kubernetes para orquestração de contêineres e escalabilidade.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Logs e rastreamento"
                            checked={operationalImplementation['Logs e rastreamento'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Logs e rastreamento: Integrar sistemas de registro (logs) e rastreamento para acompanhar eventos durante o processo de compilação e implantação. Isso facilita a identificação rápida de problemas e a análise de desempenho.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Métricas de Desempenho"
                            checked={operationalImplementation['Métricas de Desempenho'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Métricas de Desempenho: Implementar métricas de desempenho durante a compilação e a implantação para monitorar a eficiência do processo. Utilize ferramentas que ofereçam visibilidade em tempo real e alertas para eventos críticos.
                        </label>
                      </div>
                    </ul>
                    <div className="blue-box-2">
                      <strong>Exemplo Prático:</strong> 
                      Ao implementar a automação, a equipe decide integrar uma ferramenta CI/CD, como <a href="https://www.jenkins.io/" target="_blank" rel="noreferrer">Jenkins</a>, ao repositório de código-fonte...
                    </div>
                  </ul>
                </Tab>
                <Tab eventKey="costs" title="Compartilhamento de Código">
                  <ul className="no-bullets">
                    <li><em>Objetivo:</em> Facilitar e otimizar o compartilhamento de código entre os diferentes micro-frontends, promovendo uma abordagem eficiente e colaborativa no desenvolvimento distribuído.</li>
                    <li><em>Recomendações:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Identificação de Funcionalidades Comuns"
                            checked={operationalImplementation['Identificação de Funcionalidades Comuns'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Identificação de Funcionalidades Comuns: Identificar funcionalidades comuns que possam ser usadas por bibliotecas.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Web Components e Design System"
                            checked={operationalImplementation['Web Components e Design System'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Web Components e Design System: Criar Web Components para encapsular funcionalidades específicas, garantindo modularidade e reusabilidade e integrar ao Design System da organização, garantindo consistência visual e de interação em todos os micro-frontends.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Controle de Versão"
                            checked={operationalImplementation['Controle de Versão'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Controle de Versão: Implementar um sistema de controle de versão como git utilizando ferramentas de gestão de pacotes npm ou yarn.
                        </label>
                      </div>
                    </ul>
                    <div className="blue-box-2">
                      <strong>Exemplo Prático:</strong> 
                      A equipe inicia o processo identificando funcionalidades comuns que podem ser encapsuladas em bibliotecas. Desenvolvem Web Components reutilizáveis para modularidade e reusabilidade, integrando-os ao Design System da organização para garantir consistência visual e de interação. Optam por utilizar <a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git</a> como sistema de controle de versão, combinado com <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">npm</a> ou <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">yarn</a> para gerenciamento eficiente de pacotes...
                    </div>
                  </ul>
                </Tab>
                <Tab eventKey="change-management" title="Performance">
                  <ul className="no-bullets">
                    <li><em>Objetivo:</em> Garantir um desempenho eficiente na arquitetura de Micro-Frontends, otimizando a carga, renderização e interação das interfaces para proporcionar uma experiência do usuário ágil e responsiva.</li>
                    <li><em>Recomendações:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Carregamento Assíncrono de Módulos"
                            checked={operationalImplementation['Carregamento Assíncrono de Módulos'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Carregamento Assíncrono de Módulos: Adotar estratégias de carregamento assíncrono, como Lazy Loading, para carregar módulos somente quando necessário, reduzindo o tempo de carregamento inicial.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Otimização de Renderização"
                            checked={operationalImplementation['Otimização de Renderização'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Otimização de Renderização: Utilizar técnicas como Virtual DOM ou Shadow DOM para otimizar a renderização, minimizando as atualizações desnecessárias na interface do usuário.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Gestão de Estado"
                            checked={operationalImplementation['Gestão de Estado'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Gestão de Estado: Implementar uma gestão de estado escolhendo uma solução que minimize a reatividade excessiva e mantenha um estado coerente entre os micro-frontends.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Cache de Recursos"
                            checked={operationalImplementation['Cache de Recursos'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Cache de Recursos: Implementar estratégias de cache para recursos estáticos e dinâmicos, reduzindo a necessidade de buscar repetidamente os mesmos dados do servidor.
                        </label>
                      </div>
                    </ul>
                    <div className="blue-box-2">
                      <strong>Exemplo Prático:</strong> 
                      A equipe decide adotar o Lazy Loading para carregar módulos de forma assíncrona, especialmente aqueles que não são essenciais na carga inicial. Implementam o Virtual DOM para otimizar a renderização, garantindo atualizações eficientes. Escolhem o Redux como solução de gestão de estado devido à sua eficiência com micro-frontends. Adicionalmente, estabelecem estratégias de cache usando armazenamento local para recursos estáticos e cache de servidor para dados dinâmicos, promovendo um desempenho eficiente na arquitetura de Micro-Frontends...
                    </div>
                  </ul>
                </Tab>
                <Tab eventKey="organizational-structure" title="Estrutura Organizacional">
                  <ul className="no-bullets">
                    <li><em>Objetivo:</em> Estabelecer uma estrutura organizacional eficiente para a implementação de Micro-Frontends, promovendo uma colaboração fluida entre equipes e garantindo a coesão na entrega de funcionalidades.</li>
                    <li><em>Recomendações:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Modelo de Squad"
                            checked={operationalImplementation['Modelo de Squad'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Modelo de Squad: Implementar o modelo de Squads, onde equipes multifuncionais e autônomas são responsáveis por recursos específicos. Isso promove a especialização e agilidade, favorecendo a entrega independente de micro-frontends.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Metodologia Ágil"
                            checked={operationalImplementation['Metodologia Ágil'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Metodologia Ágil: Adotar metodologias ágeis, como Scrum ou Kanban, para gerenciar o desenvolvimento de micro-frontends. Sprints regulares, reuniões de retrospectiva e práticas ágeis fortalecem a colaboração e a adaptação contínua.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Ferramentas de Colaboração"
                            checked={operationalImplementation['Ferramentas de Colaboração'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Ferramentas de Colaboração: Utilizar ferramentas de colaboração, como Slack, Microsoft Teams ou outras plataformas de comunicação. Essas ferramentas facilitam a comunicação entre equipes distribuídas, promovendo a troca de informações de forma eficaz.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Cultura de DevOps"
                            checked={operationalImplementation['Cultura de DevOps'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Cultura de DevOps: Cultivar uma cultura de DevOps, integrando desenvolvimento e operações. Isso inclui automação de processos, entrega contínua e monitoramento, garantindo eficiência na implementação e manutenção.
                        </label>
                      </div>
                    </ul>
                    <div className="blue-box-2">
                      <strong>Exemplo Prático:</strong> 
                      A equipe decide adotar o modelo de Squads, formando equipes dedicadas a diferentes micro-frontends. Escolhem a metodologia Scrum para gerenciar o desenvolvimento, realizando sprints regulares e reuniões de retrospectiva. Utilizam o Teams como plataforma de comunicação para facilitar a colaboração entre as equipes distribuídas. Essas escolhas estruturais contribuem para uma implementação prática e colaborativa de Micro-Frontend.
                    </div>
                  </ul>
                </Tab>
              </Tabs>
            </section>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default OperationalImplementation;
