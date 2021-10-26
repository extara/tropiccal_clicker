var cash = 0;
var MoneyPerClick = 1;
var CurrentIdleMoney = 0;
var BalanceAfterClick = document.getElementById("money");
var DisplayCash = document.getElementById("perclick");
var DisplayCashSec = document.getElementById("persec");



function MoneyClicks()
{
    cash = cash + MoneyPerClick;
    BalanceAfterClick.innerHTML = "Cash: " + Math.round(cash * 100) / 100 + "$";
    DisplayCash.innerHTML = "Cash za kliknięcie: " + MoneyPerClick + "$";
}

var PlusOneCost = 30;
function PlusOne()
{
    var Idle02 = document.getElementById("x1");
    var IdleMoneyx02 = 0.2;
    if (cash < PlusOneCost){
        alert('Nie masz wystarczającej ilości środków');
    }
    else{
        cash = cash - PlusOneCost;
        BalanceAfterClick.innerHTML = "Cash: " + Math.round(cash * 100) / 100 + "$";
        CurrentIdleMoney = CurrentIdleMoney + IdleMoneyx02;
        PlusOneCost = Math.ceil(CurrentIdleMoney * 10 + PlusOneCost);
        console.log(PlusOneCost);
        console.log(CurrentIdleMoney);
        DisplayCashSec.innerHTML = "Cash co sekundę: " + Math.round(CurrentIdleMoney * 100) / 100 + "$";
        Idle02.innerHTML = "Idle +0.2 <br> Koszt: " + PlusOneCost + "$";
        if (CurrentIdleMoney > IdleTarget){
            alert("You getting free + " + Math.ceil(IdleTarget/3) + "$ Per second");
            CurrentIdleMoney = Math.ceil(CurrentIdleMoney + IdleTarget/3);
            IdleTarget = IdleTarget * CurrentIdleMoney;
            console.log(IdleTarget);
        }
    }
}

var PlusTwoCost = 80;
var IdleTarget = 10;
function PlusTwo()
{
    var Idle1 = document.getElementById("x2");
    var IdleMoneyx1 = 1;
    if (cash < PlusOneCost){
        alert('Nie masz wystarczającej ilości środków');
    }
    else{
        cash = cash - PlusTwoCost;
        BalanceAfterClick.innerHTML = "Cash: " + Math.round(cash * 100) / 100 + "$";
        CurrentIdleMoney = CurrentIdleMoney + IdleMoneyx1;
        PlusTwoCost = Math.ceil(CurrentIdleMoney * 10 + PlusTwoCost);
        DisplayCashSec.innerHTML = "Cash co sekundę: " + Math.round(CurrentIdleMoney * 100) / 100 + "$";
        Idle1.innerHTML = "Idle +1 <br> Koszt: " + PlusTwoCost + "$";
        if (CurrentIdleMoney > IdleTarget){
            alert("You getting free + " + Math.ceil(IdleTarget/3) + "$ Per second");
            CurrentIdleMoney = Math.ceil(CurrentIdleMoney + IdleTarget/3);
            IdleTarget = IdleTarget * CurrentIdleMoney;
        }
    }
}


var IdleFiveCost = 1200;
var Idlex5Target = 50;
function IdleFive()
{
    var Idle5 = document.getElementById("x5");
    var IdleMoneyx9 = 9;
    if (cash < IdleFiveCost){
        alert('Nie masz wystarczającej ilości środków');
    }
    else{
        cash = cash - IdleFiveCost;
        BalanceAfterClick.innerHTML = "Cash: " + Math.round(cash * 100) / 100 + "$";
        CurrentIdleMoney = CurrentIdleMoney + IdleMoneyx9;
        IdleFiveCost = Math.ceil(CurrentIdleMoney * 10 + IdleFiveCost);
        DisplayCashSec.innerHTML = "Cash co sekundę: " + Math.round(CurrentIdleMoney * 100) / 100 + "$";
        Idle5.innerHTML = "Idle +1 <br> Koszt: " + IdleFiveCost + "$";
        if (CurrentIdleMoney > IdleTarget){
            alert("You getting free + " + Math.ceil(IdleTarget/3) + "$ Per second");
            CurrentIdleMoney = Math.ceil(CurrentIdleMoney + IdleTarget/3);
            IdleTarget = IdleTarget * CurrentIdleMoney;
        }
    }
}


var IdleTenCost = 15000;
var Idlex10Target = 100;
function IdleTen()
{
    var Idle10 = document.getElementById("x10");
    var IdleMoneyx61 = 61;
    if (cash < IdleFiveCost){
        alert('Nie masz wystarczającej ilości środków');
    }
    else{
        cash = cash - IdleTenCost;
        BalanceAfterClick.innerHTML = "Cash: " + Math.round(cash * 100) / 100 + "$";
        CurrentIdleMoney = CurrentIdleMoney + IdleMoneyx61;
        IdleTenCost = Math.ceil(CurrentIdleMoney * 10 + IdleTenCost);
        DisplayCashSec.innerHTML = "Cash co sekundę: " + Math.round(CurrentIdleMoney * 100) / 100 + "$";
        Idle10.innerHTML = "Idle +1 <br> Koszt: " + IdleTenCost + "$";
        if (CurrentIdleMoney > IdleTarget){
            alert("You getting free + " + Math.ceil(IdleTarget/3) + "$ Per second");
            CurrentIdleMoney = Math.ceil(CurrentIdleMoney + IdleTarget/3);
            IdleTarget = IdleTarget * CurrentIdleMoney;
        }
    }
}


var IdleTwentyCost = 80000;
var Idlex20Target = 200;
function IdleTwenty()
{
    var Idle20 = document.getElementById("x20");
    var IdleMoneyx140 = 140;
    if (cash < IdleTwentyCost){
        alert('Nie masz wystarczającej ilości środków');
    }
    else{
        cash = cash - IdleTwentyCost;
        BalanceAfterClick.innerHTML = "Cash: " + Math.round(cash * 100) / 100 + "$";
        CurrentIdleMoney = CurrentIdleMoney + IdleMoneyx140;
        IdleTwentyCost = Math.ceil(CurrentIdleMoney * 10 + IdleTwentyCost);
        DisplayCashSec.innerHTML = "Cash co sekundę: " + Math.round(CurrentIdleMoney * 100) / 100 + "$";
        Idle20.innerHTML = "Idle +1 <br> Koszt: " + IdleTwentyCost + "$";
        if (CurrentIdleMoney > IdleTarget){
            alert("You getting free + " + Math.ceil(IdleTarget/3) + "$ Per second");
            CurrentIdleMoney = Math.ceil(CurrentIdleMoney + IdleTarget/3);
            IdleTarget = IdleTarget * CurrentIdleMoney;
        }
    }
}



setTimeout(start, 1000);
function start() {
  setInterval(increase, 1000);
}

function increase() {
    var i = 1;
    if (i > 0) {
        cash = CurrentIdleMoney + cash;
        BalanceAfterClick.innerHTML = "Cash: " +  Math.round(cash * 100) / 100 + "$";
    }
}
