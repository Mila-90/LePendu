//var btnA = document.getElementById("btnA");
var textMsg = document.getElementById("textMsg");
var dictionnaire = ["ANGE", "TRUC", "DIEU", "MICHEL", "RITA", "MARIE", "CAVERNE"];
var indices = ["A des ailles", "", "Supreme", "Prénom masculin", "Sainte", "Prénom féminin", "Grotte"];
var mot;
var index;
var cases = [];
// k=index du fichier image pendu
var k=0;
var trouve= false;

function choixDuMot() {
    index = Math.floor(Math.random() * dictionnaire.length);
    let motChoisi = dictionnaire[index];
    console.log("index :", index, " mot choisi ", motChoisi)
    return motChoisi;
}

function clavier(lettre) {
    textMsg.innerHTML = " La lettre " + lettre + " a été cliqué " + "mot " + mot;
    var boutton = document.getElementById("btn" + lettre);
    boutton.classList.add("btn-clavier--gris");
    boutton.disabled = true;
    
    trouve=false;

    console.log(" av trouve="+trouve);

    var longeurDuMot = mot.length;
    for (var i = 0; i < longeurDuMot; i++) 
    {
        if (mot[i] == lettre) {
            cases[i].innerHTML = lettre;
            textMsg.innerHTML = "vrai";
            trouve= true;
        } 

    }
    console.log("ap trouve="+trouve);
  if (trouve==false){
    k ++;
    var imagePendu = document.getElementById("imgPendu");
    var nomFichier = "./img/pendu"+k+".gif";
    console.log(nomFichier);
    imagePendu.setAttribute("src",nomFichier );
   
  }
        

    

}
function initMot(mot) {

    let longeurDuMot = mot.length;

    // initialise le tableau du mot à trouver
    for (var i = 0; i < longeurDuMot; i++) {
        var td = document.createElement("TD");
        td.id = i;
        td.innerHTML = "_";
        document.getElementById("mot-tr").appendChild(td);
        cases[i] = document.getElementById(i);
    }

    document.getElementById("indice").innerHTML = indices[index];

}
function init() {

    mot = choixDuMot();
    console.log(mot, " ", mot.length);
    initMot(mot);
}
