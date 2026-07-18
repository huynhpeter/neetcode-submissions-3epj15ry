class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // iterate nums 
        // i + j = target
        let numsSeenMap = {}
        for (let i=0; i < nums.length; i++) {
            const currNumb = nums[i]
            // check if difference exists in map by calc
            const difference = target - currNumb
            if (numsSeenMap.hasOwnProperty(difference)) {
                return [i, numsSeenMap[difference]]
            }
            numsSeenMap[currNumb] = i
            
        }
    }
}
