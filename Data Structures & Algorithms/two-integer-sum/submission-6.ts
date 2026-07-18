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
        let pair = []
        for (let i=0; i < nums.length; i++) {
            const currNumb = nums[i]
            console.log('currNumb', currNumb)
            // check if difference exists in map by calc
            const difference = target - currNumb
            console.log('difference', difference)
            if (numsSeenMap[difference] !== undefined) {

                pair.push(i, numsSeenMap[difference])
            } else {
                numsSeenMap[currNumb] = i
            }
        }

        return pair
    }
}
