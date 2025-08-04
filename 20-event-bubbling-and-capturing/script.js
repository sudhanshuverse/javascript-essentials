const green = document.querySelector('.green');
const pink = document.querySelector('.pink');
const blue = document.querySelector('.blue');
const consoleOutput = document.getElementById( "console" );
const toggleButton = document.getElementById( "toggleMode" );
const onceButton = document.getElementById( "addOnce" );


// e.stopPropagation(); Use to stop the bubbling (It's mean when i click on child then it stop to click there parent)
window.addEventListener( 'click', ( e ) => {
    // e.stopPropagation();
    console.log( "6. Window" );
}, { capture: true } )

document.addEventListener( 'click', ( e ) => {
    // e.stopPropagation();
    console.log( "5. Document" );
}, { capture: true } )

document.body.addEventListener('click' , (e) => {
    // e.stopPropagation();
    console.log("4. Body");
}, { capture: true } )

green.addEventListener('click' ,  (e) => {
    // e.stopPropagation();
    console.log("3. Green");
}, { capture: true } )

pink.addEventListener('click' ,  (e) => {
    // e.stopPropagation();
    console.log("2. Pink");
}, { capture: true } )

blue.addEventListener('click' ,  (e) => {
    // e.stopPropagation();
    console.log("1. Blue");
}, { capture: true } )


// Capture(Echo in reverse Order)
// pink.addEventListener('click' ,  (e) => {
//     // e.stopPropagation();
//     console.log("2. Pink");
// }, {capture: true})

// blue.addEventListener('click' ,  (e) => {
//     // e.stopPropagation();
//     console.log("1. Blue");
// }, {capture: true})



// Once click(Only one times clicked)
// blue.addEventListener( 'click', ( e ) => {
//     console.log( "1. Blue" );
// }, {once: true})









let useCapture = false;

function logMessage ( message ) {
    consoleOutput.innerHTML += message + "<br>";
}

function clearConsole () {
    consoleOutput.innerHTML = "Console Output:<br>";
}

function addListeners ( capture = false ) {
    green.addEventListener( "click", () => logMessage( "Green clicked" ), { capture } );
    pink.addEventListener( "click", () => logMessage( "Pink clicked" ), { capture } );
    blue.addEventListener( "click", () => logMessage( "Blue clicked" ), { capture } );
}

// Initial setup (bubbling)
addListeners( false );

toggleButton.addEventListener( "click", () => {
    clearConsole();
    green.replaceWith( green.cloneNode( true ) ); // remove old listeners
    pink.replaceWith( pink.cloneNode( true ) );
    blue.replaceWith( blue.cloneNode( true ) );

    // Reassign new elements after replacement
    document.querySelectorAll( ".green, .pink, .blue" ).forEach( ( el ) => {
        el.addEventListener( "click", ( e ) => logMessage( el.className + " clicked" ), {
            capture: !useCapture
        } );
    } );

    useCapture = !useCapture;
    toggleButton.innerText = useCapture
        ? "Switch to Bubbling Mode"
        : "Switch to Capturing Mode";

    logMessage( "Event mode switched to " + ( useCapture ? "Capturing" : "Bubbling" ) );
} );

onceButton.addEventListener( "click", () => {
    blue.addEventListener(
        "click",
        () => logMessage( "Blue clicked (once)" ),
        { once: true }
    );
    logMessage( "Added once listener to Blue." );
} );