// Given a string s containing brackets(and), return the
// minimum number of brackets that can be inserted so that the
// brackets are balanced.

// Constraints

// n ≤ 100,000 where n is the length of s

class Solution {
    solve(s) {
        let stack = []
        let count = 0
        for (let i = 0; i < s.length; i++) {
            if (s[i] === ')') {
                if (stack.length) {
                    stack.pop()
                } else {
                    count++
                }
            } else {
                stack.push('(')
            }
        }
        return stack.length + count
    }
    //     let count = 0; 
    //     let i = 0;

    //     for(let j = 1; j < s.length; j++){ 
    //         if(s[i] === s[j]){ //s = ")))(("
    //             continue; 
    //         } else { 
    //             count += j;   
    //             console.log(j)
    //             break; 
    //         }
    //     };

    //     return count;   
    // }
}