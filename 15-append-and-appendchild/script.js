// Example with appendChild()
const parent1 = document.getElementById( "container" );
const div1 = document.createElement( "div" );
div1.textContent = "Appended using appendChild()";
parent1.appendChild( div1 );

// Example with append()
const div2 = document.createElement( "div" );
const div3 = document.createElement( "div" );
div2.textContent = "Appended";
div3.textContent = "using append()";
parent1.append( div2, div3, " 👋" );