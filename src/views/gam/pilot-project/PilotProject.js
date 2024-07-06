import { CCard, CCardBody, CCol, CRow } from '@coreui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Tabs, Tab, Alert } from 'react-bootstrap';

import PilotoImg from '../../../assets/images/gam_pilot_project.png'
import '../../../scss/_custom.scss';

const TOTAL_ITEMS = 4;

const PilotProject = () => {
  const [pilotProject, setCheckedItems] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [pilotPercentage, setSelectedPercentageState] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedItems = localStorage.getItem('pilotProject');
    if (savedItems) {
      setCheckedItems(JSON.parse(savedItems));
    }

    const savedPercentage = localStorage.getItem('pilotPercentage');
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
      localStorage.setItem('pilotProject', JSON.stringify(checkedItemsManagerialFeasibility));
      return checkedItemsManagerialFeasibility;
    });
  };

  useEffect(() => {
    const selectedOptions = Object.values(pilotProject).filter((value) => value).length;
    const percentage = (selectedOptions / TOTAL_ITEMS) * 100;
    if (TOTAL_ITEMS > 0) {
      setSelectedPercentageState(percentage.toFixed(1));
      dispatch({ type: 'SET_PILOT_PERCENTAGE', payload: percentage.toFixed(1) });
      localStorage.setItem('pilotPercentage', percentage.toFixed(1));
    }

    setShowMessage(percentage === 100);
  }, [pilotProject, dispatch]);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
              <h4>Projeto Piloto</h4>
              <hr />
              <div>
                <Alert variant="success">
                  Percentual de opções selecionadas: {localStorage.getItem('pilotPercentage') || '0.0'}%
                </Alert>
              </div>
              <hr />
              <p>
              Esta seção do Projeto Piloto Guidelines for Adopting Micro-Frontends (GAM) representa um marco no processo de implementação prática da arquitetura de Micro-Frontends. Nesta fase, foi utilizado um ambiente controlado, onde o estudo das viabilidades técnicas, as decisões operacionais e de integração previamente delineadas foram aplicadas de maneira tangível. O Projeto Piloto serve como um teste de validação, permitindo que as equipes de desenvolvimento, arquitetos de software e líderes de projeto observem como as estratégias teóricas se traduzem na realidade operacional. A figura abaixo fornece uma visão geral do papel central do Projeto Piloto no contexto do GAM.
              </p>
              <p>
              <img src={PilotoImg} alt="Projeto Piloto" className="img-fluid mb-3" />
              </p>
              <p>Durante esta fase, destacaremos não apenas a implementação técnica, mas também as lições aprendidas e os ajustes necessários à medida que a equipe ganha insights valiosos na aplicação prática do paradigma de Micro-Frontends. O Projeto Piloto oferece uma oportunidade única para avaliar a eficácia das escolhas arquiteturais e de integração em um contexto controlado, antes de uma expansão mais ampla para outros projetos ou áreas do sistema. A escolha do Projeto Piloto é um ponto fundamental para o sucesso da adoção de Micro-Frontends. Nesta etapa, os stakeholders devem considerar os seguintes aspectos:</p>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardBody>
            <section>
              <Tabs defaultActiveKey="alignment" id="integration-implementation-tabs" className="mb-3">
                <Tab eventKey="alignment" title="Seleção do Projeto Piloto">
                  <ul className="no-bullets">
                    <li><em>Objetivo:</em> A escolha do Projeto Piloto é um ponto fundamental para o sucesso da adoção de Micro-Frontends. Nesta etapa, os stakeholders devem considerar os seguintes aspectos.</li>
                    <li><em>Recomendações:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Complexidade do Projeto"
                            checked={pilotProject['Complexidade do Projeto'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Complexidade do Projeto: Avaliar a complexidade geral do projeto em termos de funcionalidades, interações e número de componentes. Projetos mais complexos e extensos podem oferecer uma melhor compreensão dos desafios e benefícios do uso de Micro-Frontends.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Diversidade de Componentes"
                            checked={pilotProject['Diversidade de Componentes'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Diversidade de Componentes: Buscar projetos que possuam uma variedade representativa de componentes. Isso permite explorar como diferentes tipos de funcionalidades podem ser encapsulados em Micro-Frontends e integrados de maneira eficiente.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Representatividade do Cenário"
                            checked={pilotProject['Representatividade do Cenário'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Representatividade do Cenário: Certifique-se de que o projeto selecionado seja representativo do ambiente mais amplo da organização. Um Piloto que reflita os desafios e requisitos típicos do desenvolvimento frontend da empresa proporcionará insights mais aplicáveis.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Impacto Potencial"
                            checked={pilotProject['Impacto Potencial'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Impacto Potencial: Considerar o impacto potencial do Projeto Piloto na organização. Escolher um projeto com impacto significativo, mas controlado, permite avaliar os resultados sem comprometer a estabilidade geral do sistema.
                        </label>
                      </div>
                    </ul>
                    <div className="blue-box-2">
                      <strong>Exemplo Prático:</strong> 
                      Durante a fase de implementação do projeto piloto, a equipe opta por selecionar a página de carrinho de compras como o cenário inicial, considerando a complexidade do projeto, pois a página envolve diversas funcionalidades, desde a exibição dos itens no carrinho até a gestão de cupons e opções de pagamento. A diversidade de componentes é assegurada, abrangendo desde elementos simples, como ícones, até componentes mais complexos, como a lógica de aplicação de descontos. A representatividade do cenário é garantida, pois a página de carrinho de compras reflete os desafios típicos do frontend, incluindo interações com o banco de dados de inventário, cálculos de preços e integrações com gateways de pagamento. Quanto ao impacto potencial, o projeto possui relevância significativa, uma vez que melhorias na experiência do usuário nessa etapa do processo de compra podem ter um impacto notável, mas controlado, permitindo uma avaliação aprofundada antes de uma expansão mais ampla da arquitetura de Micro-Frontends para outras áreas do sistema.
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

export default PilotProject;
