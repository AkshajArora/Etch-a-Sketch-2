const bigBox = document.querySelector(".container");

function createGrid(size) {
    let value = +(478/size)
    let totalBox = +(size*size)
    console.log(value)
    console.log(totalBox)

    for(let i = 1; i<=totalBox; i++) {
        bigBox.innerHTML += (`<div class='smallBox' data-count="0"></div>`);
    }

    let smallBox = document.querySelectorAll(".smallBox");

    smallBox.forEach(box => {

            box.style.width = `${value}px`;
            box.style.height = `${value}px`;
    
        })
    

    smallBox.forEach(box => {
    box.addEventListener("mouseover", () => {

            let count = parseInt(box.dataset.count)

            count++;

            box.dataset.count = count;

            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            box.style.backgroundColor = `rgb(${red},${green},${blue})`;

            box.dataset.count = count;
            let opacity = count * 0.1;
            if (opacity  >=  1 ) {
                box.style.backgroundColor = `black`;
                opacity = 1
            }
            box.style.opacity = opacity;
            console.log(count);

        });
    });
}

createGrid(16);

function clearSketch() {

    let newSize;
    let count = 1
    while(count) {
        newSize = +prompt('Enter a new value to create a new grid with the same value as rows and columns(max: 60)')

        if(isNaN(newSize) || newSize>60 || newSize<1) {
            alert('Enter a number between 1 to 60')
        }
        else{
            count = 0
        }
    }

    while(bigBox.firstChild) {
        bigBox.removeChild(bigBox.firstChild)
    }

    createGrid(newSize);
}

const btn = document.querySelector('button')
btn.addEventListener('click', clearSketch)
