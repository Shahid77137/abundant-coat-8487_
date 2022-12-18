
let container = document.getElementById("container")

let gif = document.getElementById("load");


function appendData(data){
    container.innerHTML = null;
    data.forEach((ele)=>{
        let card = document.createElement("div");
        card.setAttribute("class","cardDiv");
        card.style.paddingLeft = "10px"
        let image = document.createElement("img");
        image.src = ele.img_src;
        image.style.width = "100%";
        
        let title = document.createElement("p");
        title.innerText = ele.items_p.substr(1,50);

        let price = document.createElement("h2");
        price.innerText = `₹${ele.items_price}`;
        let fav = document.createElement('img');
        fav.src = `./images/heart(3).png`;
        fav.style.width = "30%";
        fav.style.marginTop = "10px"
        fav.style.height = "25px";
        let fav_count = document.createElement('p');
        fav_count.innerText =  +ele.favite_count;
        
        let freeship =  document.createElement('p');
        freeship.innerText = ele.free_ship;
        let last = document.createElement("div");
        let small = document.createElement("div");
        var flag = false;
        if(freeship.innerText == "Free Shipping"){
            flag = true;
        };
        
        small.append(fav,fav_count);
        small.style.gap ="5px"
        last.append(small);
        small.setAttribute("id","small");
        last.setAttribute("id","last");
        // card.append(image,title,price,last)
        if(flag == true){
            last.append(freeship)
        }
        card.append(image,title,price,last);
        container.append(card);
        

    })
    

}

let asc = document.getElementById("lth");
asc.onclick = async () => {
    try{
        let response = await fetch(`http://localhost:3000/Best_Seller?_page=1&_limit=15_sort=items_price&_order=desc`);
        let data = await response.json();
        console.log(data)
        appendData(data)
    }
    catch(err){
        console.log(err)
    }
}
let dsc = document.getElementById("htl");


async function collectcard(){
    load.style.display = "none";

    try{
        let response = await fetch("http://localhost:3000/Best_Seller?_page=1&_limit=15");
        let data = await response.json();
        console.log(data)
        appendData(data)
    }
    catch(err){
        console.log(err)
    }
}


setInterval(collectcard, 3000);
