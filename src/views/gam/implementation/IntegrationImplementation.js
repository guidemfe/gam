import { CCard, CCardBody, CCol, CRow } from '@coreui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Tabs, Tab, Alert } from 'react-bootstrap';

import '../../../scss/_custom.scss';

const TOTAL_ITEMS = 11;

const IntegrationImplementation = () => {
  const [integrationImplementation, setCheckedItems] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [integrationPercentage, setSelectedPercentageState] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedItems = localStorage.getItem('integrationImplementation');
    if (savedItems) {
      setCheckedItems(JSON.parse(savedItems));
    }

    const savedPercentage = localStorage.getItem('integrationPercentage');
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
      localStorage.setItem('integrationImplementation', JSON.stringify(checkedItemsManagerialFeasibility));
      return checkedItemsManagerialFeasibility;
    });
  };

  useEffect(() => {
    const selectedOptions = Object.values(integrationImplementation).filter((value) => value).length;
    const percentage = (selectedOptions / TOTAL_ITEMS) * 100;
    if (TOTAL_ITEMS > 0) {
      setSelectedPercentageState(percentage.toFixed(1));
      dispatch({ type: 'SET_INTEGATION_PERCENTAGE', payload: percentage.toFixed(1) });
      localStorage.setItem('integrationPercentage', percentage.toFixed(1));
    }

    setShowMessage(percentage === 100);
  }, [integrationImplementation, dispatch]);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
              <h4>Decisões de Integração</h4>
              <hr />
              <div>
                <Alert variant="success">
                  Percentual de opções selecionadas: {localStorage.getItem('integrationPercentage') || '0.0'}%
                </Alert>
              </div>
              <hr />
              <p>
              A fase de Implementação Prática no Guidelines for Adopting Micro-Frontends (GAM)
              marca a transição do planejamento teórico para a aplicação concreta da arquitetura de
              Micro-Frontends. Dividida em decisões Operacionais e de Integração, esta etapa visa
              guiar os arquitetos e desenvolvedores na execução efetiva do paradigma arquitetônico.
              As estratégias delineadas nas fases anteriores serão agora aplicadas no Projeto Piloto,
              representando um ambiente controlado para validar e consolidar as decisões tomadas previamente. 
              A implementação prática é o ponto em que as escolhas teóricas começam a se
              materializar, e cada decisão tem impacto direto na eficiência, escalabilidade e manutenibilidade do sistema. A
              Figura abaixo ilustra o fluxo das decisões operacionais e de integração
              durante esta fase.
              </p>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardBody>
            <section>
              <Tabs defaultActiveKey="alignment" id="integration-implementation-tabs" className="mb-3">
                <Tab eventKey="alignment" title="Compatibilidade Tecnológica:">
                  <ul className="no-bullets">
                    <li><em>Objetivo:</em> Garantir que a arquitetura de Micro-Frontends seja compatível com as tecnologias existentes na
                    infraestrutura da empresa, minimizando conflitos e promovendo uma transição suave.</li>
                    <li><em>Recomendações:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Avaliação da Infraestrutura Atual"
                            checked={integrationImplementation['Avaliação da Infraestrutura Atual'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Realizar uma análise detalhada da infraestrutura tecnológica existente, identificando as tecnologias, frameworks e bibliotecas em uso.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Identificação de Conflitos Potenciais"
                            checked={integrationImplementation['Identificação de Conflitos Potenciais'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Identificação de Conflitos Potenciais: Identificar possíveis conflitos entre as tecnologias utilizadas
                          atualmente e aquelas associadas à arquitetura de Micro-Frontends.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Padronização de Tecnologias"
                            checked={integrationImplementation['Padronização de Tecnologias'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Considerar a padronização de tecnologias que são comuns tanto na infraestrutura atual quanto na arquitetura de Micro-Frontends para facilitar a integração.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Testes de Compatibilidade"
                            checked={integrationImplementation['Testes de Compatibilidade'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Implementar testes específicos usando o projeto piloto para verificar a
                          compatibilidade entre os componentes de Micro-Frontends e a infraestrutura existente.
                        </label>
                      </div>
                    </ul>
                    <div className="blue-box-2">
                      <strong>Exemplo Prático:</strong> 
                      Suponha que a empresa utilize o Angular como framework principal em seus sistemas
                      existentes. Ao iniciar a adoção de Micro-Frontends, a equipe de análise de compatibilidade avalia a versão
                      específica do Angular em uso e confirma sua compatibilidade com os requisitos do Micro-Frontend. Além disso, ao
                      identificar a necessidade de uma biblioteca de gerenciamento de estado, a equipe opta por padronizar o uso do
                      Redux, que é amplamente aceito tanto na infraestrutura atual quanto na arquitetura de Micro-Frontends. Durante
                      o projeto piloto, são conduzidos testes específicos para verificar a interoperabilidade entre os Micro-Frontends
                      e os serviços legados, garantindo uma transição suave e minimizando conflitos.
                    </div>
                  </ul>
                </Tab>
                <Tab eventKey="costs" title="Desafios de Integração">
                  <ul className="no-bullets">
                    <li><em>Objetivo:</em> Identificar e abordar proativamente os desafios de integração que possam surgir durante a
                    adoção da arquitetura de Micro-Frontends</li>
                    <li><em>Recomendações:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Mapeamento de Interfaces"
                            checked={integrationImplementation['Mapeamento de Interfaces'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Mapeamento de Interfaces: Realizar um mapeamento claro das interfaces entre os Micro-Frontends e outros
                          componentes do sistema.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Definição de Contratos"
                            checked={integrationImplementation['Definição de Contratos'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Definição de Contratos: Estabelecer contratos claros e documentados entre os Micro-Frontends e os serviços
                          backend, garantindo consistência nas interações.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Monitoramento Contínuo"
                            checked={integrationImplementation['Monitoramento Contínuo'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Monitoramento Contínuo: Implemente mecanismos de monitoramento contínuo para identificar e resolver
                          rapidamente problemas de integração.
                        </label>
                      </div>
                    </ul>
                    <div className="blue-box-2">
                      <strong>Exemplo Prático:</strong> 
                      Durante a implementação de Micro-Frontends, um desafio de integração foi identificado
                      na comunicação entre um Micro-Frontend específico e um serviço backend essencial. Utilizando o mapeamento de
                      interfaces previamente documentado, a equipe consegue rapidamente diagnosticar o problema e atualizar o contrato
                      de API. O monitoramento contínuo alerta a equipe sobre a anomalia, permitindo uma intervenção rápida e
                      minimizando o impacto nos usuários finais.
                    </div>
                  </ul>
                </Tab>
                <Tab eventKey="change-management" title="Complexidades Funcionais">
                  <ul className="no-bullets">
                    <li><em>Objetivo:</em> Entender e mitigar as complexidades funcionais associadas à arquitetura de Micro-Frontends,
                    garantindo a entrega de funcionalidades de forma eficiente.</li>
                    <li><em>Recomendações:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Análise de Requisitos"
                            checked={integrationImplementation['Análise de Requisitos'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Análise de Requisitos: Realizar uma análise aprofundada dos requisitos funcionais da aplicação,
                          identificando possíveis complexidades.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Design Modular"
                            checked={integrationImplementation['Design Modular'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Design Modular: Adote um design modular para os Micro-Frontends, dividindo a aplicação em componentes
                          independentes para facilitar o gerenciamento das complexidades.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Testes Unitários e de Integração"
                            checked={integrationImplementation['Testes Unitários e de Integração'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Testes Unitários e de Integração: Implementar testes unitários e de integração para validar a funcionalidade
                          dos Micro-Frontends individualmente e em conjunto.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Documentação Clara"
                            checked={integrationImplementation['Documentação Clara'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Documentação Clara: Mantenha uma documentação clara e abrangente que descreva as interações funcionais
                          entre os Micro-Frontends e outros componentes.
                        </label>
                      </div>
                    </ul>
                    <div className="blue-box-2">
                      <strong>Exemplo Prático:</strong> 
                      Durante a análise de requisitos foi identificado um requisito funcional complexo
                      relacionado à gestão de permissões de usuários em diferentes Micro-Frontends. Ao adotar um design modular, a
                      equipe decide criar um Micro-Frontend dedicado exclusivamente à gestão de permissões. Testes unitários e de
                      integração são implementados para garantir que essa funcionalidade se integre sem problemas aos demais
                      Micro-Frontends. A documentação clara detalha os fluxos de interação, simplificando a compreensão da
                      complexidade funcional pela equipe.
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

export default IntegrationImplementation;
