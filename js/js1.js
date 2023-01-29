
// Messi
document.getElementById('btn-messi').addEventListener('click',function(){
    const playerName = document.getElementById('text-messi').innerText;
    buttonUpdate('btn-messi');
    selectedPlayer(playerName);


})
// Neymar
document.getElementById('btn-neymar').addEventListener('click',function(){
    const playerName = document.getElementById('text-neymar').innerText;
    buttonUpdate('btn-neymar');
    selectedPlayer(playerName);

})
// Mpappe
document.getElementById('btn-mpappe').addEventListener('click',function(){
    const playerName = document.getElementById('text-mpappe').innerText;
    buttonUpdate('btn-mpappe');
    selectedPlayer(playerName);

})
// Hakimi
document.getElementById('btn-hakimi').addEventListener('click',function(){
    const playerName = document.getElementById('text-hakimi').innerText;
    buttonUpdate('btn-hakimi');
    selectedPlayer(playerName);

})
// Dimaria
document.getElementById('btn-Dimaria').addEventListener('click',function(){
    const playerName = document.getElementById('text-Dimaria').innerText;
    buttonUpdate('btn-Dimaria');
    selectedPlayer(playerName);

})
// Marquinhos
document.getElementById('btn-marquinhos').addEventListener('click',function(){
    const playerName = document.getElementById('text-marquinhos').innerText;
    buttonUpdate('btn-marquinhos');
    selectedPlayer(playerName);

})
// Sergio
document.getElementById('btn-sergio').addEventListener('click',function(){
    const playerName = document.getElementById('text-sergio').innerText;
    buttonUpdate('btn-sergio');
    selectedPlayer(playerName);

})
// Presnel
document.getElementById('btn-presnel').addEventListener('click',function(){
    const playerName = document.getElementById('text-presnel').innerText;
    buttonUpdate('btn-presnel');
    selectedPlayer(playerName);

})
// Junior
document.getElementById('btn-junior').addEventListener('click',function(){
    const playerName = document.getElementById('text-junior').innerText;
    buttonUpdate('btn-junior');
    selectedPlayer(playerName);

})

// Per player Balance
document.getElementById('btn-calculate').addEventListener('click',function(){
    const inputNumber = getInputNumber("player-input-field");
    updateSpanText('player-balance', inputNumber);
    
})
// Final calculate
document.getElementById('btn-final-cal').addEventListener('click',function(){
    const managerAmount = getInputNumber("manager-field");
    const coacherAmount = getInputNumber("coacher-field");
    const playerAmount = getTextNumber('player-balance');

    updateTotalExpence('final-text', playerAmount, managerAmount, coacherAmount);
    
})

