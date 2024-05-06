//if, else if, else exemplo 01

/*
explicando sobre o codigo abaixo:
aqui estamos utilizando if, else if, else, para fazer uma breve regra sobre horarios algo desse tipo , estamos dizendo que o bom dia e aparti das 6 as 12 
sendo assim se o tiver um horario entre os dois então sera bom dia ,  estamos utilizando else if para dizer que maior que 12 e menor que 18 sera boa tarde então caso estejamos
entre esse horarios  então vai nos retornar boa tarde ,ainda utilizando else if estamos dizendo que das 18 as 24 é boa noite sendo nassim vai trazer pára min boa noite entre esses horarios 
agora partindo pro else caso aja tenha ultrapassado todos esses hoararios e estamos de madruga suposição as 1 , então nos trara é madrugadA vá dormir 
esse foi o codigo que eu fiz utilizando if, else if, else
*/

if ( HoraDoDia >= 6 && HoraDoDia < 12){
    console.log ( "bom dia!!");
}

else if ( HoraDoDia > 12 && HoraDoDia < 18 ){
    console.log ("boa tarde!!");
}

else if (HoraDoDia > 18 && HoraDoDia < 24){
     console.log ("boa noite !!");
}

else {
    console.log ("é madrugada. vá dormir!!");    
}
//explicacao - No exemplo a seguir demonstramos como programar uma estrutura condicional com algumas condicoes

//exemplo 2
semaforo = "verde";

if (semaforo == "verde") {
    mensagem = "Pode passar";
}

semaforo = "vermelho";

if (semaforo == "verde") {
    mensagem = "Pode passar";
} else {
    mensagem = "Pare";
}

semaforo = "amarelo";

if (semaforo == "verde") {
    mensagem = "Pode passar";
} else if (semaforo == "vermelho") {
    mensagem = "Pare";
} else {
    mensagem = "Atenção";
}

//Switch-case exemplo 01
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

//exemplo 02
sujeito = "feminino";

switch (sujeito) {
    case "feminino":
        console.log("Bem-vinda!");
        break;
    case false:
        console.log("Bem-vindo!");
}


/*
02
explicacao
Assim, a quantidade de comida necessária é fixada em 10, e o montante que o agricultor tem atualmente é fixado em 0. 
Em cada iteração do ciclo, verificamos se a quantidade de alimento que o agricultor tem é igual à quantidade que ele precisa. 
Se assim for, podemos sair do loop. Se não, o agricultor gasta mais uma hora coletando duas porções de comida, e o laço é executado novamente.
*/

loop(food = 0; foodNeeded = 10) {
    if (food = foodNeeded) {
      exit loop;
      // Nós temos comida o suficiente, Vamos para casa
    } else {
      food += 2; // Passe uma hora coletando mais 2 alimentos(food)
      // loop será executado novamente
    }
  }


/*
exemplo 02 
explicacao:
nesse exemplo é do tipo objeto, e cada característica do veículo corresponde a uma propriedade. Portanto,
a declaração do loop for/in solicita o acesso a cada característica dentro do objeto carro.
*/

var carro = {modelo: 'A3 Sedan', marca: 'Audi', ano: 2020}

for (let caracteristica in carro){
    console.log(caracteristica + ": " + carro[caracteristica]);
}

  var saída:
    modelo: A3 Sedan;
    marca: Audi;
    ano: 2020;


//While loop exemplo 01
let contador = 0;

while (contador < 6) {
  console.log('repetição nº ' + contador);

  contador++;
}

//exemplo 02
const cores = [
  'Rosa',
  'Preto',
  'Azul',
  'Branco'
];

let index = 0;

while (index < cores.length) {
  console.log(index, cores[index]);
  index++;
}