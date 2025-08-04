// Add the event listener

// Method 1 (In this method we can't add more then one events)
const h1 = document.querySelector('h1');
const card = document.querySelector('.card');

function sayHi(){
    console.log("Hey");
}
function sayHii(){
    console.log("Hey bro");
}

// h1.onclick = sayHi;
// h1.onclick = sayHii;



// Method 2
// Best method to add event listener also recommended by MDN and we can add more then one events
const container = document.querySelector('.container')
h1.addEventListener('click', sayHi)
h1.addEventListener('click', sayHii)
let count = 1;

container.addEventListener('click', function() {
    if ( event.target.classList.contains( 'add-card' ) ) {
        const newCard = document.createElement( 'div' );
        newCard.classList.add( 'card' );
        newCard.innerText = count++;
        container.appendChild( newCard );
    }

})