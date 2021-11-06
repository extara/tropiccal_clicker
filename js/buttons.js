var cash = 0;
var CPC = 1;
var CPS = 0;
var first_multipier = 0.2;
var first_count = 0;
var BalanceAfterClick = document.getElementById("money");
var DisplayCash = document.getElementById("perclick");
var DisplayCashSec = document.getElementById("persec");


//Money given per one click
function cash_per_click(){
    cash = cash + CPC;
    BalanceAfterClick.innerHTML = "Cash: " + cash.toFixed(1) + "$";
    DisplayCash.innerHTML = "Cash za kliknięcie: " + CPC + "$";
}

//Since there rename variables to sensible names
var PlusOneCost = 30;
function cost30()
{
    var Idle02 = document.getElementById("x1");
    if (cash < PlusOneCost){
        alert('Nie masz wystarczającej ilości środków');
    }
    else{
        cash = cash - PlusOneCost;
        BalanceAfterClick.innerHTML = "Cash: " + cash.toFixed(1) + "$";
        CPS = CPS + first_multipier;
        PlusOneCost = Math.ceil(CPS * 10 + PlusOneCost);
        DisplayCashSec.innerHTML = "Cash co sekundę: " + CPS.toFixed(1) + "$";
        Idle02.innerHTML = "Idle +0.2 <br> Koszt: " + PlusOneCost + "$";
    }
}


function draw(){
    var i = 1;
    if (i > 0) {
        cash = CPS + cash;
        BalanceAfterClick.innerHTML = "Cash: " + cash.toFixed(1) + "$";
    }
};
var mainloop = function() {draw()}; 
setInterval(mainloop, 1000);