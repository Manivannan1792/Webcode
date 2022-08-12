let h1 = document.createElement('h1');
h1.setAttribute("class","center");
let hr =document.createElement('hr');
let img=document.createElement('img');
img.setAttribute("class","center1");

let h = document.createElement('h4');
h.innerHTML = "Nationalise API"
document.body.append(h1,hr,img, h);
let f = document.createElement("FORM");
var x = document.createElement("INPUT");
x.setAttribute("type", "text");
x.setAttribute("id", "name");
let y = document.createElement("button");
y.innerHTML = "Search"
y.setAttribute("id", "but_y")
f.append(x, y);
document.body.append(f);

let p = document.createElement('p');
p.setAttribute("id", "demo");
document.body.append(p);
y.addEventListener("click", valuetext);

function valuetext(e) {
    try{
    e.preventDefault();
    var name1 = document.getElementById("name").value;
    var demo1 = document.getElementById("demo");
    demo1.innerHTML = name1;

    console.log(name1);

    getjson(name1);
}
catch(error){
console.log(error);
}
}

async function getjson(name) {
    try {

        let resp = await fetch("https://api.nationalize.io/?name=" + name);
        let data = await resp.json();
      
        foo(data);
       // console.log(data);
    }
    catch (error) {
        console.log(error);

    }
}

function foo(data) {
    try{

    let container = document.createElement("div");
    container.setAttribute("class", "container");
    let row = document.createElement("div");
    row.setAttribute("class", "row");
  
    data.country.forEach((element) =>{
              
        let col = document.createElement("div"); 
        col.setAttribute("class", "col-4 mb-3");

        let card = document.createElement("div");
        card.setAttribute("class", "card h-200");


        let cardBody = document.createElement("div")
        cardBody.setAttribute("class", "card-body");

        let cardTilte1 = document.createElement("h5");
        cardTilte1.setAttribute("class", "h5");
        cardTilte1.innerHTML = "Name :" + data.name;

        let cardTilte2 = document.createElement("h6");
        cardTilte2.setAttribute("class", "h6");
        cardTilte2.innerHTML = "Country code :" + element.country_id;

        let cardTilte3 = document.createElement("h6");
        cardTilte3.setAttribute("class", "h6");
        cardTilte3.innerHTML = "Probability :" + element.probability;
        

        cardBody.append(cardTilte1,cardTilte2,cardTilte3);

        card.append(cardBody);
        col.append(card);
        row.append(col);
    });

    container.append(row);
    document.body.append(container);
}
catch(error)
{
    console.log(error);
}
 }