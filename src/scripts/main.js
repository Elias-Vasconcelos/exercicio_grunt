document.addEventListener('DOMContentLoaded', function (){
    document.getElementById('fomr-sorteador').addEventListener('submit',function(evento){
        evento.preventDefault();
        
        let numeroMaximo = document.getElementById('Numero-Maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let NumeroAleatorio = Math.random() * numeroMaximo;
        NumeroAleatorio = Math.floor(NumeroAleatorio + 1);

        document.getElementById('Resultado-valor').innerText = NumeroAleatorio;
        document.querySelector('.Resultado').style.display = 'block';
    })
})