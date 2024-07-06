import React from 'react'

// Microfrontend
const IntroducaoMicrofrontend = React.lazy(() => import('./views/microfrontend/IntroducaoMicrofrontend'))
const IntroducaoGam = React.lazy(() => import('./views/gam/IntroducaoGam'))

const IntroViabilidadesGam = React.lazy(() => import('./views/gam/viabilities/IntroductionViabilities'))
const ViabilidadesTecnicas = React.lazy(() => import('./views/gam/viabilities/TechnicalViabilities'))
const ViabilidadesGerenciais = React.lazy(() => import('./views/gam/viabilities/ManagerialViabilities'))

const IntroImplemantacaoGam = React.lazy(() => import('./views/gam/implementation/IntroductionImplementation'))
const ImplementacaoIntegracaoGam = React.lazy(() => import('./views/gam/implementation/IntegrationImplementation'))
const ImplementacaoOperacional = React.lazy(() => import('./views/gam/implementation/OperationalImplementation'))

const IntroductionExpansion = React.lazy(() => import('./views/gam/expansion/IntroductionExpansion'))
const Scalability = React.lazy(() => import('./views/gam/expansion/Scalability'))
const Maintainability = React.lazy(() => import('./views/gam/expansion/Maintainability'))

const PilotProject = React.lazy(() => import('./views/gam/pilot-project/PilotProject'))

const routes = [
  { path: '/', exact: true, name: 'Home', element: IntroducaoGam },
  { path: '/microfrontend', name: 'Micro-frontend', element: IntroducaoMicrofrontend },
  { path: '/gam/introducao', name: 'GAM - Introdução', element: IntroducaoGam },
  
  { path: '/gam/introducao-viabilidades', name: 'Estudos da Viabilidade', element: IntroViabilidadesGam },
  { path: '/gam/viabilidades-tecnicas', name: 'Viabilidades Técnicas', element: ViabilidadesTecnicas },
  { path: '/gam/viabilidades-gerenciais', name: 'Viabilidades Gerenciais', element: ViabilidadesGerenciais },

  { path: '/gam/introducao-implementacao', name: 'Implementação', element: IntroImplemantacaoGam},
  { path: '/gam/inplementacao-operacional', name: 'Implementações Operacionais', element: ImplementacaoOperacional},
  { path: '/gam/inplementacao-integração', name: 'Implementações de Integração', element: ImplementacaoIntegracaoGam },

  { path: '/gam/introducao-expansao', name: 'Expansão', element: IntroductionExpansion},
  { path: '/gam/expansao-escalabilidade', name: 'Escalabilidade', element: Scalability},
  { path: '/gam/expansao-manutenibilidade', name: 'Manutenibilidade', element: Maintainability },

  { path: '/projeto-piloto', name: 'Projeto Piloto', element: PilotProject },
]

export default routes
