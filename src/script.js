import Movie from "./movies.js";

let movies=[];



function buildList(){
    document.querySelector("nav>h2").innerHTML=`${Movie.count} star war movies are found.`

    const main=document.querySelector("main");
    main.innerHTML=movies.map((m)=>{
        return `<div class="movie" data-ref="${m.ref}" data-episode="${m.episode_id}">
                <h2>Star Wars:${m.title} (${m.getYear()}) </h2>
                <p>Directed by: ${m.director}</p>
                <p>Random Charachter:
                    <span class="char">${m.getChar()}</span>
                </p>
                <p><a href="${m.url}" target="_blank">More Info </a></p>
                </div>

        
        
        
        `
    }).join('');
}

function init(){
    const options={
        method:"GET",
        
        
    }

    const req=new Request("https://swapi.dev/api/films", options);

    fetch(req)
        .then((resp)=>{
            if(!resp.ok){
                throw new Error(resp.statusText);
            }else{
                return resp.json();
            }
        }).then((data)=>{
            // movies=data.results;
            movies=data.results.map((film)=>new Movie(film))
           
            console.log(movies);
            console.log(Movie.bind(this));
            buildList();
        })
        .catch((e)=>{
            const main2=document.querySelector("main");
            main2.innerHTML=`${e.message}`

            console.log(e)});
}

document.addEventListener("DOMContentLoaded", init);


