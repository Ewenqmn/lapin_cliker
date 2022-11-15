var score = 0;
var nb_carotte_par_click = 1
var click = 2
var prix_prochain_grossisseur_carotte = 50
var prix_prochain_automatiseur_carottes = 10000
var multiplicateur = 1

window.onload = function () {
    var name = prompt("What is your name");
    
    var space = document.getElementById("name");
    
    space.innerHTML = "cookie de " + name;
}



 /************** Actualisation du HTML ****************/
function sourisEnBas(){
    document.querySelector('#lapin').src="image/lapintwerkgauche.png"
}
document.querySelector("#lapin").addEventListener("mousedown", sourisEnBas)


function sourisEnHaut(){
    document.querySelector('#lapin').src="image/lapintwerkdroit.png"
}
document.querySelector("#lapin").addEventListener("mouseup", sourisEnHaut)

function actualisation_nb_carottes() {
    document.querySelector('#jeu').innerHTML = score;
}
function actualisation_grossisseur(){
    document.querySelector("#grossisseur").innerHTML = prix_prochain_grossisseur_carotte
}
function actualisation_automatiseur(){
    document.querySelector("#automatiseur").innerHTML = prix_prochain_automatiseur_carottes
}
function actualisation_multiplicateur(){
    document.querySelector("#multiplicateur").innerHTML = multiplicateur
} 


/******* Actualisation du HTML  *******/

 /************** Evenements du click ****************/

document.querySelector('#lapin').addEventListener('click', click_lapin)

function click_lapin(){
    // Fonction qui s execute sur un click lapin
    // Incrémente le nombre de carottes disponibles
    score = score + nb_carotte_par_click
    actualisation_nb_carottes()
}

document.querySelector('#carotte').addEventListener('click', acheterDesPlusGrossesCarottes)

function acheterDesPlusGrossesCarottes() {
    if(score >= prix_prochain_grossisseur_carotte){
        score =  score - prix_prochain_grossisseur_carotte;
        nb_carotte_par_click = nb_carotte_par_click*2
        prix_prochain_grossisseur_carotte *= 2
        actualisation_grossisseur()
        actualisation_nb_carottes()
    }
    else{
        alert("Revient avec plus de Carottes")
    }

}

document.querySelector('#auto').addEventListener('click', automatisationCarottes)

function automatisationCarottes() {
    if(score >= prix_prochain_automatiseur_carottes){
        score =  score - prix_prochain_automatiseur_carottes;
        setInterval(click_lapin, 1000)
        prix_prochain_automatiseur_carottes *= 2
        actualisation_automatiseur()
        actualisation_nb_carottes()
        actualisation_multiplicateur()
    }
    else{
        alert("Revient avec plus de Carottes")
    }
}


const audioElement = new Audio('son/fouet.mp3');
document.querySelector('#lapin').addEventListener('click',audio);
function audio(){
    audioElement.play()
}


const time = new Audio('son/content.mp3');
const notime = new Audio ('son/point.mp3')
document.querySelector('#auto').addEventListener('click',multi);
function multi(){
    if(score >= prix_prochain_automatiseur_carottes){
        score =  score - prix_prochain_automatiseur_carottes;
    time.play()
}
else{
    notime.play()
}
}


const double = new Audio('son/ding.mp3');
document.querySelector('#carotte').addEventListener('click',grossisseur);
function grossisseur(){
    if(score >= prix_prochain_grossisseur_carotte){
        score =  score - prix_prochain_grossisseur_carotte;
        nb_carotte_par_click = nb_carotte_par_click*2
        double.play()
    }
    else{
        notime.play()
    }
   
}

