import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/home';
import Chatbot from './components/chatbot/Chatbot';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
            <Chatbot />
        </Router>
    )
}

export default App;