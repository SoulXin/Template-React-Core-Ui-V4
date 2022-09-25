import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCol,
  CRow,
} from '@coreui/react'

const Dashboard = () => {
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Dashboard</CCardHeader>
            <CCardBody>
               <CCardText>Hello World</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
