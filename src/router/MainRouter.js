import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from 'page/main/MainPage';
import JoinPage from 'page/join/JoinPage';
import LoginPage from 'page/login/LoginPage';
import WeatherPage from 'page/weather/WeatherPage';

const MainRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/join' component={JoinPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/weather' component={WeatherPage} />
        </Switch>
    )
}

export default MainRouter;