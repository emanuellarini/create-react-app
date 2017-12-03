import AsyncLoad from 'components/AsyncLoad'

const Index = AsyncLoad(import(/* webpackChunkName: "index" */ 'screens/Index/index.js'))

export default [
  {
    path: '/',
    exact: true,
    component: Index,
    key: 'index.index'
  }, {
    component: Index,
    key: 'error.404'
  },
]
