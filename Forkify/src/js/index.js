import Search from './modules/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

/** Global state of the app
 * - Search object
 * - Current recire object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

const controlSearch = async () => {
    // 1. Get query from view
    const query = 'pizza'; //TODO
    
    if(query) {
        // 2. New Search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for results

        // 4. Search for recipes
        await state.search.getResults();

        // 5. render results on UI
        console.log(state.search.result);
    }
};

elements.searchForm.addEventListener('submit', e=>{
    e.preventDefault();
    controlSearch();
});