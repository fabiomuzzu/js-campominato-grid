// 1 - Dichiaro const per il pulsante play
const play_btn = document.getElementById('play_btn');

// 2 - Creo funzione per il click del pulsante play
play_btn.addEventListener('click', function(){

    // 4 - Creo funzione per creare singola cella
    function createCell(num){

        // Creo un div chiamato element
        const element = document.createElement('div');
        // Gli aggiungo la classe square per stilizzarlo
        element.classList.add('square');
        // Gli inserisco del testo che sarà il numero della casella
        element.innerText = num;

        return element;
    }

    // 5 - Recupero l'elemento che contiene la griglia
    const grid = document.getElementById('grid');

    // 6 - Creo ciclo for per creare 100 celle uguali
    for(let i=0; i<100; i++){
        
        // Creo la cella
        let square = createCell(i+1);

        // Assegnazione nuova classe al click della casella
        square.addEventListener('click', function(){
            this.classList.toggle('clicked');
        })

        // Appendo la cella alla griglia
        grid.appendChild(square);
    }

});