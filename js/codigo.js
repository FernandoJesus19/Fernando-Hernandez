let ataqueJugador
let aleatorioataqueEnemigo 
let resultadoBatalla
let vidasJugador = 3
let vidasDelEnemigo = 3


function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    let botonReiniciar = document.getElementById ("boton-reiniciar")
    botonReiniciar.addEventListener('click', reiniciar)
    let botonFuego= document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra= document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
    let seccionSeleccionarAtaque= document.getElementById("Seleccionar-ataque")
    seccionSeleccionarAtaque.style.display = "none"
    let seccionReiniciar = document.getElementById("boton-reiniciar")
    seccionReiniciar.style.display= "none"
}

function seleccionarMascotaJugador() { 
    let seccionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    seccionSeleccionarMascota.style.display= "none"

    let seccionSeleccionarAtaque = document.getElementById("Seleccionar-ataque")
    seccionSeleccionarAtaque.style.display  = "block"

    let inputHipodoge= document.getElementById("hipodoge")
    let inputCapipepo= document.getElementById("capipepo")
    let inputRatigueya= document.getElementById("ratigueya")
    let inputMascotaJugador= document.getElementById("mascota-jugador")
   


    if(inputHipodoge.checked) {
       alert("Has seleccionado Hipodoge")
    inputMascotaJugador.innerHTML="(Hipodoge)"

   
    } else if (inputCapipepo.checked) {
       alert("Has Seleccionado Capipepo")
       inputMascotaJugador.innerHTML="(Capipepo)"

    
    } else if (inputRatigueya.checked){
        alert("Has Seleccionado a La Ratigueya")
        inputMascotaJugador.innerHTML="(Ratigueya)"

    
    } else alert("No seleccionastes nada")
    
    seleccionarmascotaenemiga()
}
function seleccionarmascotaenemiga(){
    let aleatorioataque=aleatorio(1,3)
    let aleatorioMascotaEnemigo= document.getElementById("mascota-enemigo")
 
    if(aleatorioataque==1){
    aleatorioMascotaEnemigo.innerHTML="(Hipodoge)"
    
    } else if(aleatorioataque==2){
    aleatorioMascotaEnemigo.innerHTML="(Capipepo)"
    
    }else  if(aleatorioataque==3){
        aleatorioMascotaEnemigo.innerHTML="(Ratigueya)"
    } 
}      



function ataqueFuego(){
    ataqueJugador="FUEGO"
    seleccionarAtaqueEnemigo()
}

function ataqueAgua(){
    ataqueJugador="AGUA"
    seleccionarAtaqueEnemigo()
}

function ataqueTierra(){
    ataqueJugador="TIERRA"
    seleccionarAtaqueEnemigo()
}

function seleccionarAtaqueEnemigo(){
       
    let aleatorioataque2 = aleatorio(1,3)
    
        if(aleatorioataque2 == 1 ){
        aleatorioataqueEnemigo = "FUEGO"
    
        }
         else if(aleatorioataque2 == 2){
        aleatorioataqueEnemigo= "AGUA"
        }
        else {
        aleatorioataqueEnemigo = "TIERRA"
    }
    resultados()
        
}
function resultados(){
    
    spanVidasJugador = document.getElementById("vidas-jugador")
    spanVidasDelEnemigo = document.getElementById ("vidas-enemigo")
    
    if(ataqueJugador==aleatorioataqueEnemigo){
        resultadoBatalla = "EMPATE!!!"
    } else if (ataqueJugador ==  "AGUA" && aleatorioataqueEnemigo ==  "FUEGO" || ataqueJugador ==  "FUEGO" && aleatorioataqueEnemigo ==  "TIERRA" || ataqueJugador ==  "TIERRA" && aleatorioataqueEnemigo ==  "AGUA"){ 
        resultadoBatalla = "GANASTES!!!"
        vidasDelEnemigo--
        spanVidasDelEnemigo.innerHTML = vidasDelEnemigo
    } else {
        resultadoBatalla= "PERDISTES!!!"
        vidasJugador--
        spanVidasJugador.innerHTML= vidasJugador   
    }
    crearMensajes()
    revisarVidas()
}      
    function revisarVidas(){
        if (vidasDelEnemigo==0){
        crearMensajesFinal("GANASTES")
        }
        else if (vidasJugador==0){
        crearMensajesFinal("PERDISTES")
        }
        
    }
    function crearMensajes(){
        let seccionMensajes = document.getElementById("mensajes")
        let parrafo= document.createElement("p")
        parrafo.innerHTML= "Tu mascota ataco con " + ataqueJugador + " La mascota del enemigo ataco con " + aleatorioataqueEnemigo + " " + resultadoBatalla
        seccionMensajes.appendChild(parrafo)
    }

    function crearMensajesFinal(resultado){
        let seccionMensajes = document.getElementById("mensajes")
        let parrafo= document.createElement("p")
        parrafo.innerHTML= resultado
        seccionMensajes.appendChild(parrafo)

    let botonFuego= document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra= document.getElementById("boton-tierra")
    botonTierra.disabled = true
    let seccionReiniciar = document.getElementById("boton-reiniciar")
    seccionReiniciar.style.display= "block"
    }

    function reiniciar(){
        location.reload()
    }



    function aleatorio(min,max){
        return Math.floor(Math.random()*(max-min+1)+min)
    }


     
    

    



window.addEventListener('load' , iniciarJuego)

