package JAVA;
import java.util.HashMap;
import java.util.Map;

public class RomanToInteger {

    public int romanToInt(String s) {
        Map<Character, Integer> map = new HashMap<>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            int value = map.get(s.charAt(i));
            if (value < prevValue) {
                result -= value;
            } else {
                result += value;
            }
            prevValue = value;
        }

        return result;
    }

    public static void main(String[] args) {
        RomanToInteger converter = new RomanToInteger();

        // Test cases
        String roman1 = "III";
        String roman2 = "LVIII";
        String roman3 = "MCMXCIV";

        System.out.println("Input: " + roman1 + ", Output: " + converter.romanToInt(roman1));
        System.out.println("Input: " + roman2 + ", Output: " + converter.romanToInt(roman2));
        System.out.println("Input: " + roman3 + ", Output: " + converter.romanToInt(roman3));
    }
}
