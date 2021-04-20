var subButton = document.getElementById("button");
console.log(subButton);

subButton.addEventListener("click", function (){
    console.log(nomePanino);

    var nomePanino = document.getElementById("name")

    if (!nomePanino) {
        alert("Scrivi prima il nome del panino");
    }

    if (nomePanino.value.length === 0) {
        alert("Inserire un nome adeguato");
    } else {
        var costoTotale = 50;
        var cheese = document.getElementById("cheese-add");
        if(cheese.checked){
            costoTotale+= cheese.value;
        }

        var tomato = document.getElementById("tomato-add");
        if(tomato.checked){
            costoTotale+= tomato.value;
        }

        var egg = document.getElementById("egg-add");
        if(egg.checked){
            costoTotale+= egg.value;
        }

        var lettuce = document.getElementById("lettuce-add");
        if(lettuce.checked){
            costoTotale+= lettuce.value;
        }

        var mustard = document.getElementById("mustard-add");
        if(mustard.checked){
            costoTotale+= mustard.value;
        }

        var ketchup = document.getElementById("ketchup-add");
        if(ketchup.checked){
            costoTotale+= ketchup.value;
        }
    }
} )


var codiciSconto = ["alfroe34jd", "dkf56778jgjdl", "alpe345oytir", "apwqor09mcng"];
var couponInput = document.getElementById("coupon");
var calculateBtn = document.getElementById("button");


calculateBtn.addEventListener("click", function () {
    var costoTotale = 50;
})

function checkCodici(codiceUtente, listaCodici) {
    var codUtenteFormattato = codiceUtente.toLowerCase();
    elementExist = false;

    if (listaCodici.indexOf(codUtenteFormattato) > -1) {
            elementExist = true
        }

    for (var i = 0; i < listaCodici.length; i++) {
            var element = listaCodici[i];

        if (codUtenteFormattato === element) {
                elementExist = true
        }
    }
}

