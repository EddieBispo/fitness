function calcularIMC(peso, altura) {
    let imc = peso / ((altura / 100) * (altura / 100));
    return imc;
}


const calcular = document.querySelector('#btnCalcularIMC');
const tabelaIMC = document.querySelector('.contTabelaIMC');
let imcUsuario = document.querySelector('#imcUsuario');
let alturaUsuario = document.querySelector('#alturaUsuario');
let pesoUsuario = document.querySelector('#pesoUsuario');
let containerIMC = document.querySelector('.infImcRetornado');
let tituloIMC = document.querySelector('#tituloImcRetornado')
let textoIMC = document.querySelector('#textoImcRetornado');

calcular.addEventListener('click', () => {
    let inputAlturaUsuario = document.querySelector('#inputAltura').value;
    let inputPesoUsuario = document.querySelector('#inputPeso').value;
    let imc = calcularIMC(inputPesoUsuario, inputAlturaUsuario);
    

    if (imc < 18.5) {
        tabelaIMC.style.display = 'flex';
        imcUsuario.innerHTML = imc.toFixed(2);
        alturaUsuario.innerHTML = (inputAlturaUsuario / 100).toFixed(2);
        pesoUsuario.innerHTML = `${inputPesoUsuario} kg`;
        containerIMC.style.backgroundColor = 'var(--amarelo-tabela-IMC)';
        tituloIMC.innerHTML = 'Abaixo do Peso';
        textoIMC.innerHTML = 'Estar abaixo do peso pode parecer inofensivo, mas traz riscos à saúde. Fraqueza muscular, fadiga constante e maior suscetibilidade a doenças são apenas alguns dos problemas enfrentados por quem está abaixo do peso. Busque orientação médica para desenvolver uma dieta balanceada e ganhar peso de forma saudável.';
        tabelaIMC.scrollIntoView({ behavior: "smooth" });
    } else if (imc < 24.9) {
        tabelaIMC.style.display = 'flex';
        imcUsuario.innerHTML = imc.toFixed(2);
        alturaUsuario.innerHTML = (inputAlturaUsuario / 100).toFixed(2);
        pesoUsuario.innerHTML = `${inputPesoUsuario} kg`;
        containerIMC.style.backgroundColor = 'var(--verde-tabela-IMC)';
        tituloIMC.innerHTML = 'Peso Ideal';
        textoIMC.innerHTML = 'Parabéns por manter um peso saudável! Estar dentro da faixa de peso ideal traz uma série de benefícios, como melhor saúde cardiovascular, maior energia e menor risco de doenças crônicas. Continue com seus hábitos saudáveis, pois estão contribuindo para uma vida plena e ativa.';
        tabelaIMC.scrollIntoView({ behavior: "smooth" });
    } else if (imc < 30) {
        tabelaIMC.style.display = 'flex';
        imcUsuario.innerHTML = imc.toFixed(2);
        alturaUsuario.innerHTML = (inputAlturaUsuario / 100).toFixed(2);
        pesoUsuario.innerHTML = `${inputPesoUsuario} kg`;
        containerIMC.style.backgroundColor = 'var(--laranja-tabela-IMC)';
        tituloIMC.innerHTML = 'Sobrepeso';
        textoIMC.innerHTML = 'O sobrepeso pode aumentar significativamente o risco de desenvolver condições como diabetes, doenças cardíacas e hipertensão. Priorize uma dieta equilibrada e a prática regular de exercícios para reduzir esse risco. Pequenas mudanças podem fazer uma grande diferença na sua saúde a longo prazo.';
        tabelaIMC.scrollIntoView({ behavior: "smooth" });
    } else {
        tabelaIMC.style.display = 'flex';
        imcUsuario.innerHTML = imc.toFixed(2);
        alturaUsuario.innerHTML = (inputAlturaUsuario / 100).toFixed(2);
        pesoUsuario.innerHTML = `${inputPesoUsuario} kg`;
        containerIMC.style.backgroundColor = 'var(--vermelho-tabela-IMC)';
        tituloIMC.innerHTML = 'Obeso';
        textoIMC.innerHTML = 'A obesidade é uma preocupação séria de saúde, aumentando drasticamente o risco de uma série de condições médicas graves, incluindo derrame, doença hepática e certos tipos de câncer. Busque apoio médico e adote um plano de estilo de vida saudável, incluindo dieta balanceada e exercícios regulares, para melhorar sua saúde e qualidade de vida.';
        tabelaIMC.scrollIntoView({ behavior: "smooth" });
    }
    
})