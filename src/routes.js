import React from 'react'

// Microfrontend
const IntroducaoMicrofrontend = React.lazy(() => import('./views/microfrontend/IntroducaoMicrofrontend'))
const IntroducaoGam = React.lazy(() => import('./views/gam/IntroducaoGam'))

const IntroViabilidadesGam = React.lazy(() => import('./views/gam/viabilidades/IntroViabilidadeGam'))
const ViabilidadesTecnicasGam = React.lazy(() => import('./views/gam/viabilidades/ViabilidadesTecnicasGam'))
const ViabilidadesGerenciaisGam = React.lazy(() => import('./views/gam/viabilidades/ViabilidadesGerenciaisGam'))

const IntroImplemantacaoGam = React.lazy(() => import('./views/gam/implementacao/IntroImplementacaoGam'))
const ImplementacaoIntegracaoGam = React.lazy(() => import('./views/gam/implementacao/ImplIntegracaoGam'))
const ImplementacaoOperacionalGam = React.lazy(() => import('./views/gam/implementacao/ImplOperacionalGam'))

const IntroExpansaoGam = React.lazy(() => import('./views/gam/expansao/IntroExpansaoGam'))
const ExpansaoEscalabilidadeGam = React.lazy(() => import('./views/gam/expansao/ExpansaoEscalabilidadeGam'))
const ExpansaoManutenibilidadeGam = React.lazy(() => import('./views/gam/expansao/ExpansaoManutenibilidadeGam'))

const ProjetoPilotoGam = React.lazy(() => import('./views/gam/projeto-piloto/ProjetoPilotoGam'))

const routes = [
  { path: '/', exact: true, name: 'Home', element: IntroducaoGam },
  { path: '/microfrontend', name: 'Micro-frontend', element: IntroducaoMicrofrontend },
  { path: '/gam/introducao', name: 'GAM - Introdução', element: IntroducaoGam },
  
  { path: '/gam/introducao-viabilidades', name: 'Estudos da Viabilidade', element: IntroViabilidadesGam },
  { path: '/gam/viabilidades-tecnicas', name: 'Viabilidades Técnicas', element: ViabilidadesTecnicasGam },
  { path: '/gam/viabilidades-gerenciais', name: 'Viabilidades Gerenciais', element: ViabilidadesGerenciaisGam },

  { path: '/gam/introducao-implementacao', name: 'Implementação', element: IntroImplemantacaoGam},
  { path: '/gam/inplementacao-operacional', name: 'Implementações Operacionais', element: ImplementacaoOperacionalGam},
  { path: '/gam/inplementacao-integração', name: 'Implementações de Integração', element: ImplementacaoIntegracaoGam },

  { path: '/gam/introducao-expansao', name: 'Expansão', element: IntroExpansaoGam},
  { path: '/gam/expansao-escalabilidade', name: 'Escalabilidade', element: ExpansaoEscalabilidadeGam},
  { path: '/gam/expansao-manutenibilidade', name: 'Manutenibilidade', element: ExpansaoManutenibilidadeGam },

  { path: '/projeto-piloto', name: 'Projeto Piloto', element: ProjetoPilotoGam },
]

export default routes
