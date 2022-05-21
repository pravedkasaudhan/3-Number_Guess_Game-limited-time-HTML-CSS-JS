let num = Math.floor(Math.random() * 100);
console.log("num is", num);
let entry = document.getElementById("entry");
let clicked = document.getElementById("btn");
let reset = document.getElementById("resetbtn");
let res = document.getElementById("result");
let time = document.getElementById("timer");
let flag = 0;
function start() {
    clicked.addEventListener('click', () => {
        let val = entry.value;
        console.log(typeof (val));
        if (val > 0 && val <= 100) {
            if (val < num) {
                res.innerHTML += `<p id="msg">Number ${val} is less than the one.</p> <br>`;
            }
            else if (val > num) {
                res.innerHTML += `<p id="msg">Number ${val} is bigger than the one.</p><br>`;
            }
            else {
                alert("you won");
                ;
                res.style.fontSize = '2rem';
                flag = 1;
                entry.disabled = true;
                clicked.disabled = true;
            }
            entry.value = "";
        }
        else {
            alert(" Please enter a number in range 0 to 100 ");
        }
    })
    reset.addEventListener("click", () => {
        num = Math.floor(Math.random() * 100);
        location.reload();
    })
    let countdown = 20;
    let drop = setInterval(() => {

        time.innerText = `Time Left :- ${countdown} seconds`;
        countdown -= 1;
        if (flag == 1) {
            clearInterval(drop);
            res.innerHTML = `<p id="msg">Congo U are Winner!!<br>You guessed in ${19 - countdown} second</p>`;
        }
        if (countdown < 0) {
            res.innerHTML = `<p id="msg">!!SORRY TRY NEXT TIME!!<br>You Ran out of Time<br> Click Reset to Restart the GAME</p>`;
            entry.disabled = true;
            clicked.disabled = true;
            clearInterval(drop);
        }
    }, 1000);
}
// function new1(){

//     let conf=confirm("Do you want to play Number Guess game");
//     if(conf==true){
//         start();
//     }
//     else{
//         new1();
//     }
// }
// new1();
start();
//canvas
let can = document.getElementById("canvas");
can.width = window.innerWidth;
can.height = window.innerHeight;
let con = can.getContext('2d');

function circle(x, y, radi, dx, dy) {
    this.x = x;
    this.y = y;
    this.radi = radi;
    this.dx = dx;
    this.dy = dy;
    this.color = `rgb(${Math.random() * 250},${Math.random() * 250},${Math.random() * 250})`;
    this.new = function () {
        con.beginPath();
        con.arc(this.x, this.y, this.radi, 0, Math.PI * 2, true);
        con.strokeStyle = "rgb(249,55,80)";
        // con.fillStyle=`rgb(20,30,144)`
        con.fillStyle = this.color;
        // con.fillStyle=`rgb(${Math.random()*250},${Math.random()*250},${Math.random()*250})`;
        con.fill();
        con.stroke();
    }
    this.update = function () {
        if (this.x > (innerWidth - this.radi) || this.x < this.radi) {
            this.dx = -this.dx;
        }
        if (this.y > (innerHeight - this.radi) || this.y < this.radi) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.new();
    }
}
let arr = [];
for (i = 0; i <= 200; i++) {
    let radius = Math.random() * 50 + 20;
    let a = Math.random() * (innerWidth - radius * 2) + radius;
    let b = Math.random() * (innerHeight - radius * 2) + radius;
    let velx = (Math.random() - 0.5) * 3
    let vely = (Math.random() - 0.5) * 3;
    cir = new circle(a, b, radius, velx, vely);
    arr.push(cir);
    arr[i].new();
}
function animation() {
    requestAnimationFrame(animation);
    con.clearRect(0, 0, innerWidth, innerHeight);
    con.fillStyle="black";
    con.fillRect(0,0,can.width,can.height);
    // cir.new(a,b,radius);
    for (i = 0; i < arr.length; i++)
        arr[i].update();
}
animation();