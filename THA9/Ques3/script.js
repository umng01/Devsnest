var grid = document.querySelector('.grid');
const bookedSeatsElement= document.querySelector('.bookseats');
const remainingSeatsElement=document.querySelector('.remainingseats');

var bookSeats=0;
var remainingSeats =36;

bookedSeatsElement.innerText=bookSeats;
remainingSeatsElement.innerText=remainingSeats;

window.onload = () => {
    for (let i=0;i<6;i++){
        var row = document.createElement('div');
        row.className = 'row';
        grid.appendChild(row);

        for (let j=0;j<6;j++){
            var col = document.createElement('div');
            col.className = 'col';
            row.appendChild(col);
        }
    }
}

setTimeout(() => {
    var cols = document.querySelectorAll('.col');
    cols.forEach(col => {
        col.addEventListener('click', () => {
            if(col.classList.contains('boxclicked')){
                col.classList.remove('boxclicked')
                bookSeats-=1;
                remainingSeats+=1;
            }
            else{
                col.classList.add('boxclicked')
                bookSeats+=1;
                remainingSeats-=1;
            }
            bookedSeatsElement.innerText=bookSeats;
            remainingSeatsElement.innerText=remainingSeats;
    
        });
    });
}, );