let url = "https://potterapi-fedeperin.vercel.app/en/characters";

let Cars = document.querySelectorAll(".Car");

const getdata = async () => {
    console.log("Fetching data");
    let response = await fetch(url);  //Here await is imp, boz of asynchro.
    console.log(response);
    console.log("Successful part-1");
    let data = await response.json()
    console.log(data);
    console.log("Successful part-2");
    Cars.forEach((Car) => {
        let randomNumber = Math.floor(Math.random() * data.length);
        let img = Car.querySelector("img");
        let name = Car.querySelector(".carousel-caption h5");
        let house = Car.querySelector("#House");
        let children = Car.querySelector("#Children");
        let protrayedBy = Car.querySelector("#ProtrayedBy");
        let DOB = Car.querySelector("#DOB");
        img.src = data[randomNumber].image;
        console.log(data[randomNumber].image)
        img.alt = data[randomNumber].fullName;
        DOB.innerText = `- ${data[randomNumber].birthdate}`;
        name.innerHTML = data[randomNumber].fullName;
        house.innerText = `Belongs to ${data[randomNumber].hogwartsHouse}`;

        if (data[randomNumber].children && data[randomNumber].children.length > 0) {
            let children_names = data[randomNumber].children.join(", ");
            children.innerText = `Children.. ${children_names}`;
        }
        else {
            children.innerText = "Data of this Character's Child is not Available";
        }
        protrayedBy.innerText = `Portrayed by ${data[randomNumber].interpretedBy}`
    })
    document.body.style.visibility = "visible";
}

let shuffle = document.querySelector(".btn");
shuffle.addEventListener("click",()=>{
    return getdata();
});

window.onload = getdata;
// window.addEventListener("load", getdata);
// document.addEventListener("DOMContentLoaded", getdata);

// window.onload = () => {
//     getdata();
//     document.body.style.visibility = "visible";
// };