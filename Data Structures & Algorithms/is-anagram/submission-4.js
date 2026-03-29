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
        for (const k of Object.keys(lettersSeen1)) {
            if (lettersSeen1[k] !== lettersSeen2[k]) {
                return false
            }
        }

        return true
    }
}
