import React from 'react'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from '../assets/brand/logo-negative'
import { sygnet } from '../assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { connect } from 'react-redux';
import { set_sidebar_show_action, set_sidebar_unfoldable } from '../redux/utils/Action';

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = (props) => {
  const unfoldable = props.sidebarUnfoldable;
  const sidebarShow = props.sidebarShow;

  return (
<CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => props.set_sidebar_show_action(visible)}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => props.set_sidebar_unfoldable(!unfoldable)}
      />
    </CSidebar>
  )
}

const mapStateToProps = state => {
  return {
    sidebarShow: state.utils.sidebarShow,
    sidebarUnfoldable: state.utils.sidebarUnfoldable,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    set_sidebar_show_action: (data) => dispatch(set_sidebar_show_action(data)),
    set_sidebar_unfoldable: (data) => dispatch(set_sidebar_unfoldable(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( React.memo(AppSidebar));
