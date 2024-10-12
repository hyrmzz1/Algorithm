// 슬라이딩 윈도우 - 10일에 해당하는 할인 품목 Map 만들기 (discountMap)
// wantMap 만들기
// discountMap에 wantMap의 key와 같은 key가 있는지 확인, 해당 key의 value가 wantMap의 value 이상인지 확인 -> answer++;
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int solution(String[] want, int[] number, String[] discount) {
        int answer = 0;
        
        Map<String, Integer> wantMap = new HashMap();
        for (int i = 0; i < want.length; i++) {
            wantMap.put(want[i], number[i]);
        }
        
        Map<String, Integer> discountMap = new HashMap();
        for (int i = 0; i < discount.length; i++) {
            // 초기 슬라이딩 윈도우
            discountMap.put(discount[i], discountMap.getOrDefault(discount[i], 0) + 1);
            
            if (i >= 10) {
                discountMap.put(discount[i - 10], discountMap.get(discount[i - 10]) - 1); // 맨 앞 요소 제거
            }
            
            // 슬라이딩 윈도우 크기가 10일 때 discountMap과 wantMap 비교
            if (i >= 9) {
                boolean isMatching = true;  // 회원가입 여부
                for ( String key : wantMap.keySet() ) {
                    // discountMap에서 key 찾기
                    if (discountMap.getOrDefault(key, 0) < wantMap.get(key)) {
                        isMatching = false;
                        break;
                    }
                }
                
                if (isMatching) answer++;
            }
        }
        
        return answer;
    }
}