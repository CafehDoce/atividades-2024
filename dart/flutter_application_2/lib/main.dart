import 'package:flutter/material.dart';
import 'components/custom_button.dart';
import 'components/product_card.dart';
import 'components/product_rating.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'E-commerce App',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const ProductPage(),
    );
  }
}

class ProductPage extends StatelessWidget {
  const ProductPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Produto')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            ProductCard(
              imageUrl: 'https://polishop.vtexassets.com/assets/vtex.file-manager-graphql/images/def291a5-525a-45d4-a555-0338c2bd7480___8de09c1598cf7d631285f75cee6078d8.webp', 
              name: 'Escova Secadora Rotativa Diamond Rotating Conair', 
              description: 'O poder dos cristais de diamante para cabelos ainda mais macios, fios modelados e impecáveis por mais tempo e uma luminosidade que você nunca viu!', 
              price: 59.99
            ),
            const SizedBox(height: 16),
            ProductRating(rating: 4.5),
            const SizedBox(height: 16),
            CustomButton(text: 'Comprar'),
          ],
        ),
      ),
    );
  }
}
