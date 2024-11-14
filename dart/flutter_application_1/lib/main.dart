import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Perfil de Usuário',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const UserProfile(),
    );
  }
}

class UserProfile extends StatelessWidget {
  const UserProfile({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: ProfileScreen(),
      ),
    );
  }
}

class ProfileScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Positioned(
          top: 0,
          left: 0,
          right: 0,
          child: Container(
            height: 200,
            color: Colors.pinkAccent,
          ),
        ),
        // Conteúdo principal
        Positioned(
          top: 120,
          left: 0,
          right: 0,
          child: Column(
            children: [
              // Foto de perfil
              CircleAvatar(
                radius: 60,
                backgroundImage: NetworkImage(
                    'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fcnt_pr%2Fstatus%2F989233554247897090&psig=AOvVaw1F-5uQZmmIQ_u-5fj1HpCR&ust=1731701817779000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODQuJTS3IkDFQAAAAAdAAAAABAE'),
              ),
              const SizedBox(height: 10),
              const Text(
                "Isabella",
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
              // Bio do usuário
              const Padding(
                padding: EdgeInsets.symmetric(horizontal: 40, vertical: 10),
                child: Text(
                  "Programadora em ascenção, focava em HTML, CSS, e um pouco de Java Script, com aptdão em front end.",
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 16, color: Colors.black54),
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Expanded(
                      child: ElevatedButton(
                        onPressed: () {},
                        child: const Text("Seguir"),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: OutlinedButton(
                        onPressed: () {},
                        child: const Text("Mensagem"),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
