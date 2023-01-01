import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import EditCourse from './components/EditCourse';
import AllCourses from './components/AllCourses';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import SignUp from './components/SignUp';
import {Container, Row, Col} from 'reactstrap';
import Menus from './components/Menus';
import AddCourse from './components/AddCourse';
import {Route,Switch} from 'react-router-dom';

const App=()=> {
  return (
    <div >
      
        <Container>
          <Row className="text-center" >
            <Col>
            <Header/>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Menus/>            
            </Col>
            <Col className="text-center" md={8}>
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/add-course" component={AddCourse} />
                <Route path="/view-course" component={AllCourses} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/contactus" component={ContactUs} />
                <Route path="/edit-course"component={EditCourse} />
              </Switch>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
