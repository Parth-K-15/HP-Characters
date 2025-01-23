let url = "https://potterapi-fedeperin.vercel.app/en/characters";
let cards = document.querySelectorAll(".card");

const getdata = async () => {
    console.log("Fetching data....");
    let response = await fetch(url);  //Here await is imp, boz of asynchro.
    console.log(response);
    console.log("Successful part-1");
    let data = await response.json()
    console.log(data);
    console.log("Successful part-2");

    cards.forEach((card) => {
        let randomNumber = Math.floor(Math.random() * data.length);
        // dynamically account for API response size
        let name = card.querySelector("h5");
        let img = card.querySelector("img");
        let house = card.querySelector("#House");
        let children = card.querySelector("#Children");
        let protrayedBy = card.querySelector("#ProtrayedBy");
        let DOB = card.querySelector("#DOB");
        img.src = data[randomNumber].image;
        img.alt = data[randomNumber].fullName;
        DOB.innerText = `- ${data[randomNumber].birthdate}`;
        name.innerHTML = data[randomNumber].fullName;
        house.innerText = `Belongs to ${data[randomNumber].hogwartsHouse}`;

        if(data[randomNumber].children && data[randomNumber].children.length > 0){
            let children_names = data[randomNumber].children.join(", ");
            children.innerText = `Children.. ${children_names}`;
        }
        else{
            children.innerText = "Data of this Character's Child is not Available";
        }
        protrayedBy.innerText = `Portrayed by ${data[randomNumber].interpretedBy}`
    })
}

let shuffle = document.querySelector(".btn");
shuffle.addEventListener("click",()=>{
    return getdata();
});

window.onload = getdata;
