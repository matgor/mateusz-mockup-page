import React from 'react';
import DataStore from 'flux/stores/DataStore.js'

class Home extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('home');
        
        return (
            <div>
                <h1>{pageData.title.rendered}</h1>

                <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />
                
            </div>
        );
    }
}

export default Home;