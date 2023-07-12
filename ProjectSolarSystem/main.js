document.addEventListener("DOMContentLoaded", () => {
    const mass=document.querySelector('#mass');
    const planet=document.querySelector('#planet');
    const calcButton=document.querySelector('.button');
    const result=document.querySelector('.result')
    calcButton.addEventListener("click", ()=> {
        const selectedOption = planet.options[planet.selectedIndex].value;
        if (isNaN(mass.value) && selectedOption==0) {
            result.innerHTML= `<h1> Enter a valid mass and a planet</h1>`
        }
        else if(isNaN(mass.value) || mass.value==''){
            result.innerHTML= `<h1> Enter a valid mass </h1>`
        }
        else if(selectedOption==0){
            result.innerHTML= `<h1> Enter the planet </h1>`
        }
        else{
            console.log(selectedOption)
            console.log("Selected planet: " + selectedOption);
            const solution=mass.value*selectedOption;
            let weight=solution.toFixed(2) +" N";
            let answerPlanet= planet.options[planet.selectedIndex].innerHTML
            result.innerHTML= `<h1> The weight of the object on ${answerPlanet} is ${weight} </h1>`
        }
    });
});
