import { cilDescription, cilPuzzle, cilSpeedometer } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CNavGroup, CNavItem, CNavTitle, CBadge } from '@coreui/react';
import React from 'react';
import BadgeForViabilidadesTecnicas from './views/gam/viabilities/BadgeForViabilidadesTecnicas'; // Importe o componente BadgeForViabilidadesTecnicas

const _nav = [
  {
    component: CNavItem,
    name: 'Introduction',
    to: '/gam/introduction',
  },
  {
    component: CNavItem,
    name: 'Micro-Frontend',
    to: '/microfrontend',
  },
  {
    component: CNavTitle,
    name: 'Get Start',
  },
  {
    component: CNavGroup,
    name: (
      <>
        Viability Study 
      </>
    ),
    to: '#',
    items: [
      {
        component: CNavItem,
        name: 'Introduction',
        to: '/gam/viability',
      },
      {
        component: CNavItem,
        name: 'Technical Viability',
        to: '/gam/viability/technical-viability',
      },
      {
        component: CNavItem,
        name: 'Managerial Viability',
        to: '/gam/viability/managerial-viability',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Implementation',
    to: '#',
    items: [
      {
        component: CNavItem,
        name: 'Introduction',
        to: '/gam/implementation',
      },
      {
        component: CNavItem,
        name: 'Integration Decisions',
        to: '/gam/implementation/integration-decisions',
      },
      {
        component: CNavItem,
        name: 'Operational Decisions',
        to: '/gam/implementation/operational-decisions',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Expansion',
    to: '#',
    items: [
      {
        component: CNavItem,
        name: 'Introduction',
        to: '/gam/expansion',
      },
      {
        component: CNavItem,
        name: 'Scalability',
        to: '/gam/expansion/scalability',
      },
      {
        component: CNavItem,
        name: 'Maintainability',
        to: '/gam/expansion/maintainability',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Pilot Project',
    to: '/pilot-project',
  },
];

export default _nav;
