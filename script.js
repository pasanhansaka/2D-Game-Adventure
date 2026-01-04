var runImageNo = 1;
var runWorkerNo = 0;
var runMarginLeft = 150;
var runSound = new Audio("run.mp3");

function run() {

    runSound.play();

    runWorkerNo = setInterval(() => {

        runImageNo = runImageNo + 1;

        if (runImageNo == 9) {
            runImageNo = 1;
        }

        document.getElementById("robo").src = "Run (" + runImageNo + ").png";

        runMarginLeft = runMarginLeft + 10;

        document.getElementById("robo").style.marginLeft = runMarginLeft + "px";

        if (runMarginLeft == 1000) {
            clearInterval(runWorkerNo);
            runSound.pause();
            meleeAttack();
        }

    }, 150);
}

var walkImageNo = 1;
var walkWorkerNo = 0;
var walkMarginLeft = 1200;

function walk() {

    walkWorkerNo = setInterval(() => {

        walkImageNo = walkImageNo + 1;

        if (walkImageNo == 11) {
            walkImageNo = 1;
        }

        document.getElementById("dino").src = "Walk (" + walkImageNo + ").png";

        walkMarginLeft = walkMarginLeft - 2;

        document.getElementById("dino").style.marginLeft = walkMarginLeft + "px";

        if (walkMarginLeft == 1020) {
            clearInterval(walkWorkerNo);
        }

    }, 150);
}

var meleeAttackImageNo = 1;
var meleeAttackWorkerNo = 0;
var meleeAttackSound = new Audio("melee.mp3");
var meleeAttackCount = 0;

function meleeAttack() {

    meleeAttackSound.play();

    meleeAttackWorkerNo = setInterval(() => {

        meleeAttackImageNo = meleeAttackImageNo + 1;

        if (meleeAttackImageNo == 9) {
            meleeAttackImageNo = 1;

            clearInterval(meleeAttackWorkerNo);
            meleeAttackSound.pause();

            meleeAttackCount = meleeAttackCount + 1;

            if (meleeAttackCount == 5) {
                dead();
                alert("You Won!");
            }
        }

        document.getElementById("robo").src = "Melee (" + meleeAttackImageNo + ").png";

    }, 150);
}

var deadImageNo = 1;
var deadWorkerNo = 0;

function dead() {

    deadWorkerNo = setInterval(() => {

        deadImageNo = deadImageNo + 1;

        if (deadImageNo == 9) {
            clearInterval(deadWorkerNo);
            window.location.reload();
        }

        document.getElementById("dino").src = "Dead (" + deadImageNo + ").png"

    }, 150);
}

var time = 30;
var timerWorkerNo = 0;

function timer() {

    timerWorkerNo = setInterval(() => {

        time = time - 1;

        if (time == 0) {
            alert("Game Over! Please try again.");
            window.location.reload();
        }

        document.getElementById("time").innerHTML = "Time:" + time;

    }, 1000);
}

function play(event) {

    if (event.code == "Enter" & timerWorkerNo == 0) {
        run();
        walk();
        timer();
    }

    if (event.code == "Space" & runMarginLeft == 1000 & meleeAttackImageNo == 1) {
        meleeAttack();
    }

}