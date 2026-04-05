class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = []

        // [1, 2, 4, 6]
        // [6, 4, 2, 1] reversed
        // left to right; precompute left adn right product for the given index
        let leftProducts = {}
        nums.forEach((n, idx) => {
            if (idx === 0) {
                leftProducts[idx] = 1
            } else {
                const prevProduct = leftProducts[idx -1]
                const prevNum = nums[idx - 1]
                leftProducts[idx] = prevProduct * prevNum
            }
        })

        let rightProducts = {}
        // iterate from right to left
        for (let i = nums.length -1; i >= 0; i--) {
            if (i === nums.length - 1) {
                rightProducts[i] = 1
            } else {
                rightProducts[i] = rightProducts[i + 1] * nums[i + 1]
            }
        }

        for (let i=0; i < nums.length; i++) {
            output[i] = leftProducts[i] * rightProducts[i]
        }

        // nested loop here 
        // iterate top layer then nested to calc product but if i=j dont calc in nested
        // once the calc is completed for current index in nested push total to output
        // return output once outter loop complettes
        // [-1, 0, 1, 2, 3]
        // nums.forEach((i, idx1) => {
        //     let productPerIdx = undefined
        //     nums.forEach((j, idx2) => {
        //         // don't include current index from parent loop in calcuation
        //         if (idx1 === idx2) {
        //             return
        //         }

        //         if (productPerIdx === undefined) {
        //             productPerIdx = j
        //             return
        //         }
        //         console.log('productPerIdx before', productPerIdx)
        //         productPerIdx = j * productPerIdx 
        //         console.log('productPerIdx after', productPerIdx)
        //     })

        //     output.push(productPerIdx)
        // })

        return output

    }
}
