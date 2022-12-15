
let container = document.getElementById("container")



function appendData(data){
    
    data.forEach((ele)=>{
        let card = document.createElement("div");
        card.setAttribute("class","cardDiv");
        let image = document.createElement("img");
        image.src = ele.img_src;
        image.style.width = "100%"
        let title = document.createElement("p");
        title.innerText = ele.items_p;
        let price = document.createElement("h2");
        price.innerText = `Є+${ele.items_price}`;
        let fav = document.createElement('img');
        fav.src = `./images/heart(3).png`;
        fav.style.width = "7%";
        let fav_count = document.createElement('p');
        fav_count.innerText = ele.favite_count;
        let freeship =  document.createElement('p');
        freeship.innerText = ele.free_ship;
        let last = document.createElement("div");
        let small = document.createElement("div");
        var flag = false;
        if(freeship.innerText == "Free Shipping"){
            flag = true;
        };
        
        small.append(fav,fav_count);
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


async function collectcard(){


    try{
        let response = await fetch("http://localhost:3000/Best_Seller");
        let data = await response.json();
        console.log(data)
        appendData(data)
    }
    catch(err){
        console.log(err)
    }
}
collectcard()