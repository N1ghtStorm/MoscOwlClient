import React from 'react'; 
import { Switch, Route } from 'react-router-dom';
import StartPage from './Contents/StartPage';
import LeagueTables from './Contents/LeagueTables/LeagueTables';
import Reports from './Contents/Reports';
import Participate from './Contents/Participate';
import Legacy from './Contents/Legacy';

const ContentRouter:React.FC = () => {


    return (
        <div>
            <Switch>
                <Route exact path="/" component={StartPage} />
                <Route exact path="/league" component={LeagueTables} />
                <Route exact path="/reports" component={Reports} />
                <Route exact path="/legacy" component={Legacy} />
                <Route exact path="/participate" component={Participate} />
            </Switch>
        </div>
    );
}

export default ContentRouter;