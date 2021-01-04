// Given a list of integers nums, swap each consecutive even
// indexes with each other, and swap each consecutive odd
// indexes with each other.

// Constraints

// n ≤ 100,000 where n is the length of nums

class Solution {
    solve(nums) {

        function swap(idx1, idx2, arr){ 
            let first = arr[idx1]; 
            let second = arr[idx2]; 

            arr[idx1] = second; 
            arr[idx2] = first;
            
            return arr; 
        } 
        
        let swapped = [] 
        for(let i = 0; i < nums.length - 2; i++){ 
            if(swapped.includes(i)) {
                continue; 
            } else { 
                swap(i, i+2, nums); 
                swapped.push(i, i+2);
                continue; 
            } 
        }

        return nums 
    }
}