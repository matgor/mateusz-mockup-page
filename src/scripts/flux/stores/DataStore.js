import alt from 'flux/alt/alt.js';
import DataActions from 'flux/actions/DataActions.js';

class DataStore {
    constructor() {
        this.data = {};

        this.bindListeners({
            handleSuccess: DataActions.GET_SUCCESS
        });

        this.exportPublicMethods({
            getAll:         this.getAll,
            getAllPages:    this.getAllPages,
            getAllPosts:    this.getAllPosts,
            getPageBySlug:  this.getPageBySlug
        });
    }

    handleSuccess(data) {
        this.setState({ data });
    }

    getAll() { 
        return this.getState().data; 
    }

    getAllPages() { 
        return this.getState().data.pages; 
    }

    getAllPosts() { 
        return this.getState().data.posts; 
    }

    getPageBySlug(slug){
        const pages = this.getState().data.pages;
        return pages[Object.keys(pages).find((page, i) => {
            return pages[page].slug === slug;
        })] || {};
    }

}

export default alt.createStore(DataStore, 'DataStore');