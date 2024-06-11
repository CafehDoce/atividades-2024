public class PalindromeNumber {

    public boolean isPalindrome(int x) {
        // Casos especiais:
        // Se o número é negativo ou o último dígito é zero e o número não é zero, não é um palíndromo
        if (x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }

        int reversed = 0;
        while (x > reversed) {
            reversed = reversed * 10 + x % 10;
            x /= 10;
        }

        // Quando o comprimento é um número ímpar, precisamos remover o último dígito do número revertido
        // para evitar a comparação do dígito do meio consigo mesmo
        return x == reversed || x == reversed / 10;
    }

    public static void main(String[] args) {
        PalindromeNumber palindromeNumber = new PalindromeNumber();

        // Test cases
        int num1 = 121;
        int num2 = -121;
        int num3 = 10;

        System.out.println("Input: " + num1 + ", Output: " + palindromeNumber.isPalindrome(num1));
        System.out.println("Input: " + num2 + ", Output: " + palindromeNumber.isPalindrome(num2));
        System.out.println("Input: " + num3 + ", Output: " + palindromeNumber.isPalindrome(num3));
    }
}
