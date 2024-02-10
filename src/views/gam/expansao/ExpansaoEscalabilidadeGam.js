import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react';
import React from 'react';

import '../../../scss/_custom.scss';

const ExpansaoEscalabilidadeGam = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>GAM</strong>
          </CCardHeader>
          <CCardBody>
          <section>
                <h3>Escalabilidade</h3>
                <p>Esta etapa visa capacitar a aplicação a crescer de maneira eficiente e adaptar-se às demandas variáveis do ambiente. As principais áreas de foco são a adição de novos micro-frontends, o gerenciamento de carga e as estratégias de cache.</p>

<h3>Adição de Novos Micro-Frontends:</h3>
<ul>
  <li><strong>Objetivo:</strong> Facilitar a incorporação de novos micro-frontends ao sistema existente.</li>
  <li><strong>Recomendações:</strong>
    <ul>
      <li>Modularização Dinâmica: Desenvolver arquitetura modular que suporte a adição dinâmica de novos micro-frontends sem impactar os existentes.</li>
      <li>Balanceamento de Carga: Implementar sistema de balanceamento de carga automático como serviços de orquestração, usando ferramentas como Kubernetes, para facilitar o dimensionamento automático com base nas métricas de tráfego.</li>
      <li>Gestão de Cache: Adote estratégias de cache, como Redis, para armazenar temporariamente as respostas de micro-serviços, melhorando o throughput da composição de micro-frontends. Explore o armazenamento de DOM de micro-frontends em caches in-memory para reduzir a necessidade de recomposição a cada requisição.</li>
    </ul>
  </li>
</ul>
  <div className="blue-box"> <strong>Exemplo Prático:</strong> 
  Em um cenário de comércio eletrônico baseado em micro-frontends, um novo micro-frontend chamado 
  &quot;Recomendações Personalizadas&quot; foi adicionado. Implementa-se um sistema de balanceamento de carga automático com Kubernetes para escalabilidade dinâmica com base no tráfego. Para aprimorar o desempenho, utiliza-se estratégias de cache, incluindo Redis, para armazenar temporariamente respostas de micro-serviços e o DOM de micro-frontends em caches in-memory, reduzindo a necessidade de recomposição a cada requisição.</div>

<h3>Gerenciamento de Carga:</h3>
<ul>
  <li><strong>Objetivo:</strong> Garantir a eficiência operacional e o desempenho otimizado da aplicação, mesmo diante de demandas crescentes.</li>
  <li><strong>Recomendações:</strong>
    <ul>
      <li>Autoescalabilidade na Nuvem: Utilize funcionalidades de autoescalabilidade oferecidas por provedores de nuvem para ajustar dinamicamente a infraestrutura com base nos padrões de tráfego. Escolha camadas de computação eficientes, como contêineres, para rápida execução, e considere opções gerenciadas, como serviços serverless, para simplificar a operacionalização da infraestrutura.</li>
      <li>Previsão de Carga e Ajuste Manual: Estabelecer uma infraestrutura de linha de base capaz de lidar com cargas previsíveis, como vendas da Black Friday, adotando práticas de comparação entre diferentes serviços e opções plug-and-play.</li>
      <li>Otimização de Latência com CDN: Utilizar uma CDN para aumentar a velocidade de entrega das páginas da web, reduzindo a latência entre o cliente e o conteúdo solicitado.</li>
    </ul>
  </li>
</ul>
<div className="blue-box"> <strong>Exemplo Prático:</strong> Para otimizar o desempenho da plataforma de comércio eletrônico, foi aproveitada a autoescalabilidade na nuvem, utilizando serviços serverless e contêineres para ajustar dinamicamente a infraestrutura com base em padrões de tráfego, garantindo rápida execução e eficiência operacional. Para lidar com picos previsíveis, como as vendas da &quot;Black Friday&quot;, estabeleceu-se uma infraestrutura de linha de base com ajustes manuais quando necessário, utilizando práticas de comparação entre diferentes serviços e opções plug-and-play. Além disso, incorporou-se uma CDN para otimizar a latência, acelerando a entrega de páginas web e aprimorando a experiência do usuário em cenários de alta demanda.</div>

<h3>Estratégias de Cache:</h3>
<ul>
  <li><strong>Objetivo:</strong> Otimizar o desempenho da aplicação reduzindo a carga nos servidores e acelerando o tempo de resposta.</li>
  <li><strong>Recomendações:</strong>
    <ul>
      <li>Cache de Conteúdo Estático: Implementar cache para conteúdo estático, como imagens, folhas de estilo e scripts, reduzindo a latência de carregamento.</li>
      <li>Cache de Dados Dinâmicos: Utilizar estratégias de cache para dados dinâmicos, minimizando consultas frequentes ao servidor.</li>
      <li>Invalidação de Cache Eficiente: Implementar métodos eficazes de invalidação de cache para garantir que os usuários recebam informações atualizadas.</li>
      <li>Cache de Respostas: Implementar caches para armazenar temporariamente as respostas de micro-frontends, utilizando soluções como Redis, armazenando temporariamente as respostas de micro-serviços para aumentar o throughput.</li>
      <li>Armazenamento de DOM em Cache: Armazenar o DOM completo de micro-frontends em caches in-memory para evitar composição a cada requisição.</li>
    </ul>
  </li>
</ul>
<div className="blue-box"> <strong>Exemplo Prático:</strong> Em uma aplicação web, introduziu-se caches para conteúdo estático (imagens e estilos), dados dinâmicos e respostas de micro-frontends e micro-serviços, utilizando soluções como Redis. Essas abordagens reduzem a latência de carregamento, minimizam consultas frequentes aos servidores e aumentam o throughput. Além disso, adotou-se métodos de invalidação de cache para garantir informações atualizadas e armazenou-se o DOM de micro-frontends em caches in-memory, evitando composição excessiva a cada requisição.</div>

                
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

export default ExpansaoEscalabilidadeGam
