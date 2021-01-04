// Given a list of integers nums, sort the array such that:

// All even numbers are sorted in increasing order
// All odd numbers are sorted in decreasing order
// The relative positions of the even and odd numbers remain the 
// same

// Constraints

// n ≤ 100,000 where n is the length of nums

class Solution {
    solve(nums) {
        const evenArr = []
        const oddArr = []
        const results = []

        for(let i = 0; i < nums.length; i++){
            nums[i] % 2 === 0 ? evenArr.push(nums[i]) : oddArr.push(nums[i])
        }

        evenArr.sort((a,b) => a-b)
        oddArr.sort((a , b) => b-a)

        for(let j = 0; j < nums.length; j++){
            if(nums[j] % 2 === 0){
                results.push(evenArr.shift())
            } else {
                results.push(oddArr.shift())
            }
        }
        return results
    }
}
