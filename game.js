console.log("Game initialised.");
//first step - create the game board. 16 x 16 grid of square divs.
let width = 16
let height = 16
let dots = 256

const gameContainer = document.getElementById("game-container");



for (let dotCounter = 1; dotCounter < dots; dotCounter++) {

    const dot = document.createElement("div");
    dot.className = "game-dot-empty";
    gameContainer.append(dot);
    dot.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "black";
        console.log(`changed colour`);
    })

    console.log(`Dot ${dots} created.`)

}


//second step - format a flexbox to put the grid in

//third step - set up "hover" effect so divs change colour when mouse passes over

//fouth step - create button to allow new grid to be created. see button and prompts