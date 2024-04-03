package JAVA.Soma repetida;

public class SomaDigitos {
    
    public static int somaDigitos(int num) {

        num = Math.abs(num);
        
        while (num >= 10) {
            int soma = 0;

            while (num > 0) {
                soma += num % 10;
                num /= 10;
            }
            num = soma;
        }
        
        return num;
    }

    public static void main(String[] args) {

        int num1 = 38;
        System.out.println("Exemplo 1:");
        System.out.println("Input: num = " + num1);
        System.out.println("Output: " + somaDigitos(num1));
        
        int num2 = 0;
        System.out.println("\nExemplo 2:");
        System.out.println("Input: num = " + num2);
        System.out.println("Output: " + somaDigitos(num2));
    }
}