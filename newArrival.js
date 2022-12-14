
let container = document.getElementById("container")

async function collectcard(){


    try{
        let response = await fetch("http://localhost:3000/New_Arrival");
        let data = await response.json();
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}