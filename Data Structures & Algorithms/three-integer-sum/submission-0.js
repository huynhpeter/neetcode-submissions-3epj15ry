class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // sort nums 
        nums.sort((a,b) => a - b)
        let output =[]
        
        // example nums = [-1, 0, 1, 2]
        // left = idx 0 
        // right = idx end
        // i = i +1

        for (let i = 0; i < nums.length; i++) {
            // skip duplicate check 
            if (i > 0 && nums[i] === nums[i-1]) continue

            let left = i + 1
            let right = nums.length - 1

            // move i to the right side of our equation
            // left + right = i // this must equal 0 for our 3 zero sum subset
            
            const numOnRightSide = -nums[i]
            

            // compute until we converge
            while (left < right) {
                let totalOnLeft = nums[left] + nums[right]
                if (totalOnLeft > numOnRightSide) {
                    right--
                } else if (totalOnLeft < numOnRightSide) {
                    left++
                } else {
                    // we found a triplet that sums to 0
                    const zeroSumList = [nums[left], nums[right], nums[i]]
                    output.push(zeroSumList)
                    right--
                    left++

                    while (left < right && nums[left] === nums[left - 1]) left++
                    while (left < right && nums[right] === nums[right + 1]) right--
                }
            }

        }

        return output
    }
}
