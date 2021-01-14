import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authAction'

const SignedInLinks=(props)=>{
       return (
         <ul className="right">
         <li><NavLink to="/create">New Project</NavLink></li>
         <li><a onClick={props.signOut}>Log-out</a></li>
         <li><NavLink to="/" className="btn btn-floating green lighten-6 text-darken-3">{props.profile.initials}</NavLink></li>
         </ul>
         );
}

const mapDispatchToProps=(dispatch)=>{
  return{
    signOut:()=>{ dispatch(signOut())}
  }
}

export default connect(null,mapDispatchToProps)(SignedInLinks);
