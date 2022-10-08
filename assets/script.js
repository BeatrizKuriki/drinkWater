const smallCups = document.querySelectorAll('.cup-small');
const liters = document.querySelectorAll('liters')
const percentage = document.querySelectorAll('percentage');
const remained = document.querySelectorAll('remained');

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () =>  highlightCups(idx))
    })



function highlightCups(idx){
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    smallCups.forEach((cup, idx2)=>{
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    }
    )
}