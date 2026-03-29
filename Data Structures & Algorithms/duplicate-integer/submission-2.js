class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numbsSeen = {}

        // iterate the nums list 

        // check if the key is truthy in numbsSeen obj. If so return true
        // else set the key in the object 

        for (let i=0; i < nums.length; i++) {
            if (numbsSeen[nums[i]]) return true
            else {
                numbsSeen[nums[i]] = 1
            }
        }

        return false
    }
}
