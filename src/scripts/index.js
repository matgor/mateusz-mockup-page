import React from 'react';
import {render} from 'react-dom';
import DataActions from 'flux/actions/DataActions.js';

import Home from 'components/Home/Home.js';
import About from 'components/About/About.js';
import Contact from 'components/Contact/Contact.js';
import Header from 'components/Header/Header.js';
import News from 'components/News/News.js'

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';


class AppInitializer {

    templates = {
        'about': About,
        'contact': Contact
    }

    buildRoutes(data){
        return data.pages.map((page, i) => {
            return(
                <Route
                    key={i}
                    component={this.templates[page.slug]}
                    path={`/${page.slug}`}
                    exact
                /> 
            )
        })     
    }

    run() {
        DataActions.getPages((response)=>{
            render(
                <Router>
                    <div>
                        <Header />

                        <Switch>
                            <Route path="/" component={ Home } exact />

                            {this.buildRoutes(response)}
                            <Route render={() => { return <Redirect to="/" /> }} />
                        </Switch> 
                        <News />
                    </div>
                </Router>

                , document.getElementById('app')
            );
        });
    }
}

new AppInitializer().run();