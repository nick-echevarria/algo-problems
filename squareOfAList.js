// Given a list of integers sorted in ascending order nums,
// square the elements and give the output in sorted order.

// Constraints

// n ≤ 100,000 where n is the length of nums

class Solution {
    solve(nums) {
        let results = []; 
        nums.forEach(num => results.push(num*num)); 
        return results.sort((a,b) => a-b);
    }
}
