function getTextNumber(id)
{
    const textField = document.getElementById(id).innerText;
    const number = parseInt(textField);
    return number;
}

function getInputNumber(id)
{
    const textField = document.getElementById(id).value;
    const number = parseInt(textField);
    return number;
}
function updateSpanText(id, amount)
{
    const totalBalance = 5 * amount;
    document.getElementById(id).innerText = totalBalance;
    return totalBalance;
}

function updateTotalExpence(id, playerAmount, managerAmount, coacherAmount)
{
    const totalAmount = playerAmount + managerAmount + coacherAmount;
    document.getElementById(id).innerText = totalAmount;
}

function buttonUpdate(id)
{
    document.getElementById(id).disabled = true;
    document.getElementById(id).style.backgroundColor = '#cbddfb80';
}

function selectedPlayer(playerName)
{
    const playerField1 = document.getElementById('player-1');
    const player1 = document.getElementById('player-1').innerText;

    const playerField2 = document.getElementById('player-2');
    const player2 = document.getElementById('player-2').innerText;

    const playerField3 = document.getElementById('player-3');
    const player3 = document.getElementById('player-3').innerText;

    const playerField4 = document.getElementById('player-4');
    const player4 = document.getElementById('player-4').innerText;

    const playerField5 = document.getElementById('player-5');
    const player5 = document.getElementById('player-5').innerText;


    if(player1 === '')
    {
        playerField1.innerText = playerName;

    }
    else if(player2 === '')
    {
        playerField2.innerText = playerName;
    }
    else if(player3 === '')
    {
        playerField3.innerText = playerName;
    }
    else if(player4 === '')
    {
        playerField4.innerText = playerName;
    }
    else if(player5 === '')
    {
        playerField5.innerText = playerName;
    }
    else
    {
        console.log("Best five player already have selected.");
    }

}
