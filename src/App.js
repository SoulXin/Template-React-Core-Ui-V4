import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import { connect } from 'react-redux';
import { set_login_action } from '../src/redux/utils/Action';
import PublicRoutes from './utils/PublicRoutes';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = (props) => {
  useEffect(() => {
    if(localStorage.getItem('token')){
      props.set_login_action(true);
    }else {
      props.set_login_action(false);
    }
  }, []);
  
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route element={<PublicRoutes/>}>
              <Route exact path="/login" name="Login Page" element={<Login />} />
              <Route exact path="/register" name="Register Page" element={<Register />} />
            </Route>
            
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout />  } />
          </Routes>
        </Suspense>
      </HashRouter>
    )
}


const mapStateToProps = state => {
  return {
    login: state.utils.login,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    set_login_action: (data) => dispatch(set_login_action(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
