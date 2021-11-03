var cash = 0;
var MoneyPerClick = 1;
var CurrentIdleMoney = 0;
var BalanceAfterClick = document.getElementById("money");
var DisplayCash = document.getElementById("perclick");
var DisplayCashSec = document.getElementById("persec");


function login(){
    var login_box = document.getElementById("login_box");
    login_box.style.visibility = "visible";    
    console.log('elo');
}
function login_hide(){
    var login_box = document.getElementById("login_box");
    login_box.style.visibility = "hidden";   
}

function MoneyClicks()
{
    cash = cash + MoneyPerClick;
    BalanceAfterClick.innerHTML = "Cash: " + cash + "$";
    DisplayCash.innerHTML = "Cash za kliknięcie: " + MoneyPerClick + "$";
}

var PlusOneCost = 100;
function PlusOne()
{
    var Clicksx1 = document.getElementById("x1");
    var AddClicksx1 = 1;
    if (cash < PlusOneCost){
        alert('Nie masz wystarczającej ilości środków');
    }
    else{
        cash = cash - PlusOneCost;
        BalanceAfterClick.innerHTML = "Cash: " + cash + "$";
        MoneyPerClick = MoneyPerClick + AddClicksx1;
        DisplayCash.innerHTML = "Cash za kliknięcie: " + MoneyPerClick;
        PlusOneCost = Math.ceil(PlusOneCost + MoneyPerClick * 2);
        Clicksx1.innerHTML = "Klik +1 <br> Koszt: " + PlusOneCost + "$";
    }
}


var PlusTwoCost = 300;
var IdleTarget = 10;
function PlusTwo()
{
    var Clicksx2 = document.getElementById("x2");
    var AddClicksx2 = 2;
    var IdleMoneyx05 = 0.5;
    if (cash < PlusTwoCost){
        alert('Nie masz wystarczającej ilości środków');
    }
    else{
        cash = cash - PlusTwoCost;
        BalanceAfterClick.innerHTML = "Cash: " + cash + "$";
        MoneyPerClick = MoneyPerClick + AddClicksx2;
        CurrentIdleMoney = CurrentIdleMoney + IdleMoneyx05;
        DisplayCash.innerHTML = "Cash za kliknięcie: " + MoneyPerClick;
        PlusTwoCost = Math.ceil(PlusTwoCost + MoneyPerClick * 3);
        console.log(PlusTwoCost);
        console.log(CurrentIdleMoney);
        DisplayCashSec.innerHTML = "Cash co sekundę: " + CurrentIdleMoney + "$";
        Clicksx2.innerHTML = "Klik +2 <br> Koszt: " + PlusTwoCost + "$";
        if (CurrentIdleMoney > IdleTarget){
            alert("You getting free + " + Math.ceil(IdleTarget/3) + "$ Per second");
            CurrentIdleMoney = Math.ceil(CurrentIdleMoney + IdleTarget/3);
            IdleTarget = IdleTarget * CurrentIdleMoney;
            console.log(IdleTarget);
        }
    }
}


var IdleFiveCost = 500;
var Idlex5Target = 50;
function IdleFive()
{
    var idle5 = document.getElementById("x5");
    var IdleMoneyx5 = 5;
    if (cash < IdleFiveCost){
        alert('Nie masz wystarczającej ilości środków');
    }
    else{
        cash = cash - IdleFiveCost;
        BalanceAfterClick.innerHTML = "Cash: " + cash + "$";
        CurrentIdleMoney = CurrentIdleMoney + IdleMoneyx5;
        IdleFiveCost = Math.ceil(IdleFiveCost + 50);
        DisplayCashSec.innerHTML = "Cash co sekundę: " + CurrentIdleMoney + "$";
        idle5.innerHTML = "Coś x5 <br> Koszt: " + IdleFiveCost + "$";
        if (CurrentIdleMoney > Idlex5Target){
            alert("You getting free + " + Math.ceil(Idlex5Target/3) + "$ Per second");
            CurrentIdleMoney = Math.ceil(CurrentIdleMoney + Idlex5Target/3);
            Idlex5Target = IdleMoneyx5 * CurrentIdleMoney;
            DisplayCashSec.innerHTML = "Cash co sekundę: " + CurrentIdleMoney + "$";
            console.log(CurrentIdleMoney);
        }
    }
}


var IdleTenCost = 1000;
var Idlex10Target = 100;
function IdleTen()
{
    var idle10 = document.getElementById("x10");
    var IdleMoneyx10 = 10;
    if (cash < IdleTenCost){
        alert('Nie masz wystarczającej ilości środków');
    }
    else{
        cash = cash - IdleTenCost;
        BalanceAfterClick.innerHTML = "Cash: " + cash + "$";
        CurrentIdleMoney = CurrentIdleMoney + IdleMoneyx10;
        IdleTenCost = Math.ceil(IdleTenCost + 100);
        DisplayCashSec.innerHTML = "Cash co sekundę: " + CurrentIdleMoney + "$";
        idle10.innerHTML = "Coś x10 <br> Koszt: " + IdleTenCost + "$";
        if (CurrentIdleMoney > Idlex10Target){
            alert("You getting free + " + Math.ceil(Idlex10Target/3) + "$ Per second");
            CurrentIdleMoney = Math.ceil(CurrentIdleMoney + Idlex10Target/3);
            Idlex10Target = Idlex10Target * CurrentIdleMoney;
            DisplayCashSec.innerHTML = "Cash co sekundę: " + CurrentIdleMoney + "$";
            console.log(CurrentIdleMoney);
        }
    }
}


var IdleTwentyCost = 2000;
var Idlex20Target = 200;
function IdleTwenty()
{
    var idle20 = document.getElementById("x20");
    var IdleMoneyx20 = 20;
    if (cash < IdleTwentyCost){
        alert('Nie masz wystarczającej ilości środków');
    }
    else{
        cash = cash - IdleTwentyCost;
        BalanceAfterClick.innerHTML = "Cash: " + cash + "$";
        CurrentIdleMoney = CurrentIdleMoney + IdleMoneyx20;
        IdleTwentyCost = Math.ceil(IdleTwentyCost + 200);
        DisplayCashSec.innerHTML = "Cash co sekundę: " + CurrentIdleMoney + "$";
        idle20.innerHTML = "Coś x20 <br> Koszt: " + IdleTwentyCost + "$";
        if (CurrentIdleMoney > Idlex20Target){
            alert("You getting free + " + Math.ceil(Idlex20Target/3) + "$ Per second");
            CurrentIdleMoney = Math.ceil(CurrentIdleMoney + Idlex20Target/3);
            Idlex20Target = Idlex20Target * CurrentIdleMoney;
            DisplayCashSec.innerHTML = "Cash co sekundę: " + CurrentIdleMoney + "$";
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
        BalanceAfterClick.innerHTML = "Cash: " + cash + "$";
    }
}