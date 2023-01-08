const ALLBUTTONS = document.querySelectorAll('.calc-button');

console.log(ALLBUTTONS);



ALLBUTTONS.forEach(item => item.addEventListener('click', test));

function test () {
    console.log('test');
}