const h1 = document.querySelector('h1');
const container = document.querySelector('.container');
const image = document.querySelector('img');

// Method 1
// for (let i=2; i <= 100; i++) {
//     const newImage = image.cloneNode();
//     newImage.setAttribute( "src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png` );
//     // console.log(newImage);
//     container.append(newImage)
// }



// Method 2
// console.log(image);

// for(let i = 2; i <= 100; i++) {
//     const newImage = image.cloneNode();
//     newImage.setAttribute( "src" , `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)
//     container.append(newImage)
// }


// Create a new element
// const paragraph = document.createElement('p');

// paragraph.innerText = "Hello World";
// container.append(paragraph);

// paragraph.classList.add('my-para');

// paragraph.id = 'id';



// Create a new image and then append it
// const newImage = document.createElement('img');
// for (let i = 1; i <= 100; i++) {
//     const newImageClone = newImage.cloneNode();

//     newImageClone.setAttribute( 'src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png` )
//     newImageClone.setAttribute( 'alt', `Image-${i}.png` )

//     container.append( newImageClone );
// }



// Create a new image and then append it
// Method 1 (Less Use)
// for (let i = 1; i <= 100; i++) {
//     const newDiv = document.createElement('div');
//     newDiv.classList.add('image-container');

//     const imageAndPara = `
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="Image-${i}">
//     <p>${i}</p>`;

//     newDiv.innerHTML = imageAndPara;
//     container.append(newDiv);
// }


// Method 2 (Most Use)
function fun() {
    let num = prompt("Enter any number between (1 -1025): ");
    if(num <= 1025 && num >= 1) {
        for ( let i = 1; i <= num; i++ ) {
            const newDiv = document.createElement( 'div' );
            newDiv.classList.add( 'image-container' );

            const newImage = document.createElement( 'img' );
            const newPara = document.createElement( 'p' );

            newImage.setAttribute( 'src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ i }.png` );
            newPara.innerText = `${ i }`;

            newDiv.append( newImage );
            newDiv.append( newPara );
            container.append( newDiv );

        }
    }
    else {
        alert("Please enter a number between (1 - 1025)")
    }
}





// To remove any child
const myImg = document.querySelector( "body > div > div:nth-child(5)" );

myImg.remove();






