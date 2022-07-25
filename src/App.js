import './App.css';
import NavBar from './components/screens/NavBar';
import Places from './components/screens/Places';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Place from './components/screens/Place';

function App() {
    return (
        <Router>
            <>
                <NavBar />
                <Switch>
                    <Route path = "/" exact component = {Places}/>
                    <Route path = "/place/:id" exact component = {Place}/>
                </Switch>
            </>
        </Router>

        
           
    );
}

export default App;
