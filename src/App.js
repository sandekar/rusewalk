import React from 'react';
import {Switch} from "react-router";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import CentreWalkPage from "./pages/walks/CentreWalkPage";
import BattenbergWalkPage from "./pages/walks/BattenbergWalkPage";
import HistoryMuseumWalkPage from "./pages/walks/HistoryMuseumWalkPage";
import SexagintaPristaWalkPage from "./pages/walks/SexagintaPristaWalkPage";
import IvanovoRockMonasteryWalkPage from "./pages/walks/IvanovoRockMonasteryWalkPage";

import './App.css';

function App() {
    return (
        <div className="RuseWalkApp">
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/walk/ruse-centre" component={CentreWalkPage}/>
                        <Route exact path="/walk/battenberg-square" component={BattenbergWalkPage}/>
                        <Route exact path="/walk/history-museum" component={HistoryMuseumWalkPage}/>
                        <Route exact path="/walk/sexaginta-prista" component={SexagintaPristaWalkPage}/>
                        <Route exact path="/walk/ivanovo-rock-monastery" component={IvanovoRockMonasteryWalkPage}/>
                    </Switch>
                </Layout>
            </Router>
        </div>
    );
}

export default App;