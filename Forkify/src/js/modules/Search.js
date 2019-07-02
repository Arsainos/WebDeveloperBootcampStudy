import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults(){
        const key = '27038b358adb155753d0a7b2ac513cc3';
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
    
}
