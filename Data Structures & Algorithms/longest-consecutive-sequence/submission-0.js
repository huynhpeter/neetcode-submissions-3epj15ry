class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let output = 0

        // put all nums into set 
        let numsObj = {}
        nums.forEach(n => numsObj[n] = true)

        let seqStartNum = undefined
        //  for each num; check if num -1 is NOT in the set - if so its a seq start
        for (let i = 0; i < nums.length; i++) {
            // doesnt exist in map means we found a seq start
            if (!numsObj[nums[i] -1]) {
                seqStartNum = nums[i]
                let currentSeq = 1
                // from the start; keep couting up num + 1, num + 2 while thos enumbers exist in set
                while (numsObj[seqStartNum + 1]) {
                    seqStartNum++
                    currentSeq++
                }
                output = Math.max(currentSeq, output)
            }

        }

        return output
    }
}
