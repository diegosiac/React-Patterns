import { lazy, LazyExoticComponent } from 'react'
import { NoLazy } from '../01-lazyload/pages/NoLazy'
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'

type JSXComponent = () => JSX.Element

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

// Se puede cambiar el nombre de los chuck / revisar documentacion

const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    Component: LazyLayout,
    name: 'Lazy Layout'
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy'
  }
]
