let escolhido = 3;
let contadorJogadas = 0;
let Xganhou = 0; Yganhou = 0;

let b1 = 3, b2 = 3, b3 = 3,   //TABULEIRO DO JOGO
    b4 = 3, b5 = 3, b6 = 3,   //VALOR PADRÂO DAS PEÇAS: 3
    b7 = 3, b8 = 3, b9 = 3;   //TRUE PARA X, FALSE PARA O


function ganhador(jogada) {
    if (jogada === true) {
        alert("X ganhou!");
        Xganhou++;
        document.getElementById('jogador1').innerHTML = Xganhou;
    }
    else if (jogada === false) {
        alert("O ganhou!");
        Yganhou++;
        document.getElementById('jogador2').innerHTML = Yganhou;
    }
    document.getElementById('restart').disabled = false;
}


function check() {
    //CHECA SE ALGUEM GANHOU
    if ((b1 === b2 && b2 === b3) && b2 != 3) {
        document.getElementById('b1').style.backgroundColor = 'red';
        document.getElementById('b2').style.backgroundColor = 'red';
        document.getElementById('b3').style.backgroundColor = 'red';
        ganhador(b2);
    }
    else if ((b4 === b5 && b5 === b6) && b5 != 3) {
        document.getElementById('b4').style.backgroundColor = 'red';
        document.getElementById('b5').style.backgroundColor = 'red';
        document.getElementById('b6').style.backgroundColor = 'red';
        ganhador(b5);
    }
    else if ((b7 === b8 && b8 === b9) && b8 != 3) {
        document.getElementById('b7').style.backgroundColor = 'red';
        document.getElementById('b8').style.backgroundColor = 'red';
        document.getElementById('b9').style.backgroundColor = 'red';
        ganhador(b8);
    }
    else if ((b1 === b4 && b4 === b7) && b4 != 3) {
        document.getElementById('b1').style.backgroundColor = 'red';
        document.getElementById('b4').style.backgroundColor = 'red';
        document.getElementById('b7').style.backgroundColor = 'red';
        ganhador(b4);
    }
    else if ((b2 === b5 && b5 === b8) && b5 != 3) {
        document.getElementById('b2').style.backgroundColor = 'red';
        document.getElementById('b5').style.backgroundColor = 'red';
        document.getElementById('b8').style.backgroundColor = 'red';
        ganhador(b5);
    }
    else if ((b3 === b6 && b6 === b9) && b6 != 3) {
        document.getElementById('b3').style.backgroundColor = 'red';
        document.getElementById('b6').style.backgroundColor = 'red';
        document.getElementById('b9').style.backgroundColor = 'red';
        ganhador(b6);
    }
    else if ((b1 === b5 && b5 === b9) && b5 != 3) {
        document.getElementById('b1').style.backgroundColor = 'red';
        document.getElementById('b5').style.backgroundColor = 'red';
        document.getElementById('b9').style.backgroundColor = 'red';
        ganhador(b5);
    }
    else if ((b3 === b5 && b5 === b7) && b5 != 3) {
        document.getElementById('b3').style.backgroundColor = 'red';
        document.getElementById('b5').style.backgroundColor = 'red';
        document.getElementById('b7').style.backgroundColor = 'red';
        ganhador(b5);
    }
}


function escolha(id) {
    //O JOGADOR ESCOLHE X OU O

    if (id === 'choose1') {
        escolhido = true;
    }
    else if(id === 'choose2') {
        escolhido = false;
    }

    document.querySelector(".choice").style.visibility = "hidden";
    document.getElementById("choose1").disabled = true;
    document.getElementById("choose2").disabled = true;
}
        

function contador() {
    //CONTA O NUMERO DE JOGADAS E COMUNICA O FINAL DA PARTIDA
    if (contadorJogadas === 9) {
        document.querySelector(".choice").innerHTML = "Fim da partida";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

        document.getElementById('restart').disabled = false;
    }
}


function mudarValor(quadrado) {
    //MUDA O VALOR DA VARIÁVEL QUE REPRESENTA O QUADRADO DO TABULEIRO
    if (quadrado === 'b1') {
        b1 = escolhido;
    }
    else if (quadrado === 'b2') {
        b2 = escolhido;
    }
    else if (quadrado === 'b3') {
        b3 = escolhido;
    }
    else if (quadrado === 'b4') {
        b4 = escolhido;
    }
    else if (quadrado === 'b5') {
        b5 = escolhido;
    }
    else if (quadrado === 'b6') {
        b6 = escolhido;
    }
    else if (quadrado === 'b7') {
        b7 = escolhido;
    }
    else if (quadrado === 'b8') {
        b8 = escolhido;
    }
    else if (quadrado === 'b9') {
        b9 = escolhido;
    }
}


function jogada(id) {
    //RENDERIZA E TROCA O PLAYER APÓS A JOGADA
    mudarValor(id);

    if (escolhido === true) {
        document.getElementById(id).innerHTML = "X";
        document.getElementById(id).disabled = true;
        escolhido = false;
        contadorJogadas++;
    }
    else if (escolhido === false) {
        document.getElementById(id).innerHTML = "O";
        document.getElementById(id).disabled = true;
        escolhido = true;
        contadorJogadas++;
    }
    else {
        alert("Escolha X ou O!");
    }
    
    check();
    contador();
}


function restart() {
    //REINICIA O JOGO
    b1 = 3, b2 = 3, b3 = 3, b4 = 3, b5 = 3,
    b6 = 3, b7 = 3, b8 = 3, b9 = 3;

    contadorJogadas = 0;
    escolhido = 3;

    document.getElementById('b1').innerHTML = '';
    document.getElementById('b1').disabled = false;
    document.getElementById('b1').style.backgroundColor = 'white';
    document.getElementById('b2').innerHTML = '';
    document.getElementById('b2').disabled = false;
    document.getElementById('b2').style.backgroundColor = 'white';
    document.getElementById('b3').innerHTML = '';
    document.getElementById('b3').disabled = false;
    document.getElementById('b3').style.backgroundColor = 'white';
    document.getElementById('b4').innerHTML = '';
    document.getElementById('b4').disabled = false;
    document.getElementById('b4').style.backgroundColor = 'white';
    document.getElementById('b5').innerHTML = '';
    document.getElementById('b5').disabled = false;
    document.getElementById('b5').style.backgroundColor = 'white';
    document.getElementById('b6').innerHTML = '';
    document.getElementById('b6').disabled = false;
    document.getElementById('b6').style.backgroundColor = 'white';
    document.getElementById('b7').innerHTML = '';
    document.getElementById('b7').disabled = false;
    document.getElementById('b7').style.backgroundColor = 'white';
    document.getElementById('b8').innerHTML = '';
    document.getElementById('b8').disabled = false;
    document.getElementById('b8').style.backgroundColor = 'white';
    document.getElementById('b9').innerHTML = '';
    document.getElementById('b9').disabled = false;
    document.getElementById('b9').style.backgroundColor = 'white';
    document.getElementById('restart').disabled = true;

    document.querySelector('.choice').style.visibility = "visible";
    document.querySelector('.choice').innerHTML = 'Escolha:'
    document.getElementById('choose1').disabled = false;
    document.getElementById('choose2').disabled = false;
}