
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

void main() => runApp(new PerguntaApp());

class PerguntaAppState extends State<PerguntaApp>{
  @override
  Widget build(BuildContext context) {
    var perguntaSelecionada = 0;


    void responder() {
      setState(() {
        perguntaSelecionada++;
    });
       print("respondido, pergunta atual é ${perguntaSelecionada}");
    }

  List<String> perguntas = [
    'Quem é o mais fds pau no cu disso',
    'que mateira é mais inutil',
  ];

    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Minhas perguntas"),
        ),
        body: Column(
          children: [
            Text(perguntas.elementAt(0)),
            ElevatedButton(onPressed: responder, child: Text('Resposta1')),
            ElevatedButton(onPressed: responder, child: Text('Resposta2')),
            ElevatedButton(onPressed: responder, child: Text('Resposta3')),
          ],
        ),
      ),
    );
  }
}

class PerguntaApp extends StatelessWidget {
  @override
  
}
