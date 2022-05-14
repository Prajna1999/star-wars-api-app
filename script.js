let movies=[];



function buildList(){
    document.querySelector("nav>h2").innerHTML=`${movies.length} star war movies are found.`
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


