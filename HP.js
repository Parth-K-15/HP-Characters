let url = "https://potterapi-fedeperin.vercel.app/en/characters";
let name1 = document.querySelector("#card1 h5");
let img1 = document.querySelector("#card1 img");
let house1 = document.querySelector("#card1 #House");
let children1 = document.querySelector("#card1 #Children");
let protrayedBy = document.querySelector("#card1 #ProtrayedBy");

const getdata = async () =>{
    console.log("Fetching data....");
    let response = await fetch(url);  //Here await is imp, boz of asynchro.
    console.log(response);
    console.log("Successful part-1");
    let data =await response.json()
    console.log(data);
    console.log("Successful part-2");
    // console.log(data[0].image);
    img1.src = data[0].image;
    img1.alt = data[0].fullName;
    // console.log(name1.innerText);
    name1.innerHTML = data[0].fullName;
    house1.innerText = `Belongs to ${data[0].hogwartsHouse}`;
    // console.log(data[0].children);
    let children_names = data[0].children.join(", ");
    // console.log(children_names)
    children1.innerText = `Children.. ${children_names}`;
    protrayedBy.innerText = `Portrayed by ${data[0].interpretedBy}`
}


window.onload = getdata;