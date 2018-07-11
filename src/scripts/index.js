import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Main from 'components/Main.js';

class AppInit {
    run() {
        render(
            <Router>
                <div>
                    <Switch>
                        <Route path="/" component={ Main } exact />
                        <Route render={() => {return <Redirect to="/" /> }} />
                    </Switch>
                </div>
            </Router>

            , document.getElementById('app')
        );
    }
}

new AppInit().run();