import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react';
import React from 'react';

import '../../../scss/_custom.scss';

const ViabilidadesTecnicasGam = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
          <section>
                <h4>Viabilidades Técnicas</h4>
                <hr />
                <p>
                O Estudo de Viabilidade, no contexto das diretrizes para adoção de Micro-Frontends (GAM), 
                é uma fase estratégica e sequencial que busca analisar as viabilidades gerenciais e técnicas 
                antes de decidir pela implementação da arquitetura de Micro-Frontends. 
                Essa abordagem visa garantir uma transição suave e bem-sucedida para essa arquitetura inovadora. A imagem abaixo demostra o fluxo
                </p>

                <ul>
                    <li>
                        <strong>Compatibilidade Tecnológica:</strong>
                        <ul>
                            <li><em>Objetivo:</em> Garantir que a arquitetura de Micro-Frontends seja compatível com as tecnologias existentes na
                                infraestrutura da empresa, minimizando conflitos e promovendo uma transição suave.</li>
                            <li><em>Recomendações:</em></li>
                            <ul>
                                <li>Avaliação da Infraestrutura Atual: Realizar uma análise detalhada da infraestrutura tecnológica existente,
                                    identificando as tecnologias, frameworks e bibliotecas em uso.</li>
                                <li>Identificação de Conflitos Potenciais: Identificar possíveis conflitos entre as tecnologias utilizadas
                                    atualmente e aquelas associadas à arquitetura de Micro-Frontends.</li>
                                <li>Padronização de Tecnologias: Considerar a padronização de tecnologias que são comuns tanto na infraestrutura
                                    atual quanto na arquitetura de Micro-Frontends para facilitar a integração.</li>
                                <li>Testes de Compatibilidade: Implementar testes específicos usando o projeto piloto para verificar a
                                    compatibilidade entre os componentes de Micro-Frontends e a infraestrutura existente.</li>
                            </ul>
                        </ul>
                    </li>

                    <div className="blue-box">
                      <strong>Exemplo Prático:</strong> Suponha que a empresa utilize o Angular como framework principal em seus sistemas
                      existentes. Ao iniciar a adoção de Micro-Frontends, a equipe de análise de compatibilidade avalia a versão
                      específica do Angular em uso e confirma sua compatibilidade com os requisitos do Micro-Frontend. Além disso, ao
                      identificar a necessidade de uma biblioteca de gerenciamento de estado, a equipe opta por padronizar o uso do
                      Redux, que é amplamente aceito tanto na infraestrutura atual quanto na arquitetura de Micro-Frontends. Durante
                      o projeto piloto, são conduzidos testes específicos para verificar a interoperabilidade entre os Micro-Frontends
                      e os serviços legados, garantindo uma transição suave e minimizando conflitos.
                    </div>
        
                    <li>
                        <strong>Desafios de Integração:</strong>
                        <ul>
                            <li><em>Objetivo:</em> Identificar e abordar proativamente os desafios de integração que possam surgir durante a
                                adoção da arquitetura de Micro-Frontends.</li>
                            <li><em>Recomendações:</em></li>
                            <ul>
                                <li>Mapeamento de Interfaces: Realizar um mapeamento claro das interfaces entre os Micro-Frontends e outros
                                    componentes do sistema.</li>
                                <li>Definição de Contratos: Estabelecer contratos claros e documentados entre os Micro-Frontends e os serviços
                                    backend, garantindo consistência nas interações.</li>
                                <li>Monitoramento Contínuo: Implemente mecanismos de monitoramento contínuo para identificar e resolver
                                    rapidamente problemas de integração.</li>
                            </ul>
                        </ul>
                        <div className="blue-box">
                          <strong>Exemplo Prático:</strong> Durante a implementação de Micro-Frontends, um desafio de integração foi identificado
                                na comunicação entre um Micro-Frontend específico e um serviço backend essencial. Utilizando o mapeamento de
                                interfaces previamente documentado, a equipe consegue rapidamente diagnosticar o problema e atualizar o contrato
                                de API. O monitoramento contínuo alerta a equipe sobre a anomalia, permitindo uma intervenção rápida e
                                minimizando o impacto nos usuários finais.
                        </div>
                    </li>
        
                    <li>
                        <strong>Complexidades Funcionais:</strong>
                        <ul>
                            <li><em>Objetivo:</em> Entender e mitigar as complexidades funcionais associadas à arquitetura de Micro-Frontends,
                                garantindo a entrega de funcionalidades de forma eficiente.</li>
                            <li><em>Recomendações:</em></li>
                            <ul>
                                <li>Análise de Requisitos: Realizar uma análise aprofundada dos requisitos funcionais da aplicação,
                                    identificando possíveis complexidades.</li>
                                <li>Design Modular: Adote um design modular para os Micro-Frontends, dividindo a aplicação em componentes
                                    independentes para facilitar o gerenciamento das complexidades.</li>
                                <li>Testes Unitários e de Integração: Implementar testes unitários e de integração para validar a funcionalidade
                                    dos Micro-Frontends individualmente e em conjunto.</li>
                                <li>Documentação Clara: Mantenha uma documentação clara e abrangente que descreva as interações funcionais
                                    entre os Micro-Frontends e outros componentes.</li>
                            </ul>
                            
                        </ul>
                        
                    </li>
                    <div className="blue-box">
                      <strong>Exemplo Prático:</strong> Durante a análise de requisitos foi identificado um requisito funcional complexo
                      relacionado à gestão de permissões de usuários em diferentes Micro-Frontends. Ao adotar um design modular, a
                      equipe decide criar um Micro-Frontend dedicado exclusivamente à gestão de permissões. Testes unitários e de
                      integração são implementados para garantir que essa funcionalidade se integre sem problemas aos demais
                      Micro-Frontends. A documentação clara detalha os fluxos de interação, simplificando a compreensão da
                      complexidade funcional pela equipe.
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

export default ViabilidadesTecnicasGam
