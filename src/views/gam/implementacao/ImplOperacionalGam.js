import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react';
import React from 'react';

import '../../../scss/_custom.scss';

const ImplementacaoOperacionalGam = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>GAM</strong>
          </CCardHeader>
          <CCardBody>
          <section>
                <h3>Implementação - Operação</h3>
                <p>
                No contexto da implementação da arquitetura Micro-Frontends, diversas viabilidades gerenciais 
                se tornam cruciais para o sucesso do projeto. Este documento aborda questões estratégicas, 
                financeiras e de gestão de mudanças que as organizações devem considerar ao adotar essa abordagem arquitetônica. 
                As viabilidades gerenciais apresentadas incluem o alinhamento aos objetivos estratégicos, 
                a avaliação de custos e orçamento, e a gestão de mudanças e treinamentos. 
                Cada tópico destaca recomendações práticas e exemplos, 
                proporcionando insights valiosos para líderes e equipes envolvidas na transição para a arquitetura de Micro-Frontends.
                </p>
                <h5>Alinhamento aos Objetivos Estratégicos</h5>
                    <ul>
                        <li><strong>Objetivo:</strong> Assegurar que a implementação da arquitetura Micro-frontend esteja alinhada aos objetivos estratégicos da organização.</li>
                        <li><strong>Recomendações:</strong></li>
                        <ul>
                        <li>Análise de Impacto na Gestão: Realizar uma análise do impacto da introdução de micro-frontends de forma progressiva nos objetivos estratégicos da gestão. Avaliar a viabilidade de alinhamento gradual, sem forçar uma transição imediata.</li>
                        <li>Mapeamento de Benefícios: Identificar os benefícios potenciais da adoção gradual de micro-frontends para os objetivos estratégicos da empresa, priorizando a harmonização com as metas existentes.</li>
                        <li>Ajustes de Metas Estratégicas: Analisar a necessidade de ajustar ou realinhar as metas estratégicas para otimizar a adoção do micro-frontends, assegurando que estejam alinhadas com a visão a longo prazo da organização.</li>
                        </ul>
                        <div className="blue-box-2">
                            <strong>Exemplo Prático:</strong> 
                            Para alinhar a adoção da arquitetura de micro-frontends aos objetivos estratégicos, 
                            a gestão deve identificar metas específicas, envolver stakeholders, estabelecer indicadores-chave de desempenho 
                            (KPIs) mensuráveis, implementar metodologias ágeis, realizar avaliações contínuas com feedback dos usuários finais, 
                            ajustar estratégias conforme necessário e manter uma comunicação transparente sobre o progresso e desafios.
                        </div>
                    </ul>

                    <h5>Custos e Orçamento</h5>
                    <ul>
                        <li><strong>Objetivo:</strong> Avaliar os impactos financeiros relacionados à adoção da arquitetura de micro-frontends no contexto do GAM, identificando custos associados e garantindo uma gestão orçamentária eficaz.</li>
                        <li><strong>Recomendações:</strong></li>
                        <ul>
                        <li>Levantamento Detalhado de Custos: Realizar um levantamento dos custos associados à implementação de micro-frontends. Incluir despesas relacionadas ao treinamento da equipe, possíveis atualizações de infraestrutura e aquisição de ferramentas específicas.</li>
                        <li>Orçamento Flexível: Estabelecer um orçamento flexível que permita adaptações conforme a evolução do projeto de adoção de micro-frontends. Incorporar uma margem para imprevistos e ajustes durante as fases iniciais da implementação.</li>
                        <li>Avaliação de Retorno sobre Investimento (ROI): Desenvolver métricas para avaliação do retorno sobre o investimento. Monitorar indicadores-chave para garantir que os benefícios esperados estejam alinhados aos recursos financeiros empregados.</li>
                        </ul>
                        <div className="blue-box-2">
                            <strong>Exemplo Prático:</strong> 
                            Ao adotar a arquitetura de micro-frontends, a empresa XYZ precisa avaliar os custos associados à transição. 
                            Isso inclui despesas com a capacitação da equipe, aquisição de ferramentas específicas para o desenvolvimento 
                            e manutenção da nova arquitetura, e possíveis custos de licenciamento de plataformas. Recomenda-se a realização 
                            de uma análise minuciosa para estimar esses custos, permitindo a alocação adequada de recursos no orçamento. 
                            Além disso, a criação de cenários alternativos, como a continuidade da estrutura atual ou a avaliação de outras 
                            arquiteturas, proporciona uma visão abrangente das opções disponíveis, contribuindo para uma decisão estratégica e financeiramente sólida.
                        </div>
                    </ul>

                    <h5>Gestão de Mudanças e Treinamentos</h5>
                    <ul>
                        <li><strong>Objetivo:</strong> Avaliar a capacidade da organização em lidar com as mudanças que a adoção da arquitetura de Micro-Frontends pode trazer. Busca-se identificar os impactos nos processos, na cultura organizacional e na estrutura de equipe, além de preparar a equipe para a transição.</li>
                        <li><strong>Recomendações:</strong></li>
                        <ul>
                        <li>Comunicação Efetiva: Estabelecer um plano de comunicação claro e aberto para informar os membros da equipe sobre as mudanças planejadas. Comunique os benefícios da nova arquitetura, destacando como ela contribuirá para os objetivos estratégicos da empresa.</li>
                        <li>Treinamento Personalizado: Desenvolva programas de treinamento específicos para as equipes que lidarão diretamente com os Micro-Frontends. Certifique-se de que os membros da equipe tenham as habilidades necessárias para trabalhar eficientemente com a nova arquitetura.</li>
                        <li>Definir Marcos e Métricas: Estabelecer marcos claros e métricas mensuráveis para avaliar o progresso durante a transição. Definir indicadores de sucesso ajudará a monitorar a eficácia das estratégias de gerenciamento de mudanças e identificar áreas que precisam de ajustes.</li>
                        </ul>
                        <div className="blue-box-2">
                            <strong>Exemplo Prático:</strong> 
                                Uma empresa que deseja adotar a arquitetura de Micro-Frontends, precisa avaliar a capacidade organizacional 
                                de lidar com as mudanças decorrentes dessa transição. Para garantir uma transição suave, a empresa 
                                adota práticas como comunicação efetiva, realizando reuniões regulares para destacar os benefícios 
                                da nova arquitetura, além de oferecer treinamento personalizado para as equipes envolvidas. 
                                Paralelamente, são estabelecidos marcos claros e métricas mensuráveis para monitorar o progresso, 
                                proporcionando uma avaliação contínua e a capacidade de ajustar estratégias de gerenciamento de mudanças 
                                conforme necessário. Essas medidas visam preparar a equipe e a estrutura organizacional 
                                para as transformações advindas da adoção de Micro-Frontend.
                        </div>
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
