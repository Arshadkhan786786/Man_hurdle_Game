let time=0;
let s=1;
document.onkeydown = function (a) {
    if (a.keyCode == 32) {
        man = document.querySelector('.man');
        man.classList.add('manrun');
        setTimeout(() => {
            man.classList.remove('manrun');
        }, 700);
    }
}

setInterval(function() {
    man = document.querySelector('.man');
    let mx = parseInt(window.getComputedStyle(man).getPropertyValue("top"));
    hurdle = document.querySelector('.hurdle');
    let hx = parseInt(window.getComputedStyle(hurdle).getPropertyValue("left"));
    gameover = document.querySelector('.gameover');
    heading = document.querySelector('.heading');
    times=document.querySelector('.time');
    
    if(hx < 30 && hx >-18 && mx > 400)
    {   
        s=0;
        alert("     GAME OVER   \n"+"YOURS SCORE = "+time);
        heading.innerHTML="";
        times.innerHTML="";
        gameover.innerHTML="GAMEOVER : RELOAD TO PLAY AGAIN";
        hurdle.classList.remove('hurdlerun1');
        times.innerHTML="YOURS SURVIVAL TIME ="+time;
        setInterval(() => {
            times.classList.remove('time');
            times.innerHTML="";
        }, 5000);    
    
    }
    else
    {   
        if(s!=0)
        {  
            times.innerHTML="SURVIVAL TIME ="+time++;
            if(hx<-350&&hx>-450)
        {   
             n = parseFloat(window.getComputedStyle(hurdle).getPropertyValue("animation-duration"));
             if(n>2)
             {  n=n-0.1;
                hurdle.style.animationDuration = n + 's';
             }
             else
             {
                n=1.7;
                hurdle.style.animationDuration = n + 's';
             }
        } 
        }
    }
}, 10);
