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
            // check if difference exists in map by calc
            const difference = target - nums[i]
            if (numsSeenMap[difference] !== undefined) {
                return [i, numsSeenMap[difference]]
            }
            numsSeenMap[nums[i]] = i
            
        }
    }
}
