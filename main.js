let heading = document.getElementsByTagName("h2");
// console.log(typeof heading);
for (let i = 0; i <= 2; i++) {
    heading[i].addEventListener('click', function (event) {
        let targetElement = event.target; //
        let parentDiv = targetElement.parentNode;
        let paragraphDiv = parentDiv.getElementsByTagName('p');
        let pElement = paragraphDiv[0];
        pElement.classList.toggle('hide');
    });
}