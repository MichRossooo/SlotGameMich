var reels = [
    document.getElementById('reel1'),
    document.getElementById('reel2'),
    document.getElementById('reel3')
];
var credits = 10;
var spinCost = 1;
var winReward = 5;

document.getElementById('spinButton').addEventListener('click', function() {
    if (credits >= spinCost) {
        credits -= spinCost;
        updateCredits();

        var symbols = ['🍒', '🍋', '🍊', '🍇', '🍉'];

        function getRandomSymbol() {
            return symbols[Math.floor(Math.random() * symbols.length)];
        }

        reels.forEach(function(reel) {
            reel.style.transform = 'rotateY(360deg)';
            setTimeout(function() {
                reel.style.transform = 'rotateY(0deg)';
                reel.textContent = getRandomSymbol();
            }, 500); // Durata dell'animazione
        });

        setTimeout(function() {
            var message = document.getElementById('message');
            if (reels[0].textContent === reels[1].textContent && reels[1].textContent === reels[2].textContent) {
                message.textContent = 'Hai vinto!';
                message.style.color = 'green';
                credits += winReward;
            } else {
                message.textContent = 'Riprova!';
                message.style.color = 'red';
            }
            updateCredits();
        }, 1000); // Durata complessiva dell'animazione
    } else {
        alert('Non hai abbastanza crediti per fare uno spin.');
    }
});

function updateCredits() {
    document.getElementById('credits').textContent = 'Crediti: ' + credits;
}

// Codice segreto
var secretCode = ['a', 's', 'd'];
var inputSequence = [];

document.addEventListener('keydown', function(event) {
    inputSequence.push(event.key);
    if (inputSequence.length > secretCode.length) {
        inputSequence.shift();
    }

    if (inputSequence.join('') === secretCode.join('')) {
        // Vinci automaticamente
        var winningSymbol = '🍒'; // Simbolo di vittoria
        reels.forEach(function(reel) {
            reel.textContent = winningSymbol;
        });

        var message = document.getElementById('message');
        message.textContent = 'Hai scoperto il codice segreto! Hai vinto!';
        message.style.color = 'green';

        credits += winReward;
        updateCredits();
    }
});

// Aggiungi funzionalità tasto nascosto per ottenere crediti
var secretButton = document.getElementById('secretButton');
secretButton.addEventListener('click', function() {
    credits += 15;
    updateCredits();
});
