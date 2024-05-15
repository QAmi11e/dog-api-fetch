const btn = document.querySelector("button");
//const breedInput = document.querySelector("input");
const imageDiv = document.querySelector("div");
const header = document.querySelector("header");
let breedSelect;


// -------------- MAIN ------------------------
//DROPDOWN

async function getBreeds(){
    const dogBreedsRes = await fetch("https://dog.ceo/api/breeds/list/all");
    const dogBreeds = await dogBreedsRes.json(); //these two are a pair. they are married. a response variable and a .json() variable
    //console.log(dogBreeds); //just a checkpoint
    const dogBreedsArr = Object.keys(dogBreeds.message); //stores key and values in the dogBreedsArr
    breedSelect = document.createElement("select"); //select is both the dropdown and the choosing the value, so it has a .value
    dogBreedsArr.forEach((breed) => {
        breedSelect.innerHTML += `<option value=${breed}>${breed}</option>`;
      });

    header.prepend(breedSelect);
    //console.log(dogBreedsArr); //checkpoint 
}// end of getBreeds 
getBreeds();


btn.addEventListener("click", async function(){
    const breed = breedSelect.value;
    const chosenBreedRes = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const chosenBreedJSON = await chosenBreedRes.json();
    imageDiv.innerHTML = `<img src=${chosenBreedJSON.message}>`; //bc .message is where the URL is
    } //end of function
) //end of Button event listener

