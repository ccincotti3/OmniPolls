import NewUserFormContainer from './new_user_form_container';
import SessionFormContainer from './session_form_container';
import { withRouter, Link } from 'react-router-dom';
import React from 'react';
const AuthRender = (props) => {
    let form;

     if (props.location.pathname.slice(1) === 'login') {
      form = <SessionFormContainer />
     } else {
       form = <NewUserFormContainer />
     }
     return (
       <section>
         <nav className="header-group">
              <Link to="/"><span className= "logo">
                <i className="fa fa-line-chart">
                </i> OmniPolls</span></Link>
          </nav>
         <div className="auth-container">
           {form}
         </div>
         <div className='bottom-box'>
           <footer className = "footer-splash"></footer>
           <div className="leftover-box"></div>
         </div>
       </section>
     )
   }
export default withRouter(AuthRender);
