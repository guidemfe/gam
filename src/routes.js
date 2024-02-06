import React from 'react'

// Microfrontend
const IntroducaoMicrofrontend = React.lazy(() => import('./views/microfrontend/IntroducaoMicrofrontend'))
const IntroducaoGam = React.lazy(() => import('./views/gam/IntroducaoGam'))
const ViabilidadesTecnicasGam = React.lazy(() => import('./views/gam/viabilidades/ViabilidadesTecnicasGam'))
const ViabilidadesGerenciaisGam = React.lazy(() => import('./views/gam/viabilidades/ViabilidadesGerenciaisGam'))
const ImplementacaoIntegracaoGam = React.lazy(() => import('./views/gam/implementacao/ImplIntegracaoGam'))
const ImplementacaoOperacionalGam = React.lazy(() => import('./views/gam/implementacao/ImplOperacionalGam'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/microfrontend', name: 'Micro-frontend', element: IntroducaoMicrofrontend },
  { path: '/gam/introducao', name: 'GAM - Introdução', element: IntroducaoGam },
  { path: '/gam/viabilidades-tecnicas', name: 'Viabilidades Técnicas', element: ViabilidadesTecnicasGam },
  { path: '/gam/viabilidades-gerenciais', name: 'Viabilidades Gerenciais', element: ViabilidadesGerenciaisGam },
  { path: '/gam/inplementacao-operacional', name: 'Implementações Operacionais', element: ImplementacaoOperacionalGam},
  { path: '/gam/inplementacao-integração', name: 'Implementações de Integração', element: ImplementacaoIntegracaoGam },
]

export default routes
