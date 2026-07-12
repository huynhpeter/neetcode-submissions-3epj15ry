class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {

        let seen = {}
        let isDupe = false

        for (let i = 0; i < nums.length; i++) {
            const currNumb = nums[i]
            if (seen[currNumb] !== undefined) {
                isDupe = true
                break 
            } else {
                seen[currNumb] = true
            }
        }
    
        return isDupe
    }

    
}
