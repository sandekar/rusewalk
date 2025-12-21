import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./layout/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";

import './App.scss';

import CentreWalkPage from "./pages/walks/CentreWalkPage.jsx";
import BattenbergWalkPage from "./pages/walks/BattenbergWalkPage.jsx";
import HistoryMuseumWalkPage from "./pages/walks/HistoryMuseumWalkPage.jsx";
import SexagintaPristaWalkPage from "./pages/walks/SexagintaPristaWalkPage.jsx";
import IvanovoRockMonasteryWalkPage from "./pages/walks/IvanovoRockMonasteryWalkPage.jsx";
import AdeoHotelWalkPage from "./pages/walks/AdeoHotelWalkPage.jsx";
import YouthParkWalkPage from "./pages/walks/YouthParkWalkPage.jsx";

function App() {
    return (
        <div className="RuseWalkApp">
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" Component={HomePage}/>
                        <Route exact path="/walk/ruse-centre" Component={CentreWalkPage}/>
                        <Route exact path="/walk/old-centre" Component={BattenbergWalkPage}/>
                        <Route exact path="/walk/history-museum" Component={HistoryMuseumWalkPage}/>
                        <Route exact path="/walk/sexaginta-prista" Component={SexagintaPristaWalkPage}/>
                        <Route exact path="/walk/ivanovo-rock-monastery" Component={IvanovoRockMonasteryWalkPage}/>
                        <Route exact path="/walk/adeo-hotel" Component={AdeoHotelWalkPage}/>
                        <Route exact path="/walk/youth-park" Component={YouthParkWalkPage}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
