import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux';

const PrivateRoutes = ({children, login}) => { 
    return(
        login ? children : <Navigate to="/login"/>
    )
}

const mapStateToProps = state => {
    return {
      login: state.utils.login,
    }
}
  
export default connect(mapStateToProps, null)(PrivateRoutes);
