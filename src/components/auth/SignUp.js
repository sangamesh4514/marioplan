import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authAction'

class SignUp extends Component{
  state={
    email:'',
    password:'',
    firstName:'',
    lastName:''

  }
  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.signUp(this.state)

  }
  handleChange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  render(){
    const auth=this.props.auth
    if(auth.uid) return <Redirect to="/" />
    const authError=this.props.authError

    return(
      <div className="container">
      <form className="white" onSubmit={this.handleSubmit}>
      <h5 className="grey-text text-darken-3">Sign In</h5>
      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={this.handleChange}/>
      </div>
      <div className="input-field">
        <label htmlFor="password">password</label>
        <input type="password" id="password" onChange={this.handleChange}/>
      </div>
      <div className="input-field">
        <label htmlFor="firstName">Firstname</label>
        <input type="text" id="firstName" onChange={this.handleChange}/>
      </div>
      <div className="input-field">
        <label htmlFor="lastName">Lastname</label>
        <input type="text" id="lastName" onChange={this.handleChange}/>
      </div>
      <div className="input-field">
        <button className="btn green lighten-6 z-depth-0">login</button>
      </div>
      <div className="red-text center">
      {authError?<p>{authError}</p>:null}
      </div>
      </form>

      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    auth:state.firebase.auth,
    authError:state.auth.authError
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    signUp:(newUser)=>{ dispatch(signUp(newUser))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
