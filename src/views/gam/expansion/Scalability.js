import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';
import { Tabs, Tab, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import '../../../scss/_custom.scss'; 

const TOTAL_ITEMS = 12;

const Scalability = () => {
  const [scalability, setCheckedItems] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [scalabilityPercentage, setSelectedPercentageState] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedItems = localStorage.getItem('scalability');
    if (savedItems) {
      setCheckedItems(JSON.parse(savedItems));
    }

    const savedPercentage = localStorage.getItem('scalabilityPercentage');
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
      localStorage.setItem('scalability', JSON.stringify(updatedCheckedItems));
      return updatedCheckedItems;
    });
  };

  useEffect(() => {
    const selectedOptions = Object.values(scalability).filter((value) => value).length;
    const percentage = (selectedOptions / TOTAL_ITEMS) * 100;
    if (TOTAL_ITEMS > 0) {
      setSelectedPercentageState(percentage.toFixed(1));
      dispatch({ type: 'SET_SCALABILITY_PERCENTAGE', payload: percentage.toFixed(1) });
      localStorage.setItem('scalabilityPercentage', percentage.toFixed(1));
    }

    setShowMessage(percentage === 100);
  }, [scalability, dispatch]);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <h4>Escalabilidade</h4>
            <hr />
            <div>
              <Alert variant="success">
                Percentual de opções selecionadas: {localStorage.getItem('scalabilityPercentage') || '0.0'}%
              </Alert>
            </div>
            <p>
            Esta etapa visa capacitar a aplicação a crescer de maneira eficiente e adaptar-se às demandas variáveis do ambiente. As principais áreas de foco são a adição de novos micro-frontends, o gerenciamento de carga e as estratégias de cache.
            </p>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardBody>
            <section>
              <Tabs defaultActiveKey="compatibility" id="technical-feasibilities-tabs" className="mb-3">
                <Tab eventKey="compatibility" title="Adição de Micro-Frontends:">
                  <ul className="no-bullets">
                    <li>
                      <em>Objetivo:</em> Facilitar a incorporação de novos micro-frontends ao sistema existente.
                    </li>
                    <li><em>Recomendações:</em></li>
                    <ul className="no-bullets">
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Modularização Dinâmica"
                            checked={scalability['Modularização Dinâmica'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Modularização Dinâmica: Desenvolver arquitetura modular que suporte a adição dinâmica de novos micro-frontends sem impactar os existentes.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Balanceamento de Carga"
                            checked={scalability['Balanceamento de Carga'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Balanceamento de Carga: Implementar sistema de balanceamento de carga automático como serviços de orquestração, usando ferramentas como Kubernetes, para facilitar o dimensionamento automático com base nas métricas de tráfego.
                        </label>
                      </div>
                      <div>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Gestão de Cache"
                            checked={scalability['Gestão de Cache'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Gestão de Cache: Adote estratégias de cache, como Redis, para armazenar temporariamente as respostas de micro-serviços, melhorando o throughput da composição de micro-frontends. Explore o armazenamento de DOM de micro-frontends em caches in-memory para reduzir a necessidade de recomposição a cada requisição.
                        </label>
                      </div>
                    </ul>
                  </ul>
                  <div>
                    <div className="blue-box">
                      <strong>Exemplo Prático:</strong> Em um cenário de comércio eletrônico baseado em micro-frontends, um novo micro-frontend chamado
                      &quot;Recomendações Personalizadas&quot; foi adicionado. Implementa-se um sistema de balanceamento de carga automático com Kubernetes para escalabilidade dinâmica com base no tráfego. Para aprimorar o desempenho, utiliza-se estratégias de cache, incluindo Redis, para armazenar temporariamente respostas de micro-serviços e o DOM de micro-frontends em caches in-memory, reduzindo a necessidade de recomposição a cada requisição.
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="integration" title="Gerenciamento de Carga">
                  <ul className="no-bullets">
                    <li>
                      <em>Objetivo:</em> Garantir a eficiência operacional e o desempenho otimizado da aplicação, mesmo diante de demandas crescentes.
                    </li>
                    <li><em>Recomendações:</em></li>
                    <ul className="no-bullets">
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Autoescalabilidade na Nuvem"
                            checked={scalability['Autoescalabilidade na Nuvem'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Autoescalabilidade na Nuvem: Utilize funcionalidades de autoescalabilidade oferecidas por provedores de nuvem para ajustar dinamicamente a infraestrutura com base nos padrões de tráfego. Escolha camadas de computação eficientes, como contêineres, para rápida execução, e considere opções gerenciadas, como serviços serverless, para simplificar a operacionalização da infraestrutura.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Previsão de Carga e Ajuste Manual"
                            checked={scalability['Previsão de Carga e Ajuste Manual'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Previsão de Carga e Ajuste Manual: Estabelecer uma infraestrutura de linha de base capaz de lidar com cargas previsíveis, como vendas da Black Friday, adotando práticas de comparação entre diferentes serviços e opções plug-and-play.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Otimização de Latência com CDN"
                            checked={scalability['Otimização de Latência com CDN'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Otimização de Latência com CDN: Utilizar uma CDN para aumentar a velocidade de entrega das páginas da web, reduzindo a latência entre o cliente e o conteúdo solicitado.
                        </label>
                      </li>
                    </ul>
                  </ul>
                  <div className="blue-box">
                    <strong>Exemplo Prático:</strong> Para otimizar o desempenho da plataforma de comércio eletrônico, foi aproveitada a autoescalabilidade na nuvem, utilizando serviços serverless e contêineres para ajustar dinamicamente a infraestrutura com base em padrões de tráfego, garantindo rápida execução e eficiência operacional. Para lidar com picos previsíveis, como as vendas da &quot;Black Friday&quot;, estabeleceu-se uma infraestrutura de linha de base com ajustes manuais quando necessário, utilizando práticas de comparação entre diferentes serviços e opções plug-and-play. Além disso, incorporou-se uma CDN para otimizar a latência, acelerando a entrega de páginas web e aprimorando a experiência do usuário em cenários de alta demanda.
                  </div>
                </Tab>
                <Tab eventKey="functional-complexities" title="Estratégias de Cache">
                  <ul className="no-bullets">
                    <li>
                      <em>Objetivo:</em> Otimizar o desempenho da aplicação reduzindo a carga nos servidores e acelerando o tempo de resposta.
                    </li>
                    <li><em>Recomendações:</em></li>
                    <ul className="no-bullets">
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Análise de Requisitos"
                            checked={scalability['Análise de Requisitos'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Análise de Requisitos: Realizar uma análise aprofundada dos requisitos funcionais da aplicação, identificando possíveis complexidades.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Cache de Conteúdo Estático"
                            checked={scalability['Cache de Conteúdo Estático'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Cache de Conteúdo Estático: Implementar cache para conteúdo estático, como imagens, folhas de estilo e scripts, reduzindo a latência de carregamento.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Cache de Dados Dinâmicos"
                            checked={scalability['Cache de Dados Dinâmicos'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Cache de Dados Dinâmicos: Utilizar estratégias de cache para dados dinâmicos, minimizando consultas frequentes ao servidor.
                        </label>
                      </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Invalidação de Cache Eficiente"
                            checked={scalability['Invalidação de Cache Eficiente'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Invalidação de Cache Eficiente: Implementar métodos eficazes de invalidação de cache para garantir que os usuários recebam informações atualizadas.
                        </label>
                        </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Cache de Respostas"
                            checked={scalability['Cache de Respostas'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Cache de Respostas: Implementar caches para armazenar temporariamente as respostas de micro-frontends, utilizando soluções como Redis, armazenando temporariamente as respostas de micro-serviços para aumentar o throughput.
                        </label>
                        </li>
                      <li>
                        <label className='ml-2'>
                          <input className='input-label'
                            type="checkbox"
                            name="Armazenamento de DOM em Cache"
                            checked={scalability['Armazenamento de DOM em Cache'] || false}
                            onChange={handleCheckboxChange}
                          />
                          Armazenamento de DOM em Cache: Armazenar o DOM completo de micro-frontends em caches in-memory para evitar composição a cada requisição.
                        </label>
                      </li>
                    </ul>
                  </ul>
                  <div>
                    <div className="blue-box">
                      <strong>Exemplo Prático:</strong> Em uma aplicação web, introduziu-se caches para conteúdo estático (imagens e estilos), dados dinâmicos e respostas de micro-frontends e micro-serviços, utilizando soluções como Redis. Essas abordagens reduzem a latência de carregamento, minimizam consultas frequentes aos servidores e aumentam o throughput. Além disso, adotou-se métodos de invalidação de cache para garantir informações atualizadas e armazenou-se o DOM de micro-frontends em caches in-memory, evitando composição excessiva a cada requisição.
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

export default Scalability;
