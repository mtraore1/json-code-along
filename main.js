/** @TODO - Access the pokemon data from data.js */
/**         and print to the console to check */
console.log(pokemonData);

/** @TODO - Update the page data using a single pokemon */
/**  
 *      1. Update the #poke_name heading with the name and dex number
 *      2. Update the #poke_img with the pokemon's image URL
 *      3. Update the type heading with the pokemon's type(s)
 *      4. Change the width of each stat bar using the 
 *          pokemon's base stats
 */
function displayRandomPokemon(){
    let randInt= Math.floor(Math.random()*pokemonData.length);
    let pokemon=pokemonData[randInt];
    let heading = document.getElementById("poke_name");
    //template literal (``)
    heading.innerHTML=`#${pokemon.id}- ${pokemon.name}`;
    
    //update image
    
    let image = document.getElementById("poke_img");
    image.src=pokemon.image[0];
    
    //update type
    let typeDisplay = document.getElementById("poke_types");
    typeDisplay.innerHTML=pokemon.type[0] + "-type";
    
    //select all divs in poke_stats container
    let statDivs=document.querySelectorAll("#poke_stats div");
    
    for (let i=0; i<statDivs.length;i++){
        console.log(statDivs[i].id);
        //getting name of stat to check from div id
        let statName=statDivs[i].id;
    
        let statValue=pokemon.base[statName];
    
        statDivs[i].style.width=statValue + "%";
    }
}


/** @TODO - Assign #random_btn to pick a random starter on click */
/**         and update the page data accordingly
 * 
 *      1. Make a new function for the code from the previous task
 *      2. Generate a random index for the pokemon array
 *      3. Replace references to the specific pokemon with references
 *          to the randomly-chosen pokemon
 *      4. Add an eventListener to #random_btn with our new function!
 */
let button = document.getElementById("random_btn");
button.onclick=displayRandomPokemon;