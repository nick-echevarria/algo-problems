// Given a lowercase alphabet string s, return the length of
// the longest substring with same characters.

// Constraints

// 0 ≤ n ≤ 100,000 where n is the length of s

class Solution {
    solve(s) { 
        let max = 0;   
        let counter = 1; 

        for(let i = 0; i < s.length; i++){ 
            if(s[i] == s[i+1]){ 
                counter++; 
            } else {
                if(max < counter){
                    max = counter;             
                }
                counter = 1;
            }
        }
        
        return max; 
    }
}