import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/home';
import Chatbot from './components/chatbot/Chatbot';
import Places from './pages/places';
import PlaceDetails from './pages/PlaceDetails';
import Register from './pages/register';
import Login from './pages/login';
import { useSelector } from 'react-redux';

const App = () => {
    // * user state
    const user = useSelector(state => state.user);

    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/find-places' component={Places} />
                <Route exact path='/find-places/:id' component={PlaceDetails} />
            </Switch>
            {user?.userInfo && <Chatbot />}
        </Router>
    )
}

export default App;