// 1. Element Selection
function selectProduct () {
    const product = document.getElementById( "product" );
    product.style.backgroundColor = "lightgreen";
}

// 2. innerText vs textContent
function showTextDifference () {
    const el = document.getElementById( "textExample" );
    const output = document.getElementById( "textOutput" );
    output.innerHTML = `
        <strong>innerText:</strong> ${ el.innerText }<br>
        <strong>textContent:</strong> ${ el.textContent }`;
}

// 3. setAttribute and getAttribute
function updateLink () {
    const link = document.getElementById( "profileLink" );
    link.setAttribute( "href", "https://github.com/example-user" );
    link.innerText = "Visit GitHub Profile";
    alert( "Link updated to: " + link.getAttribute( "href" ) );
}

// 4. classList
function toggleHighlight () {
    const para = document.getElementById( "stylePara" );
    para.classList.toggle( "highlight" );
}

// 5. Parent and Sibling
function validateEmail () {
    const input = document.getElementById( "emailInput" );
    const label = input.previousElementSibling;
    const value = input.value.trim();

    if ( !value ) {
        label.style.color = "red";
        alert( "Please enter your email." );
    } else {
        label.style.color = "black";
        alert( "Email is valid." );
    }
}