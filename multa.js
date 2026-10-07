/* Faça um programa que a partir de um valor e de uma data de vencimento,
calcule o valor dos juros na data de hoje considerando que a multa seja de 2,5% ao dia. */

let valorMulta = 1000;
let dataVencimento = new Date("2019-11-26");
let dataHoje = new Date();

if (dataHoje > dataVencimento) {
    /* math.floor descarta a parte decimal do resultado da divisão,
    retornando apenas o número inteiro de dias de atraso.*/

    let diasAtraso = Math.floor((dataHoje - dataVencimento) / (1000*60*60*24));

    /*DataHoje - DataVencimento /(1000 * 60 * 60 * 24) foi utilizado para converter de milissegundos para dias, 
    pois a diferença entre datas é retornada em milissegundos.
    por iso foi utilizado para converter em dias*/

    let juros = valorMulta * 0.025 * diasAtraso;
    let valorTotal = valorMulta + juros;

    console.log(`Dias de atraso: ${diasAtraso}`);
    console.log(`Valor da multa: R$${valorMulta.toFixed(2)}`); // toFixed(2) foi utilizado para limitar as casas decimais a 2
    console.log(`Juros: R$${juros.toFixed(2)}`);
    console.log(`Valor total a pagar: R$${valorTotal.toFixed(2)}`);
} else {
    console.log("Não há atraso no pagamento.");
}