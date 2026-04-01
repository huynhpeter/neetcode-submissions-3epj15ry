class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = []

        // nested loop here 
        // iterate top layer then nested to calc product but if i=j dont calc in nested
        // once the calc is completed for current index in nested push total to output
        // return output once outter loop complettes

        nums.forEach((i, idx1) => {
            let productPerIdx = undefined
            nums.forEach((j, idx2) => {
                // don't include current index from parent loop in calcuation
                if (idx1 === idx2) {
                    return
                }

                if (productPerIdx === undefined) {
                    productPerIdx = j
                    return
                }

                productPerIdx = j * productPerIdx 
            })

            output.push(productPerIdx)
        })

        return output

    }
}
