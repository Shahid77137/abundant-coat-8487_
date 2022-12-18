
let bag=[];
let cartitem=JSON.parse(localStorage.getItem("cartproduct2"))||[];

let url = "https://636b32aeb10125b78fed84ae.mockapi.io/Page-2"
fetch(url)
.then((res) =>  res.json())
.then((data) => {
    console.log(data)
    bag = data
    displayTable(data)
})
.catch((err) => alert("something went wrong"))

function Sortingid(){
    let sorted = document.querySelector("#id").value
    if(sorted == "LTH"){
       bag.sort((a,b)=>a.id-b.id);
    }
   if(sorted=="HTL") {
        bag.sort((a,b)=>b.id-a.id);
    }
    displayTable(bag)
}

function Sorting(){
    let sorted = document.querySelector("#price").value
    if(sorted == "LTH"){
       
       bag.sort((a,b)=> {

        let val = +(a.price.replace("€",""));

        let val2 = +(b.price.replace("€",""));
        
         return val-val2;
    
    }  );
    }
   if(sorted == "HTL") {
            
    bag.sort((a,b)=> {
    let val = +(a.price.replace("€",""));

    let val2 = +(b.price.replace("€",""));
    
     return val2-val;
    });
       
    }
    displayTable(bag)
}


function displayTable(array){
    console.log(array)
    document.querySelector("#container2").innerHTML="";
    array.forEach((element) => {
                
    let div=document.createElement("div")

    let img=document.createElement("img")
    img.setAttribute("src",element.image)

    // let name=document.createElement("h5")
    // name.innerText=element.name;

    let detail=document.createElement("p")
    detail.innerText=element.pro_title.substring(1,50);

    let id=document.createElement("h4")
    id.innerText=`id: ${element.id}`;
    
    let price=document.createElement("h4")
    price.innerText=`Price:- ${element.price}`;

    let review=document.createElement("h4")
    review.innerText=`rating: ${element.review_num}`;

    // let shiping=document.createElement("p")
    // shiping.innerText=`ship: ${element.free_ship}`;


    let button=document.createElement("button")
    button.innerText="add to cart"
    button.addEventListener("click",function(){
        let isPresent = false;

        for (let i = 0; i < cartitem.length; i++ ) {
                 
               if (cartitem[i] == element) {
                  
                    alert("item is already present in the cart");

                    isPresent = true;

                    break;

               }

        }

        if (!isPresent) {

            alert("Item added to the cart")

            cartitem.push(element)
            localStorage.setItem("cartproduct2",JSON.stringify(cartitem))


        }
        
        
        
    })

    div.append(img,detail,id,price,review,button)
    document.querySelector("#container2").append(div)
    });   
}
