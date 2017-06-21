import NewUserFormContainer from './new_user_form_container';
import SessionFormContainer from './session_form_container';
import { withRouter } from 'react-router-dom';
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
         <nav className="header-group"/>
         <div className="auth-container">
           {form}
         </div>
       </section>
     )
   }
export default withRouter(AuthRender);
