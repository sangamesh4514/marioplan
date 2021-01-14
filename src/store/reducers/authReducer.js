const init={
  authError:null
}

 const authReducer=(state=init,action)=>{

   switch(action.type){
     case "LOGIN_ERROR":
        console.log("login error")
        return{
          ...state,
          authError:"login failed"
        }
     case "LOGIN_SUCCESS":
        console.log("login success")
        return{
          ...state,
          authError:null
        }
      case "SIGNOUT_SUCCESS":
          console.log("signout successs")
          return state
      case "SIGNUP_ERROR":
          console.log("signup error")
          return{
            ...state,
            authError:action.err.message
          }
      case "SIGNUP_SUCCESS":
        console.log("signup success")
        return{
          ...state,
          authError:null
        }
      default:
        return state
      }
}
export default authReducer;