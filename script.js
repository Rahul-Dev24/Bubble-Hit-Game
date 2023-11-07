let t1 = gsap.timeline(); //gsap
var score = 0;
var timer = 60;



function makeBubble() {
    var cust = "";
    for(var i = 1;i <= 200;i++){
        let r_count = Math.floor(Math.random()*10);
        cust += `<div class="btn">${r_count}</div>`;
    }
    document.querySelector(".bottom").innerHTML = cust ;
}

function timerOut(){
    setInterval(function timers() {
        if(timer>0){
            timer--;
            document.querySelector("#timeout").innerHTML = timer;
            if(timer == 0){
                document.querySelector(".container").innerHTML = `  <div class="gameover">
                <h1>${score}</h1>
                <h3>Your Score</h3>
                <h1>Game Over !</h1>
                <a href="index.html">Re-Play Game</a>
            </div>`;
                document.querySelector("#hit").textContent = "Game Over";
                document.querySelector("#score").innerHTML = score;

            }
        }
    },1000);

}

function scoreUpdate(){
    var r_count = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = r_count;
    document.querySelector(".bottom").addEventListener("click",function(data){  
        let r1 = Number(data.target.textContent)
        if(r_count === r1){
            r_count = null;
            makeBubble();   
            ani();
            scoreUpdate();
            score += 10;
            document.querySelector("#score").innerHTML = score;
        }
        else{
            // var sound1 = new Audio();
            // sound1.src = "images/sound-16.mp3";
            if(navigator){
                navigator.vibrate(2000);
            }
        }

    });

}

makeBubble();
scoreUpdate();
timerOut();

// ------------------------------------Gsap-----------------------------------------------------



t1.from(".container .top h3",{
    opacity:0,
    y: -50,
    stagger:0.1,
});
function ani(){
    t1.from(".container .bottom div",{
        opacity:0,
        y: -50,
        duration:1.5,

    });
}
