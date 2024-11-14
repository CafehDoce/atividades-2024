import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: PerfilScreen(),
    );
  }
}

class PerfilScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Perfil do Usuário")),
      body: Stack(
        children: [
          // Banner de fundo
          Container(
            height: 250,
            decoration: BoxDecoration(
              image: DecorationImage(
                image: AssetImage("assets/banner.jpg"), // Substitua pela sua imagem
                fit: BoxFit.cover,
              ),
            ),
          ),

          // Foto de perfil sobreposta
          Positioned(
            top: 150, // Distância da parte superior para sobrepor a foto
            left: MediaQuery.of(context).size.width / 2 - 60, // Centraliza a imagem
            child: CircleAvatar(
              radius: 60,
              backgroundImage: AssetImage("assets/foto_perfil.jpg"), // Substitua pela sua imagem
            ),
          ),

          // Conteúdo abaixo da foto (nome, bio, e botões)
          Padding(
            padding: EdgeInsets.only(top: 220),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Text(
                  "Nome do Usuário",
                  style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 8),
                Text(
                  "Aqui vai a bio do usuário, uma pequena descrição sobre ele.",
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 16, color: Colors.grey),
                ),
                SizedBox(height: 20),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    // Botão "Seguir"
                    ElevatedButton(
                      onPressed: () {
                        // Ação do botão (não implementada)
                      },
                      child: Text("Seguir"),
                      style: ElevatedButton.styleFrom(
                        primary: Colors.blue,
                        padding: EdgeInsets.symmetric(horizontal: 30, vertical: 12),
                      ),
                    ),
                    SizedBox(width: 16),
                    // Botão "Enviar Mensagem"
                    ElevatedButton(
                      onPressed: () {
                        // Ação do botão (não implementada)
                      },
                      child: Text("Enviar Mensagem"),
                      style: ElevatedButton.styleFrom(
                        primary: Colors.green,
                        padding: EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 20),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
