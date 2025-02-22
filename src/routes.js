import React from 'react'

// Microfrontend
const IntroducaoMicrofrontend = React.lazy(() => import('./views/microfrontend/IntroducaoMicrofrontend'))
const IntroductionGam = React.lazy(() => import('./views/gam/IntroductionGam'))

const IntroViabilidadesGam = React.lazy(() => import('./views/gam/viabilities/IntroductionViabilities'))
const ViabilidadesTecnicas = React.lazy(() => import('./views/gam/viabilities/TechnicalViabilities'))
const ViabilidadesGerenciais = React.lazy(() => import('./views/gam/viabilities/ManagerialViabilities'))

const IntroductionImplementation = React.lazy(() => import('./views/gam/implementation/IntroductionImplementation'))
const IntegrationDecisions = React.lazy(() => import('./views/gam/implementation/IntegrationDecisions'))
const OperacionalDecisions = React.lazy(() => import('./views/gam/implementation/OperationalDecisions'))

const IntroductionExpansion = React.lazy(() => import('./views/gam/expansion/IntroductionExpansion'))
const Scalability = React.lazy(() => import('./views/gam/expansion/Scalability'))
const Maintainability = React.lazy(() => import('./views/gam/expansion/Maintainability'))

const PilotProject = React.lazy(() => import('./views/gam/pilot-project/PilotProject'))
const AboutAutors = React.lazy(() => import('./views/gam/AboutAutors'))

const routes = [
  { path: '/', exact: true, name: 'Home', element: IntroductionGam },
  { path: '/microfrontend', name: 'Micro-frontend', element: IntroducaoMicrofrontend },
  { path: '/gam/introduction', name: 'GAM - Introduction', element: IntroductionGam },
  
  { path: '/gam/viability', name: 'Viability Study', element: IntroViabilidadesGam },
  { path: '/gam/viability/technical-viability', name: 'Technical Viability', element: ViabilidadesTecnicas },
  { path: '/gam/viability/managerial-viability', name: 'Managerial Viability', element: ViabilidadesGerenciais },

  { path: '/gam/implementation', name: 'Implementation', element: IntroductionImplementation},
  { path: '/gam/implementation/integration-decisions', name: 'Integration Decisions', element: IntegrationDecisions},
  { path: '/gam/implementation/operational-decisions', name: 'Operational Decisions', element: OperacionalDecisions },

  { path: '/gam/expansion', name: 'Expansion', element: IntroductionExpansion},
  { path: '/gam/expansion/scalability', name: 'Scalability', element: Scalability},
  { path: '/gam/expansion/maintainability', name: 'Maintainability', element: Maintainability },

  { path: '/pilot-project', name: 'Pilot Project', element: PilotProject },
  { path: '/about-autors', name: 'About Autors', element: AboutAutors },
]

export default routes
