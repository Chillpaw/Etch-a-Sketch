console.log("Game initialised.");
//first step - create the game board. 16 x 16 grid of square divs.
let width = 16
let height = 16

const gameContainer = document.getElementById("game-container");

for (let y = 1; y < height; y++) {
    for (let x = 1; x < width; x++) {
        const dot = document.createElement("div");
        dot.className = "game-dot";
        gameContainer.append(dot);
        console.log(`Dot ${x * y} created.`)
    }
}


//second step - format a flexbox to put the grid in

//third step - set up "hover" effect so divs change colour when mouse passes over

//fouth step - create button to allow new grid to be created. see button and prompts