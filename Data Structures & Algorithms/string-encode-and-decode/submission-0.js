class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = ""
        // iterate the strs
        // each item we want to get the length 
        // then append that to our return str with "len#"
        strs.forEach(s => {
            encodedStr = `${encodedStr}${s.length}#${s}`
        })

        return encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // example str = "3#dog3#car"

        // while loop i < s.length
        // find hash with indexOF
        // get hash position
        // usign substirng to find the len which is between curren i and hash
        let decodedStr = []
        let i = 0
        while (i < str.length) {
            const hashPos = str.indexOf("#", i)
            const len = parseInt(str.substring(i, hashPos))
            
            decodedStr.push(str.substring(hashPos+1, hashPos+len+1))

            // next hash position
            i = len + hashPos + 1
        }

        return decodedStr

    }
}
