window.onload = () => {
    var display = document.getElementById('number');
    var n1 = undefined;
    var n2 = undefined;
    var r = undefined;
    var name_operator = '';
    var operador = document.getElementsByClassName('o');
    var number = document.getElementsByClassName('n');
    var clean = document.getElementById('C');
    var Del = document.getElementById('Del');
    var igual = document.getElementById('igual');
    var inverter = document.getElementById('inverter');

    // Adiciona eventos de clique aos botões de operador
    for (let i = 0; i < operador.length; i++) {
        operador[i].onclick = () => {
            switch (operador[i].getAttribute('id')) {
                case 'minus':
                    name_operator = 'minus';
                    break;
                case 'plus':
                    name_operator = 'plus';
                    break;
                case 'mult':
                    name_operator = 'mult';
                    break;
                case 'div':
                    name_operator = 'div';
                    break;
            }
            // Armazena o primeiro número e limpa o display
            n1 = parseFloat(display.innerHTML);
            display.innerHTML = '0';
        }
    }

    // Inverte o sinal do número exibido
    inverter.onclick = () => {
        display.innerHTML = parseFloat(display.innerHTML) * -1;
    }

    // Limpa o display e as variáveis
    clean.onclick = () => {
        display.innerHTML = '0';
        n1 = undefined;
        n2 = undefined;
        r = undefined;
    }

    // Remove o último dígito do número exibido
    Del.onclick = () => {
        if (display.innerHTML > 0) {
            display.innerHTML = (display.innerHTML - display.innerHTML[display.innerHTML.length - 1]) / 10;
        } else {
            display.innerHTML = -((display.innerHTML * -1) - display.innerHTML[display.innerHTML.length - 1]) / 10;
        }
    }

    igual.onclick = () => {
        // Armazena o segundo número
        n2 = parseFloat(display.innerHTML);

        // Realiza a operação com base no operador
        switch (name_operator) {
            case 'minus':
                r = n1 - n2;
                break;
            case 'plus':
                r = n1 + n2;
                break;
            case 'mult':
                r = n1 * n2;
                break;
            case 'div':
                r = n1 / n2;
                break;
        }

        // Verifica se o resultado está fora do limite permitido
        if (r > 999999999 || r < -999999999) {
            display.innerHTML = 'Error';
        } else {
            // Exibe o resultado, truncado em até 10 caracteres
            display.innerHTML = r;
            display.innerHTML = display.innerHTML.substring(0, 10);
            n1 = undefined;
            n2 = undefined;
        }
    }

    // Adiciona eventos de clique aos botões de número
    for (let i = 0; i < number.length; i++) {
        number[i].addEventListener('click', () => {
            // Verifica se o display tem menos de 9 caracteres
            if (display.innerHTML.length < 9) {
                // Limpa o display se ele mostrar '0' ou se o resultado anterior não for undefined
                if (display.innerHTML === '0' || r != undefined) {
                    r = undefined;
                    display.innerHTML = '';
                    display.innerHTML += number[i].innerHTML;
                    display.innerHTML = display.innerHTML.substring(0, 10);
                } else {
                    display.innerHTML += number[i].innerHTML;
                    display.innerHTML = display.innerHTML.substring(0, 10);
                }
            }
        });
    }
}