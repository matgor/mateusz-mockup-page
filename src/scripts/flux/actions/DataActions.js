import axios from 'axios';
import alt from 'flux/alt/alt.js';

class DataActions {

    constructor() {
        const appUrl = 'http://www.mateuszmockuppage.dev.cc';

        this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`; 
        this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`; 
    }

    // get data from endpoint
    api(endPoint) {
        return new Promise((resolve, reject) => {
            axios.get(endPoint).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            }); 
        });     
    }
    
    // get pages
    getPages(cb){
        this.api(this.pagesEndPoint).then((response)=>{
            this.getPosts(response, cb)
        });
        return true;
    }

    // get posts
    getPosts(pages, cb){
        this.api(this.postsEndPoint).then((response)=>{
            const posts     = response
            const payload   = { pages, posts };

            this.getSuccess(payload); 
            cb(payload); 
        });
        return true;
    }

    getSuccess(payload){
        return payload;
    }
}

export default alt.createActions(DataActions);