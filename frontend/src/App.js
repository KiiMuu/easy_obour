import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './pages/home';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Router>
    )
}

export default App;