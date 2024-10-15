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
        
        String answer_str = "";
        int len = 0;
        for (char elem: answer) {
            answer_str += elem;
            len++;
            
            if (len >= number.length() - k) break;
        }
        
        return answer_str;
    }
}