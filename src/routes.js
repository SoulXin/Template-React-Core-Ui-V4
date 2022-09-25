import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Dashboard2 = React.lazy(() => import('./views/dashboard2/Dashboard2'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/dashboard_2', name: 'Dashboard', element: Dashboard2 }
]

export default routes