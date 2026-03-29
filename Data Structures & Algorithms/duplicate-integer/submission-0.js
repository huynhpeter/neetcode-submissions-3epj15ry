class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // iterate nums arr 
        // store each item in map
        // if item exists return true
        // else keep iterating until end 
            // then return false 


        let numsSeen = {}
        let appearsMoreThanOnce = false

        for (let i = 0; i < nums.length; i++ )  {
            numsSeen[nums[i]] = (numsSeen[nums[i]] || 0) + 1
          
            console.log(numsSeen[nums[i]])
            console.log(numsSeen)
            console.log(numsSeen[nums[i]] > 1)
            
            if (numsSeen[nums[i]] > 1) {
                appearsMoreThanOnce = true
                console.log(appearsMoreThanOnce)         
            }

             
        }

        return appearsMoreThanOnce
    }
}
