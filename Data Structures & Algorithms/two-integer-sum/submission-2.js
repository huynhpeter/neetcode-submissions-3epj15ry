class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // init map to store num to idx
        let numIdxMap = {}
        // iterate nums 
        // calc target - currentNum = complement
        // check if complement exists in our map
        // if if does then we return both indices
        // if not store current number and its idx in map
        for (let i=0; i < nums.length; i++) {
            const complement = target - currentNum
            
            if (numIdxMap.hasOwnProperty(nums[i])) {
                return [numIdxMap[complement], i]
            }

            numIdxMap[nums[i]] = i
        }
    }
}
