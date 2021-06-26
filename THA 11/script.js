var skip = document.getElementById('skip');
var score = document.getElementById('score');
var totalscore = document.getElementById('totalscore');
var countdown = document.getElementById('countdown');
var count = 0;
var scorecount = 0;
var duration = 0;
var qaset = document.querySelectorAll('.qaset');
var qaansrow = document.querySelectorAll('.qaset .qaansrow input');

skip.addEventListener('click', function(){
    step()
    duration = 10
})

qaansrow.forEach(function(qaansrowsingle){
    qaansrowsingle.addEventListener('click', function(){
        setTimeout(() => {
            step()
            duration = 10
        }, 500);

        var valid = this.getAttribute("valid");
        if(valid == "valid"){
            scorecount+=2
            score.innerHTML = scorecount;
            totalscore.innerHTML = scorecount;
        }else{
            score.innerHTML = scorecount;
            totalscore.innerHTML = scorecount;
        }
    })
})
function step(){
    count+=1;
    for(var i =0;i< qaset.length;i++){
        qaset[i].className = 'qaset';
    }
    qaset[count].className = 'qaset active';
    if(count == 5){
        skip.style.display = 'none';
        clearInterval(durationtime);
        countdown.innerHTML = 0;
    }
}

var durationtime = setInterval(() => {
    if(duration == 10){
        duration = 0;
    }
    duration+=1
    countdown.innerHTML=duration;
    if(countdown.innerHTML == "10"){
        step()
    }
}, 1000);