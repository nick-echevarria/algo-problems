// You are given a list of integers heights representing building
// heights.A building heights[i] can see the ocean if every 
// building on its right has shorter height.Return the building
// indices where you can see the ocean, in ascending order.

// Constraints

// 0 ≤ n ≤ 100,000 where n is the length of heights


class Solution {
    solve(heights) {
        // determine max height and set to a variable
        // loop through array and compare. if heights[i] is greater, push 
        if(heights.length === 1) return [0]
        let highest = -1; 
        let bldgs = []; 
        for(let i = heights.length -1 ; i >= 0; i--){
            if (heights[i] > highest) {
                bldgs.push(i);
                highest = heights[i];
            } 
        }

        return bldgs.reverse(); 
    }
}