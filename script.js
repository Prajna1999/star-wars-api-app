let movies=[];

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
            const movies=data.results;
            console.log(movies);
        })
        .catch((e)=>console.log(error));
}

document.addEventListener("DOMContentLoaded", init);


