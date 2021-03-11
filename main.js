const dropdown = document.querySelector('.dropdown');
const answer = document.querySelectorAll('.answer');

dropdown.addEventListener('click', function(){
    toggleHidden();
})

function toggleHidden() {
    answer.classList.toggle('hidden');
}

// answer.forEach(function (a) {
//     answer.addEventListener('click', function(e) {
//         toggleHidden();
//     })
// })