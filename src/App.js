import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link} from"react-router-dom";
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import NotFound  from './components/NotFound/NotFound';
import Menubar from './components/Menubar/Menubar';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import Services from './components/Services/Services';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Footer from './components/Footer/Footer';
import Doctors from './components/Doctors/Doctors';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './components/About/About';





function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Menubar></Menubar>
        

        <Switch>

        <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>
{/*           
          <Route path="/services">
            <Services></Services>
          </Route> */}


          {/* <Route path="/service">
                <Service></Service>
          </Route> */}


          <PrivateRoute path="/service/:serviceId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>


          <Route path="/login">
            <Login></Login>
          </Route>


          <Route path="/register">
            <Register></Register>
          </Route>
            
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          
          <Route path="/about">
            <About></About>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>


        <Footer></Footer>
     </Router>

    

      </AuthProvider>
      
    </div>
  );
}

export default App;
