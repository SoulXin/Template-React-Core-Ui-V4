import { Navigate, Outlet } from 'react-router-dom'
import { connect } from 'react-redux';

const PublicRoutes = ({ login }) => { 
    return(
        login ? <Navigate to="/"/> : <Outlet/>
    )
}

const mapStateToProps = state => {
    return {
      login: state.utils.login,
    }
}
  
export default connect(mapStateToProps, null)(PublicRoutes);