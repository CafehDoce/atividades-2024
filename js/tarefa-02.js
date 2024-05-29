const id =  document.querySelectorAll("tabuadaResultado");

document.getElementById('tabuadaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero)) {
      document.getElementById('tabuadaResultado').innerHTML = '<p>Por favor, insira um número válido.</p>';
      return;
    }

    var tabuada = '<h3>Tabuada do ' + numero + '</h3>';
    tabuada += '<table>';
    tabuada += '<tr><th>Operação</th><th>Resultado</th></tr>';
    for (var i = 1; i <= 10; i++) {
      tabuada += '<tr><td>' + numero + ' x ' + i + '</td><td>' + (numero * i) + '</td></tr>';
    }
    tabuada += '</table>';

    document.getElementById('tabuadaResultado').innerHTML = tabuada;
  });