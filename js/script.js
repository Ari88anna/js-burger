// Il programma dovrà consentire di calcolare il prezzo del panino selezionando o 
// deselezionando gli ingredienti proposti.
//

var calculateButton = document.getElementById('calculate-btn');

// quando clicchiamo sul botton calculate:    il prezzo del burger cambia
calculateButton.addEventListener('click', function() {
    
    var addCheckBox = document.getElementsByClassName('addon');
    console.log(addCheckBox);

    for ( var i=0; i < addCheckBox.length; i++ ) {
        var thisCheck = addCheckBox[i];
        console.log(i, thisCheck.value)
        console.log(i, thisCheck.checked)
    }
// estrarre il valore delle checkbox (stringa) con un ciclo FOR ;
// convertire in numero (parseInt) per utilizzarlo nel calcolo del prezzo finale;
// esiste già un prezzo di base che dovrà essere implementato in base al valore delle checkbox checked;
});
