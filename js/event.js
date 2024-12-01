console.log('events')
// add onclick function
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option 2
document.getElementById('make-pink').addEventListener('click', function(){
    document.body.style.backgroundColor = 'pink';
})