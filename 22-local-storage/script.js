// WAP to set the value in local storage example
// const nameElement = document.querySelector('.name-tag');

// nameElement.innerText = localStorage.MyName;

// console.log(nameElement);




// Method 1 to store the data in local storage 
// const nameElement = document.querySelector('.name-tag');
// const nameInput = document.querySelector('.name')

// nameInput.addEventListener('input' , (e) => {
//     localStorage.MyName = e.target.value;
// })

// nameElement.innerText = localStorage.MyName;



// Method 2 to store the data and access the data in local storage (This method is more correct)
// const nameElement = document.querySelector( '.name-tag' );
// const ageElement = document.querySelector( '.age-tag' );
// const nameInput = document.querySelector( '.name' );
// const ageInput = document.querySelector( '.age' );

// nameInput.addEventListener( 'input', ( e ) => {
//     localStorage.setItem('myName' , e.target.value)
//     nameElement.innerText = localStorage.getItem('myName')
// } )


// ageInput.addEventListener( 'input', ( e ) => {
//     localStorage.setItem('myAge' , e.target.value);
//     ageElement.innerText = localStorage.getItem('myAge')
// } )




// Store the data in Object from and this is correct way.
const nameElement = document.querySelector( '.name-tag' );
const ageElement = document.querySelector( '.age-tag' );
const nameInput = document.querySelector( '.name' );
const ageInput = document.querySelector( '.age' );

const userData = JSON.parse(localStorage.getItem('userData')) ||{} 


nameInput.addEventListener('input' ,(e) => {
    userData.name = e.target.value;
    localStorage.setItem('userData', JSON.stringify(userData))
    nameElement.innerText = e.target.value;
})

ageInput.addEventListener('input' ,(e) => {
    userData.age = e.target.value;
    localStorage.setItem('userData', JSON.stringify(userData))
    ageElement.innerText = e.target.value;
})

if(userData.name) {
    nameElement.innerText = userData.name;
}

if(userData.age) {
    ageElement.innerText = userData.age;
}


// To clear the local storage

function clearStorage(){
    localStorage.clear();
}