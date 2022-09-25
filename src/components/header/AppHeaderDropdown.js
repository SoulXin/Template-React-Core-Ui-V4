import React from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilAccountLogout,
  cilSettings,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { connect } from 'react-redux';
import avatar8 from './../../assets/images/avatars/8.jpg'
import { set_login_action } from '../../redux/utils/Action';

const AppHeaderDropdown = (props) => {

  const handleLogout = () => {
    localStorage.removeItem('token');
    props.set_login_action(false);
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
        
        <CDropdownDivider />
        <CDropdownItem onClick={handleLogout}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    set_login_action: (data) => dispatch(set_login_action(data)),
  }
}

export default connect(null, mapDispatchToProps)(AppHeaderDropdown);