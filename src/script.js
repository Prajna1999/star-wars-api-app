let movies=[];



function buildList(){
    document.querySelector("nav>h2").innerHTML=`${movies.length} star war movies are found.`

    const main=document.querySelector("main");
    main.innerHTML=movies.map((m)=>{
        return `<div class="movie" data-ref="${m.id}" data-episode="${m.episode_id}">
                <h2>Star Wars:${m.release_date} </h2>
                <p>Directed by: ${m.director}</p>
                <p>Random Charachter:
                    <span class="char">${m.characters[0]}</span>
                </p>
                <p><a href="${m.url}" target="_blank">More Info </a></p>
                </div>

        
        
        
        `
    }).join('');
}

function init(){
    const options={
        method:"GET",
        q:null,
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
            movies=data.results;
            buildList();
            // console.log(movies)
        })
        .catch((e)=>console.log(e));
}

document.addEventListener("DOMContentLoaded", init);


