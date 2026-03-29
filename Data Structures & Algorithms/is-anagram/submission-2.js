class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // split strings to arrs
        const arr1 = s.split("")
        const arr2 = t.split("")

        // create objets to track letter to times seen
        let lettersSeen1 = {}
        let lettersSeen2 = {}
        let isAnagram = false

        // iterate arr 1 check the if key exists then set to 1 else increment \
        arr1.forEach(i => {
            if (lettersSeen1[i]) {
                lettersSeen1[i] = lettersSeen1[i] + 1
            } else {
                lettersSeen1[i] = 1
            }
        })

        // iterate arr 2 check the if key exists then set to 1 else increment 
        arr2.forEach(i => {
        if (lettersSeen2[i]) {
            lettersSeen2[i] = lettersSeen2[i] + 1
        } else {
            lettersSeen2[i] = 1
        }
        })

        // iterate both objs compare kvs if value != each other return false else keep checking then return false
        // could have a var that tracks this
        for (k in Object.keys(lettersSeen1)) {
            if (lettersSeen1[k] || lettersSeen2[k] || lettersSeen1[k] === lettersSeen2[k]) {
                isAnagram = true
            } else {
                isAnagram = false
            }
        }

        return isAnagram
    }
}
