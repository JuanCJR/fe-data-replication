import { IconType } from 'react-icons'
import { BiChevronRight } from 'react-icons/bi'

enum PageScope {
  UNLOGGED = 'unlogged',
  LOGGED = 'loged'
}

interface SidebarOptionsListProps {
  name: string
  url: string
  icon: IconType
  scope: PageScope[]
}

export const SidebarOptionsList: SidebarOptionsListProps[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: BiChevronRight,
    scope: [PageScope.LOGGED]
  },
  {
    name: 'Configuración',
    url: '/configuration',
    icon: BiChevronRight,
    scope: [PageScope.LOGGED]
  },
  {
    name: 'Procesos',
    url: '/process',
    icon: BiChevronRight,
    scope: [PageScope.LOGGED]
  },
  {
    name: 'Data Groups',
    url: '/data-groups',
    icon: BiChevronRight,
    scope: [PageScope.LOGGED]
  },
  {
    name: 'Operación',
    url: '/operation',
    icon: BiChevronRight,
    scope: [PageScope.LOGGED]
  },
  {
    name: 'Seguridad',
    url: '/security',
    icon: BiChevronRight,
    scope: [PageScope.LOGGED]
  },
  {
    name: 'Consultas',
    url: '/querys',
    icon: BiChevronRight,
    scope: [PageScope.LOGGED]
  }
]
