let gameGrid = document.getElementById("gameGrid");

let squares = {}
let availableImages = {
    0: { count: 0, image: "apple.png" },
    1: { count: 0, image: "banana.png" },
    2: { count: 0, image: "car.png" },
    3: { count: 0, image: "dog.png" },
    4: { count: 0, image: "football.png" },
    5: { count: 0, image: "heart.png" },
    6: { count: 0, image: "king.png" },
    7: { count: 0, image: "rainbow.png" },
    8: { count: 0, image: "star.png" }
}

function chooseImage() {
    let valid = false
    while (! valid) {
        let index = availableImages[Math.floor(Math.random() * 8)]

        if (! index.count == 2) {
            index.count += 1

            return "images/"+index.image
        }
        else {
            continue
        }
    }
}

for (let i = 0; i < 16; i++) {
    let square = document.createElement("square")
    square.classList.add("square");

    let img = document.createElement("img")
    let picture = Math.floor(Math.random() * 16);

    img.src = "images/"
    

    square.addEventListener("click", function () {
        // Button clicked

        buttonClicked(i)
    });

    gameGrid.appendChild(square)
    squares[i] = square
}


function buttonClicked(buttonId) {

}