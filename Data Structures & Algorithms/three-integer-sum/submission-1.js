class Solution {
    /**
     * @param {number[]} nums
     * nums = [-1,0,1,2,-1,-4]
     * @return {number[][]}
     */
    threeSum(nums) {
        let output = []

        // sort input ascending
        nums.sort((a, b) => a - b)

        // outer loop to iterate the sorted input start at idx 0
        // [-4, -1, -1, 0, 1, 2]
        for (let i = 0; i < nums.length; i++) {
            // dupe check 
            if (i > 0 && nums[i] === nums[i -1 ]) continue

            let totalOnRightSide = -nums[i]
            let left = i + 1
            let right = nums.length - 1

            while (left < right) {
                const totalOnLeftSide = nums[left] + nums[right]

                if (totalOnLeftSide < totalOnRightSide) {
                     left++
                } else if (totalOnLeftSide > totalOnRightSide) {
                    right--
                } else {
                    // we found a 3 sum subset that equals 0
                    // push to output 
                    output.push([nums[i], nums[left], nums[right]])
                    left++
                    right--

                    // after we find a triplet we want to make sure 
                    while (left < right && nums[left] === nums[left - 1]) left++
                    while (left < right && nums[right] === nums[right + 1]) right--
                }
            }
        }

        // set left pointer at idx 1 
        // set right at nums.length - 1

        // the idea here is current idx will move to right side of = equation
        // left + right = -nums[i]

        // while (left < right)
            // 
        return output
    }
}
