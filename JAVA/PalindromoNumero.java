public class PalindromoNumero {

    public boolean isPalindrome(int x) {
        if (x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }

        int reversed = 0;
        while (x > reversed) {
            reversed = reversed * 10 + x % 10;
            x /= 10;
        }

        return x == reversed || x == reversed / 10;
    }

    public static void main(String[] args) {
        PalindromoNumero palindromeNumber = new PalindromoNumero();


        int num1 = 121;
        int num2 = -121;
        int num3 = 10;

        System.out.println("Input: " + num1 + ", Output: " + palindromeNumber.isPalindrome(num1));
        System.out.println("Input: " + num2 + ", Output: " + palindromeNumber.isPalindrome(num2));
        System.out.println("Input: " + num3 + ", Output: " + palindromeNumber.isPalindrome(num3));
    }
}
