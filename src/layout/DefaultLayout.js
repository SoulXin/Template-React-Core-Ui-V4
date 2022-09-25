import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import PrivateRoutes from '../utils/Route/PrivateRoutes';

const DefaultLayout = () => {
  return (
    <PrivateRoutes>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </PrivateRoutes>
  )
}

export default DefaultLayout