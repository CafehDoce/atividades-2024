import 'package:flutter/material.dart';

class ProductRating extends StatelessWidget {
  final double rating;

  const ProductRating({super.key, required this.rating});

  @override
  Widget build(BuildContext context) {
    List<Icon> stars = [];
    for (int i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.add(const Icon(Icons.star, color: Colors.amber, size: 20));
      } else if (i - rating < 1) {
        stars.add(const Icon(Icons.star_half, color: Colors.amber, size: 20));
      } else {
        stars.add(const Icon(Icons.star_border, color: Colors.amber, size: 20));
      }
    }
    return Row(
      children: stars,
    );
  }
}
