import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';
import { Tabs, Tab, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import '../../../scss/_custom.scss'; 

const TOTAL_ITEMS = 9;

const Maintainability = () => {
  const [maintainability, setCheckedItems] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [maintainabilityPercentage, setSelectedPercentageState] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedItems = localStorage.getItem('maintainability');
    if (savedItems) {
      setCheckedItems(JSON.parse(savedItems));
    }

    const savedPercentage = localStorage.getItem('maintainabilityPercentage');
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
      localStorage.setItem('maintainability', JSON.stringify(updatedCheckedItems));
      return updatedCheckedItems;
    });
  };

  useEffect(() => {
    const selectedOptions = Object.values(maintainability).filter((value) => value).length;
    const percentage = (selectedOptions / TOTAL_ITEMS) * 100;
    if (TOTAL_ITEMS > 0) {
      setSelectedPercentageState(percentage.toFixed(1));
      dispatch({ type: 'SET_MAINTAINABILITY_PERCENTAGE', payload: percentage.toFixed(1) });
      localStorage.setItem('maintainabilityPercentage', percentage.toFixed(1));
    }

    setShowMessage(percentage === 100);
  }, [maintainability, dispatch]);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <h4>Manutenibilidade</h4>
            <hr />
            <div>
              <Alert variant="success">
                Percentual de opções selecionadas: {localStorage.getItem('maintainabilityPercentage') || '0.0'}%
              </Alert>
            </div>
            <p>
            A ISO/IEC 25010 define a manutenibilidade como a capacidade de um sistema ser modificado, atualizado e adaptado. Suas subcaracterísticas principais incluem Modularidade, Reusabilidade, Analisabilidade, Modificabilidade e Testabilidade. No contexto do Guia de Adoção ao micro-frontend (GAM), a manutenibilidade dá ênfase ao código, adaptamos os conceitos para focar em Analisabilidade, Modificabilidade e Testabilidade, destacando a importância da análise eficiente, modificação eficaz e testagem robusta do código-fonte em ambientes de micro-frontends.
            </p>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardBody>
            <section>
              <Tabs defaultActiveKey="compatibility" id="technical-feasibilities-tabs" className="mb-3">
                <Tab eventKey="compatibility" title="Analisabilidade">
                  <ul className="no-bullets">
                    <li>
                      <em>Objetivo:</em> Compreender a estrutura e funcionamento dos micro-frontends para diagnosticar problemas de forma rápida e precisa.
                    </li>
                    <li><em>Recomendações:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Padrões de Nomenclatura"
                            checked={maintainability['Padrões de Nomenclatura'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Padrões de Nomenclatura: Adotar convenções de nomenclatura consistentes para facilitar a identificação e compreensão de componentes.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Documentação"
                            checked={maintainability['Documentação'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Documentação: Manter documentação detalhada sobre a arquitetura, interações e responsabilidades de cada micro-frontend.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Ferramentas de Análise Estática"
                            checked={maintainability['Ferramentas de Análise Estática'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Ferramentas de Análise Estática: Utilizar ferramentas como ESLint e TSLint para análise estática de código, identificando padrões, complexidade e possíveis problemas. Ferramentas mais abrangentes como Sonar podem oferecer uma visão holística da qualidade do código, incluindo métricas de código-fonte, cobertura de código e detecção de possíveis problemas de segurança.
                        </label>
                      </div>
                    </ul>
                  </ul>
                  <div>
                    <div className="blue-box">
                      <strong>Exemplo Prático:</strong> Um desenvolvedor é designado para atualizar a interface da página de detalhes do produto. Durante o processo, o desenvolvedor segue os padrões de nomenclatura, consulta a documentação para entender a estrutura e as interações, enquanto as ferramentas de análise estática (ESLint e TSLint) sinalizam potenciais melhorias no código. O Sonar complementa essa análise, fornecendo métricas detalhadas e identificando áreas de atenção, resultando em modificações eficientes e seguras no micro-frontend.
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="integration" title="Modificabilidade">
                  <ul className="no-bullets">
                    <li>
                      <em>Objetivo:</em> Permitir modificações eficientes nos micro-frontends sem introduzir defeitos ou degradar a qualidade.
                    </li>
                    <li><em>Recomendações:</em></li>
                    <ul className="no-bullets">
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Design Modular"
                            checked={maintainability['Design Modular'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Design Modular: Estruturar os micro-frontends de forma modular, minimizando acoplamento entre eles.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Refatoração Contínua"
                            checked={maintainability['Refatoração Contínua'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Refatoração Contínua: Incentivar práticas de refatoração para manter o código limpo e adaptável.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Controle de Versão"
                            checked={maintainability['Controle de Versão'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Controle de Versão: Utilizar sistemas de controle de versão eficientes, como Git, para rastrear alterações e facilitar reversões se necessário. Ferramentas como o Veracode podem ser incorporadas para realizar análises de segurança estática e dinâmica, ajudando a garantir modificações seguras.
                        </label>
                      </li>
                    </ul>
                  </ul>
                  <div className="blue-box">
                    <strong>Exemplo Prático:</strong> Uma nova funcionalidade precisa ser adicionada a um dos micro-frontends. Com o design modular, o desenvolvedor pode isolar a implementação da nova funcionalidade sem afetar outras partes do sistema. Durante o processo, práticas contínuas de refatoração garantem que o código permaneça limpo e adaptável. O uso eficiente do controle de versão permite que o desenvolvedor rastreie e gerencie as alterações de maneira organizada. A integração do Veracode verifica possíveis vulnerabilidades de segurança, garantindo modificações seguras antes da implementação.
                  </div>
                </Tab>
                <Tab eventKey="functional-complexities" title="Testabilidade">
                  <ul className="no-bullets">
                    <li>
                      <em>Objetivo:</em> Garantir a efetividade dos testes, permitindo a detecção precoce de falhas e mudanças seguras.
                    </li>
                    <li><em>Recomendações:</em></li>
                    <ul className="no-bullets">
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Testes Unitários e de Integração"
                            checked={maintainability['Testes Unitários e de Integração'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Testes Unitários e de Integração: Implementar testes unitários (usando Jest e Enzyme para React, por exemplo) e de integração para verificar a funcionalidade isolada e a interação entre os micro-frontends.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Automação de Testes"
                            checked={maintainability['Automação de Testes'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Automação de Testes: Utilize ferramentas de automação de testes, como Cypress, para agilizar o processo de verificação.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Ambientes de Teste Semelhantes à Produção"
                            checked={maintainability['Ambientes de Teste Semelhantes à Produção'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Ambientes de Teste Semelhantes à Produção: Manter ambientes de teste que reproduzam fielmente as condições de produção para validar o comportamento real do sistema.
                        </label>
                      </li>
                    </ul>
                  </ul>
                  <div>
                    <div className="blue-box">
                      <strong>Exemplo Prático:</strong> Uma nova funcionalidade é adicionada a um micro-frontend específico. Os testes unitários garantem que a funcionalidade isolada funcione conforme o esperado, utilizando ferramentas como Jest para validar componentes React. Testes de integração, incorporando ferramentas como Cypress, verificam a interação entre os diferentes micro-frontends. A automação desses testes agiliza o processo de verificação, permitindo que a equipe de desenvolvimento detecte precocemente quaisquer falhas potenciais. Ao manter ambientes de teste semelhantes à produção, a equipe assegura que as condições reais do sistema sejam simuladas, validando de forma abrangente o comportamento do micro-frontend antes da implantação.
                    </div>
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

export default Maintainability;
