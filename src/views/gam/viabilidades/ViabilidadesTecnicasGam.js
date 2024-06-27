import React, { useState, useEffect } from 'react';
import { CButton, CCard, CCardBody, CCol, CRow } from '@coreui/react';
import { Tabs, Tab, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';

const TOTAL_ITEMS = 11;

const ViabilidadesTecnicasGam = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [selectedPercentage, setSelectedPercentageState] = useState(0);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const handleModalToggle = () => setShowModal(!showModal);

  useEffect(() => {
    const savedItems = localStorage.getItem('checkedItems');
    if (savedItems) {
      setCheckedItems(JSON.parse(savedItems));
    }

    const savedPercentage = localStorage.getItem('selectedPercentage');
    if (savedPercentage) {
      setSelectedPercentageState(parseFloat(savedPercentage));
    }
  }, []);

  const handleCheckboxChange = (event) => {
    const itemName = event.target.name;
    const isChecked = event.target.checked;
    setCheckedItems((prevCheckedItems) => {
      const updatedCheckedItems = {
        ...prevCheckedItems,
        [itemName]: isChecked,
      };
      localStorage.setItem('checkedItems', JSON.stringify(updatedCheckedItems));
      return updatedCheckedItems;
    });
  };

  useEffect(() => {
    const selectedOptions = Object.values(checkedItems).filter((value) => value).length;
    const percentage = (selectedOptions / TOTAL_ITEMS) * 100;
    if (TOTAL_ITEMS > 0) {
      setSelectedPercentageState(percentage.toFixed(1));
      dispatch({ type: 'SET_SELECTED_PERCENTAGE', payload: percentage.toFixed(1) });
      localStorage.setItem('selectedPercentage', percentage.toFixed(1));
    }

    setShowMessage(percentage === 100);
  }, [checkedItems, dispatch]);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
          <h4>Viabilidades Técnicas</h4>
              <hr />
              <div>
                <Alert variant="success">
                  Percentual de opções selecionadas: {localStorage.getItem('selectedPercentage') || '0.0'}%
                </Alert>
              </div>
              <p>
                O Estudo de Viabilidade, no contexto das diretrizes para adoção de Micro-Frontends (GAM), 
                é uma fase estratégica e sequencial que busca analisar as viabilidades gerenciais e técnicas 
                antes de decidir pela implementação da arquitetura de Micro-Frontends. 
                Essa abordagem visa garantir uma transição suave e bem-sucedida para essa arquitetura inovadora. A imagem abaixo demostra o fluxo
                de atividades do Estudo de Viabilidade.
              </p>
              </CCardBody>
              </CCard>
        <CCard className="mb-4">
          <CCardBody>
            <section>

              <Tabs defaultActiveKey="compatibility" id="technical-feasibilities-tabs" className="mb-3">
                <Tab eventKey="compatibility" title="Compatibilidade Tecnológica">
                  <ul>
                    <li>
                      <em>Objetivo:</em> Garantir que a arquitetura de Micro-Frontends seja compatível com as tecnologias existentes na infraestrutura da empresa, minimizando conflitos e promovendo uma transição suave.
                    </li>
                    <li><em>Recomendações:</em></li>
                    <ul>
                      <div>
                        <label className='ml-2'>
                          <input
                            type="checkbox"
                            name="Avaliação da Infraestrutura Atual"
                            checked={checkedItems['Avaliação da Infraestrutura Atual'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Avaliação da Infraestrutura Atual: Realizar uma análise detalhada da infraestrutura tecnológica existente, identificando as tecnologias, frameworks e bibliotecas em uso.
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            name="Identificação de Conflitos Potenciais"
                            checked={checkedItems['Identificação de Conflitos Potenciais'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Identificação de Conflitos Potenciais: Identificar possíveis conflitos entre as tecnologias utilizadas atualmente e aquelas associadas à arquitetura de Micro-Frontends.
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            name="Padronização de Tecnologias"
                            checked={checkedItems['Padronização de Tecnologias'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Padronização de Tecnologias: Considerar a padronização de tecnologias que são comuns tanto na infraestrutura atual quanto na arquitetura de Micro-Frontends para facilitar a integração.
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            name="Testes de Compatibilidade"
                            checked={checkedItems['Testes de Compatibilidade'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Testes de Compatibilidade: Implementar testes específicos usando o projeto piloto para verificar a compatibilidade entre os componentes de Micro-Frontends e a infraestrutura existente.
                        </label>
                      </div>
                    </ul>
                  </ul>

                  <div>
                  <Button variant="primary" onClick={handleModalToggle}>
                    Exemplo Prático
                  </Button>

                  <Modal show={showModal} onHide={handleModalToggle}>
                    <Modal.Header closeButton>
                      <Modal.Title>Exemplo Prático</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="blue-box">
                      Suponha que a empresa utilize o Angular como framework principal em seus sistemas existentes. Ao iniciar a adoção de Micro-Frontends, a equipe de análise de compatibilidade avalia a versão específica do Angular em uso e confirma sua compatibilidade com os requisitos do Micro-Frontend. Além disso, ao identificar a necessidade de uma biblioteca de gerenciamento de estado, a equipe opta por padronizar o uso do Redux, que é amplamente aceito tanto na infraestrutura atual quanto na arquitetura de Micro-Frontends. Durante o projeto piloto, são conduzidos testes específicos para verificar a interoperabilidade entre os Micro-Frontends e os serviços legados, garantindo uma transição suave e minimizando conflitos.
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleModalToggle}>
                        Fechar
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>




                </Tab>
                <Tab eventKey="integration" title="Desafios de Integração">
                  <ul>
                    <li>
                      <em>Objetivo:</em> Identificar e abordar proativamente os desafios de integração que possam surgir durante a adoção da arquitetura de Micro-Frontends.
                    </li>
                    <li><em>Recomendações:</em></li>
                    <ul>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            name="Mapeamento de Interfaces"
                            checked={checkedItems['Mapeamento de Interfaces'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Mapeamento de Interfaces: Realizar um mapeamento claro das interfaces entre os Micro-Frontends e outros componentes do sistema.
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            name="Definição de Contratos"
                            checked={checkedItems['Definição de Contratos'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Definição de Contratos: Estabelecer contratos claros e documentados entre os Micro-Frontends e os serviços backend, garantindo consistência nas interações.
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            name="Monitoramento Contínuo"
                            checked={checkedItems['Monitoramento Contínuo'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Monitoramento Contínuo: Implemente mecanismos de monitoramento contínuo para identificar e resolver rapidamente problemas de integração.
                        </label>
                      </li>
                    </ul>
                  </ul>
                  <div className="blue-box">
                    <strong>Exemplo Prático:</strong> Durante a implementação de Micro-Frontends, um desafio de integração foi identificado na comunicação entre um Micro-Frontend específico e um serviço backend essencial. Utilizando o mapeamento de interfaces previamente documentado, a equipe consegue rapidamente diagnosticar o problema e atualizar o contrato de API. O monitoramento contínuo alerta a equipe sobre a anomalia, permitindo uma intervenção rápida e minimizando o impacto nos usuários finais.
                  </div>
                </Tab>
                <Tab eventKey="functional-complexities" title="Complexidades Funcionais">
                  <ul>
                    <li>
                      <em>Objetivo:</em> Entender e mitigar as complexidades funcionais associadas à arquitetura de Micro-Frontends, garantindo a entrega de funcionalidades de forma eficiente.
                    </li>
                    <li><em>Recomendações:</em></li>
                    <ul>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            name="Análise de Requisitos"
                            checked={checkedItems['Análise de Requisitos'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Análise de Requisitos: Realizar uma análise aprofundada dos requisitos funcionais da aplicação, identificando possíveis complexidades.
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            name="Design Modular"
                            checked={checkedItems['Design Modular'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Design Modular: Adote um design modular para os Micro-Frontends, dividindo a aplicação em componentes independentes para facilitar o gerenciamento das complexidades.
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            name="Testes Unitários e de Integração"
                            checked={checkedItems['Testes Unitários e de Integração'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Testes Unitários e de Integração: Implementar testes unitários e de integração para validar a funcionalidade dos Micro-Frontends individualmente e em conjunto.
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            name="Documentação Clara"
                            checked={checkedItems['Documentação Clara'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Documentação Clara: Mantenha uma documentação clara e abrangente que descreva as interações funcionais entre os Micro-Frontends e outros componentes.
                        </label>
                      </li>
                    </ul>
                  </ul>
                  <div>
                  <Button variant="primary" onClick={handleModalToggle}>
                    Exemplo Prático
                  </Button>

                  <Modal show={showModal} onHide={handleModalToggle}>
                    <Modal.Header closeButton>
                      <Modal.Title>Exemplo Prático</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="blue-box">
                        <strong>Exemplo Prático:</strong> Durante a análise de requisitos foi identificado um requisito funcional complexo relacionado à gestão de permissões de usuários em diferentes Micro-Frontends. Ao adotar um design modular, a equipe decide criar um Micro-Frontend dedicado exclusivamente à gestão de permissões. Testes unitários e de integração são implementados para garantir que essa funcionalidade se integre sem problemas aos demais Micro-Frontends. A documentação clara detalha os fluxos de interação, simplificando a compreensão da complexidade funcional pela equipe.
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleModalToggle}>
                        Fechar
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                </Tab>
              </Tabs>
            </section>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ViabilidadesTecnicasGam;
