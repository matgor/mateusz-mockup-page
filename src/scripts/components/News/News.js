import React from 'react';
import DataStore from 'flux/stores/DataStore.js'

class News extends React.Component {
    render() {
        let allPosts = DataStore.getAllPosts();

        if( allPosts.length == 0 ) {
          allPosts = <p>Nic tu nie ma</p>;
        } else {
          allPosts = allPosts.map(post => {
            return(
                <div>
                    <h2 key={ post.id } dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                    <p key={ post.date } dangerouslySetInnerHTML={{__html: post.content.rendered}} />
                </div>
            )
          });
          
        }
        return (
          <div>
            {allPosts}
          </div>
        )
      }
    }

export default News;