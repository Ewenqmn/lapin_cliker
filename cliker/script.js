var score = 0;
var nb_carotte_par_click = 1
var prix_prochain_grossisseur_carotte = 50
var prix_prochain_automatiseur_carottes = 10000
var multiplicateur = 1

// window.onload = function () {
//     var name = prompt("What is your name");
    
//     var space = document.getElementById("name");
    
//     space.innerHTML = "cookie de " + name;
// }



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
// function actualisation_multiplicateur(){
//     document.querySelector("#multiplicateur").innerHTML = multiplicateur
// } 



/******* Actualisation du HTML  *******/

 /************** Evenements du click ****************/

document.querySelector('#lapin').addEventListener('click', click_lapin)

function click_lapin(){const audioElement = new Audio('son/fouet.mp3');
    // Fonction qui s execute sur un click lapin
    // Incrémente le nombre de carottes disponibles
    score = score + nb_carotte_par_click
    actualisation_nb_carottes()
    tombe_carottes()
    audioElement.play()
}

document.querySelector('#carotte').addEventListener('click', acheterDesPlusGrossesCarottes)
const double = new Audio('son/ding.mp3');
const notime = new Audio ('son/point.mp3')

function acheterDesPlusGrossesCarottes() {
    if(score >= prix_prochain_grossisseur_carotte){
        score =  score - prix_prochain_grossisseur_carotte;
        nb_carotte_par_click = nb_carotte_par_click*2
        prix_prochain_grossisseur_carotte *= 2
        actualisation_grossisseur()
        actualisation_nb_carottes()
        double.play()
    }
    else{
        notime.play()
        alert("Revient avec plus de Carottes")
    }

}


const time = new Audio('son/content.mp3');
document.querySelector('#auto').addEventListener('click', automatisationCarottes)

function automatisationCarottes() {
    if(score >= prix_prochain_automatiseur_carottes){
        score =  score - prix_prochain_automatiseur_carottes;
        setInterval(click_lapin, 1000)
        prix_prochain_automatiseur_carottes *= 2
        actualisation_automatiseur()
        actualisation_nb_carottes()
        // actualisation_multiplicateur()
        time.play()
    }
    else{
        notime.play()
        alert("Revient avec plus de Carottes")
    }
}

function save() {
    const sauvegarde = {score: score,
        prix_prochain_grossisseur_carottes: prix_prochain_grossisseur_carotte, 
        prix_prochain_automatiseur_carottes: prix_prochain_automatiseur_carottes,
        
    }
    localStorage.setItem("sauvegarde", JSON.stringify(sauvegarde));
}
  
function load() {
  
    let sauvegarde = localStorage.getItem("sauvegarde");
    sauvegarde = JSON.parse(sauvegarde)
    score = sauvegarde.score;
    prix_prochain_grossisseur_carotte = sauvegarde.prix_prochain_grossisseur_carottes;
    prix_prochain_automatiseur_carottes = sauvegarde.prix_prochain_automatiseur_carottes;

    actualisation_nb_carottes()
    actualisation_grossisseur()
    actualisation_automatiseur()

}
  
function supprimer() {
     localStorage.clear("sauvegarde");
}


function tombe_carottes(){
    const element = document.createElement('img');
    element.src = './image/carotte volante.png'
    element.className = 'carottevolante'
    element.style.left = 350+ 'px';
    element.style.top = -200 + 'px';
    document.querySelector('body').appendChild(element)
}



var message_interval= setInterval(message_aleatoire, 120000) 
var message = ["Mange plus de carottes tu seras aimable.", "Fait gaffe t'as les fesses roses.", "ALLEZ FOUETTE LE !!", "Clique tu pers 1,42 calories.", "Lapin la pine."]

function message_aleatoire() {

  var random = [Math.floor(Math.random()*message.length)];

  var message_random = message[random];

  alert(message_random)

}