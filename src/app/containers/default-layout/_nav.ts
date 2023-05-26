import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },

  {
    name: 'Components',
    title: true
  },
  {
    name: 'Market Service',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'List Markets',
        url: '/base/list-group'
      },
      {
        name: 'Add market',
        url: '/register'
      }
    ]
  },
  {
    name: 'Product service',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'List Product',
        url: '/base/cards'
      },
      {
        name: 'Create product',
        url: '/base/carousel'
      },

    ]
  },

  {
    title: true,
    name: 'Extras'
  },

];
