import React from 'react'
import {
  CContainer,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'

import { AppHeaderDropdown } from './header/index'
import { connect } from 'react-redux';
import { set_sidebar_show_action } from '../redux/utils/Action';

const AppHeader = (props) => {
  const sidebarShow = props.sidebarShow;

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler  
          className="ps-1"
          onClick={() => props.set_sidebar_show_action(!sidebarShow)}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
       
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

const mapStateToProps = state => {
  return {
    sidebarShow: state.utils.sidebarShow
  }
}

const mapDispatchToProps = dispatch => {
  return {
    set_sidebar_show_action: (data) => dispatch(set_sidebar_show_action(data)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);