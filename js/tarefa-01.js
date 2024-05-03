//Switch-case exemplo
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

//While loop exemplo
let contador = 0;

while (contador < 11) {
  console.log('repetição nº ' + contador);

  contador++;
}



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

// explicando sobre o codigo abaixo //
  // aqui estamos utilizando if, else if, else , para fazer uma breve regra sobre horarios algo desse tipo , estamos dizendo que o bom dia e aparti das 6 as 12 
  // sendo assim se o tiver um horario entre os dois então sera bom dia ,  estamos utilizando else if para dizer que maior que 12 e menor que 18 sera boa tarde então caso estejamos
  // entre esse horarios  então vai nos retornar boa tarde ,ainda utilizando else if estamos dizendo que das 18 as 24 é boa noite sendo nassim vai trazer pára min boa noite entre esses horarios 
  // agora partindo pro else caso aja tenha ultrapassado todos esses hoararios e estamos de madruga suposição as 1 , então nos trara é madrugadA vá dormir 
// esse foi o codigo que eu fiz utilizando if , else if , else 

loop(food = 0; foodNeeded = 10) {
    if (food = foodNeeded) {
      exit loop;
      // Nós temos comida o suficiente, Vamos para casa
    } else {
      food += 2; // Passe uma hora coletando mais 2 alimentos(food)
      // loop será executado novamente
    }
}