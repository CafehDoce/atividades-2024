//O Switch-case é uma estrutura de controle de fluxo, O funcionamento em si é o seguinte: A expressão dentro do switch é avaliada. Os case representam valores possíveis da expressão.

const fruta = "morango";

switch(fruta) {
    case "morango":
        console.log("Sua fruta favorita é morango!");
    break;
    case "uva":
        console.log("Sua fruta favorita é uva");
    break;
    case "tomate":
        console.log("Sim tomate é uma fruta!");
    break;
    case "maçã":
        console.log("Sua fruta escolhida é maçã!");
    break;
    default:
        console.log("Você não tem fruta que goste");
}

//While loop irá se repetir continuamente, e infinitamente, até a expressão dentro dos parênteses (), se torne falsa. Algo deve mudar a variável testada, ou o loop while nunca irá encerrar. 

let contador = 0;

while (contador < 11) {
  console.log('repetição nº ' + contador);

  contador++;
}