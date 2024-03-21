
    function calcularIMC(peso, altura) {
        let imc = peso / ((altura / 100) * (altura / 100)).toFixed(2);
        return imc;
    }



    const calcular = document.querySelector('#btnCalcularIMC');

    calcular.addEventListener('click', () => {
        let pesoUsuario = document.querySelector('#inputPeso').value;
        let alturaUsuario = document.querySelector('#inputAltura').value;
        let imc = parseFloat(calcularIMC(pesoUsuario, alturaUsuario));



        if (imc < 18.5) {
            window.alert("Abaixo do peso");
        } else if (imc < 24.9) {
            window.alert("Peso ideal");
        } else if (imc < 30) {
            window.alert("Sobrepeso");
        } else {
            window.alert("Obeso");
        }
    });
