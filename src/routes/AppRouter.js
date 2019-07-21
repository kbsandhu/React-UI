import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './../components/App';
import Contact from './../components/Contact';
import About from './../components/About';
import Posts from './../components/Posts';
import FileNotFound from './../components/FileNotFound';
// import Navbar from '../components/layout/Navbar';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import LandingPage from '../components/main/LandingPage';
import UserProfile from '../components/userProfile/UserProfile'
import UserMenu from '../components/userProfile/UserMenu'
import AddForm from '../components/forms/AddUserForm'
import UserTable from '../components/tables/UserTable'


import Navigation from '../components/Nav/Navigation';


const AppRouter = () => (
    <BrowserRouter>
        <div>

            <Switch>
                {/* <Route path="/LandingPage"  component={LandingPage}/> */}
                {/* <Route path="/nav" component={Navbar} /> */}
                <Route path="/login" component={Login} />
                <Route path="/Register" component={Register} />
                <Route path="/" exact component={LandingPage} />
                <Route path="/app" component={App} />
                <Route path="/contact" component={Contact} />
                <Route path="/about/:id" component={About} />
                <Route path="/post" component={Posts} />
                <Route path="/profile" component={UserTable} />
                <Route path="/add" component={AddForm} />


                <Route component={FileNotFound} />
            </Switch>
        </div>
    </BrowserRouter>

)

export default AppRouter;