import {Component} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from "./components/layout/Navbar"
import DashBoard from "./components/dashboard/DashBoard"
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'


class App extends Component {
  render(){
    return (
      <BrowserRouter>
       <div className="App">
       <Navbar/>
       <Switch>
       <Route exact path="/" component={DashBoard}/>
       <Route path="/signin" component={SignIn}/>
       <Route path="/signup" component={SignUp}/>
       <Route path="/create" component={CreateProject}/>
       <Route path="/project/:id" component={ProjectDetails}/>
       </Switch>
       </div>
      </BrowserRouter>
      )
    }
  }

export default App;
