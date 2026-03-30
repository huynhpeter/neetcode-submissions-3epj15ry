class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numbFreq = {}

        // iterate the nums 
        nums.forEach(num => {
            // set key as numb; val would be 0 or + 1
            numbFreq[num] = (numbFreq[num] || 0) + 1
        })
        
        // turn numbFreq to array 
        return Object.entries(numbFreq).sort((a,b) => b[1] - a[1]).slice(0, k).map(i => i[0])
        // then sort 
        // take top k
        // return [1,2] for example
    }
}
