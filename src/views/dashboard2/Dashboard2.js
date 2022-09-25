import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCol,
  CRow,
} from '@coreui/react'

const Dashboard2 = () => {
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Dashboard 2</CCardHeader>
            <CCardBody>
               <CCardText>Hello World 2</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard2