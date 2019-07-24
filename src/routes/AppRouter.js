import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './../components/App';
// import Contact from './../components/Contact';
import About from './../components/About';
import FileNotFound from './../components/FileNotFound';
// import Navbar from '../components/layout/Navbar';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import LandingPage from '../components/main/LandingPage';
import UserProfile from '../components/userProfile/UserProfile'
import UserMenu from '../components/userProfile/UserMenu'
import UserTable from '../components/tables/UserTable'
import Delete from '../components/forms/Delete'
import EditForm from '../components/forms/Edit'
import Add from '../components/forms/Add'
import logout from '../components/forms/logout';
const AppRouter = () => (
    <BrowserRouter>
        <div>

            <Switch>
                {/* <Route path="/LandingPage"  component={LandingPage}/> */}
                {/* <Route path="/nav" component={Navbar} /> */}
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/" exact component={LandingPage} />
                <Route path="/app" component={App} />
                {/* <Route path="/contact" component={Contact} /> */}
                <Route path="/about" component={About} />
                <Route path="/profile" component={UserTable} />
                <Route path="/logout" component={logout} />
                <Route path="/delete" component={Delete} />
                <Route path="/edit" component={EditForm} />
                <Route path="/add" component={Add} />
                


                <Route component={FileNotFound} />
            </Switch>
        </div>
    </BrowserRouter>

)

export default AppRouter;