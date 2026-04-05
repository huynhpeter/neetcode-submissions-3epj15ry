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
        const reversedNums = nums.toReversed()
        reversedNums.forEach((n, idx) => {
            if (idx === 0) {
                rightProducts[idx] = 1
            } else {
                const prevProduct = rightProducts[idx -1]
                const prevNum = reversedNums[idx - 1]
                rightProducts[idx] = prevProduct * prevNum
            }
        })

        for (let i=0; i < nums.length; i++) {
            const len = nums.length
            output[i] = leftProducts[i] * rightProducts[len - 1 - i]
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
