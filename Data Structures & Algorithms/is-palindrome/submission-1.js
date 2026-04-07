class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let output = true
        const sanitizedStr = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, '')

        let left = 0
        let right = sanitizedStr.length - 1
        while (left < right) {
            if (sanitizedStr.charAt(left) !== sanitizedStr.charAt(right)) {
                output = false
                break
            }

            output = true
            right--
            left++
        }

        return output
    }
}
