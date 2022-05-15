class Movie{
    // public instance properties.
    #ref="";//private
    #date;//private
    #characters;
    // static instance on top level.
    static #count=0;
    static getFullMovies(){
        return Movie.#count;
    }
    constructor(film){
        if(!film.title||!film.episode_id||!film.director||!film.release_date||!film.url||!film.characters){
            throw new Error("Missing required Movie info")
        }
        this.title=film.title;
        this.episode_id=film.episode_id;
        this.director=film.director;
        this.release_date=film.release_date;
        this.url=film.url;
        this.#characters=film.characters;
        // return this;
        this.#date=new Date(film.release_date);
        // static instance propoerty applies to the Movie class itself.
        Movie.#count++;
        this.#ref=(Math.random()*Movie.#count).toString(16).substring(2,12);
      
    }
    get id(){
        return this.#ref.toUpperCase();

    }
    // setters take an dependency
    set id(val){
        console.log("This cannot be changed",val);
        return false;
    }
    getYear(){
        // return this.year.
        return this.#date.getFullYear(); 
    }
    getChar(){
        const idx=Math.floor(Math.random()*this.#characters.length);
        return this.#characters[idx];
    }
 
}


export default Movie;