import java.util.*;

class Solution {
    public String solution(String number, int k) {
        Stack<Character> answer = new Stack<>();
        
        for (char num: number.toCharArray()) {
            while (k > 0 && !answer.isEmpty() && num > answer.peek()) {
                answer.pop();
                k--;
            }
            
            answer.push(num);
        }
        
        StringBuilder answerStr = new StringBuilder();
        for (int i = 0; i < Math.min(answer.size(), number.length() - k); i++) {
            answerStr.append(answer.get(i));
        }

        return answerStr.toString();  // StringBuilder는 객체이므로 String 타입으로 변환 후 반환
    }
}