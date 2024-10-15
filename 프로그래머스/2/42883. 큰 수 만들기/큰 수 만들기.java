import java.util.*;

class Solution {
    public String solution(String number, int k) {
        ArrayList<Character> answer = new ArrayList<>();    // List<Character> answer = new ArrayList<>();
        
        for (char num: number.toCharArray()) {
            while (k > 0 && !answer.isEmpty() && num > answer.get(answer.size() - 1)) {
                answer.remove(answer.size() - 1);
                k--;
            }
            
            answer.add(num);
        }
        
        StringBuilder answerStr = new StringBuilder();
        for (int i = 0; i < Math.min(answer.size(), number.length() - k); i++) {
            answerStr.append(answer.get(i));
        }

        return answerStr.toString();  // StringBuilder는 객체이므로 String 타입으로 변환 후 반환
    }
}