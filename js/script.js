// Il programma dovrà consentire di calcolare il prezzo del panino selezionando o 
// deselezionando gli ingredienti proposti.
//

var calculateButton = document.getElementById('calculate-btn');

// quando clicchiamo sul botton calculate:    il prezzo del burger cambia
calculateButton.addEventListener('click', function() {
    
    var addCheckBox = document.getElementsByClassName('addon');
    console.log(addCheckBox);
// esiste già un prezzo di base che dovrà essere implementato in base al valore delle checkbox checked;
    var prezzoBaseBurger = 15 ;
// estrarre il valore delle checkbox (stringa) con un ciclo FOR ;
    for ( var i=0; i < addCheckBox.length; i++ ) {

        var thisCheck = addCheckBox[i];
        // convertire in numero (parseInt) per utilizzarlo nel calcolo del prezzo finale;
        var prezzoAsNumber = parseInt(thisCheck.value);               

        if ( thisCheck.checked == true ) {

            prezzoBaseBurger += prezzoAsNumber;            
        }        
    }

    var prezzoFinale = prezzoBaseBurger.toFixed(2);


// STAMPO
document.getElementById('final-price').innerHTML ='$ ' + prezzoFinale;
});
