class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const sanitizedStr = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, '')

        let left = 0
        let right = sanitizedStr.length - 1
        while (left < right) {
            if (sanitizedStr.charAt(left) !== sanitizedStr.charAt(right)) return false

            right--
            left++
        }

        return true
    }
}
