const dogImage = document.getElementById( 'dogImage' );
const newDogBtn = document.getElementById( 'newDogBtn' );

newDogBtn.addEventListener( 'click', () => {
    fetch( 'https://dog.ceo/api/breeds/image/random' )
        .then( response => response.json() )
        .then( json => {
            dogImage.setAttribute( 'src', json.message );
            console.log( 'Fetched Dog Image:', json );
        } )
} );