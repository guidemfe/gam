import { cilDescription, cilPuzzle, cilSpeedometer } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CNavGroup, CNavItem, CNavTitle, CBadge } from '@coreui/react';
import React from 'react';
import BadgeForViabilidadesTecnicas from './views/gam/viabilities/BadgeForViabilidadesTecnicas'; // Importe o componente BadgeForViabilidadesTecnicas

const _nav = [
  {
    component: CNavItem,
    name: 'Introdução',
    to: '/gam/introducao',
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
        Estudo da Viabilidade 
      </>
    ),
    to: '#',
    items: [
      {
        component: CNavItem,
        name: 'Introdução',
        to: '/gam/introducao-viabilidades',
      },
      {
        component: CNavItem,
        name: 'Viabilidades Técnicas',
        to: '/gam/viabilidades-tecnicas',
      },
      {
        component: CNavItem,
        name: 'Viabilidades Gerenciais',
        to: '/gam/viabilidades-gerenciais',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Implementação',
    to: '#',
    items: [
      {
        component: CNavItem,
        name: 'Introdução',
        to: '/gam/introducao-implementacao',
      },
      {
        component: CNavItem,
        name: 'Integração',
        to: '/gam/inplementacao-integração',
      },
      {
        component: CNavItem,
        name: 'Operacional',
        to: '/gam/inplementacao-operacional',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Expansão',
    to: '/microfrontend',
    items: [
      {
        component: CNavItem,
        name: 'Introdução',
        to: '/gam/introducao-expansao',
      },
      {
        component: CNavItem,
        name: 'Escalabilidade',
        to: '/gam/expansao-escalabilidade',
      },
      {
        component: CNavItem,
        name: 'Manutenibilidade',
        to: '/gam/expansao-manutenibilidade',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Projeto Piloto',
    to: '/projeto-piloto',
  },
];

export default _nav;
