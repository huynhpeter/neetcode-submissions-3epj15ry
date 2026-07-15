class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // build a frequency map 
        const freqMapOne = {}
        const freqMapTwo = {}
        let isAnagramFr = false

        const sArr = s.split("")
        const tArr = t.split("")

        if (sArr.length !== tArr.length) return false



        // iterate the count of the kv of the letter 
        for (let i=0; i < sArr.length; i++) {
            const currLetter = sArr[i]
            if (freqMapOne[currLetter] !== undefined) {
                freqMapOne[currLetter] = freqMapOne[currLetter] + 1
            } else {
                freqMapOne[currLetter] = 1
            }
            
        }

        for (let i=0; i < tArr.length; i++) {
            const currLetter = tArr[i]
            if (freqMapTwo[currLetter] !== undefined) {
                freqMapTwo[currLetter] = freqMapTwo[currLetter] + 1
            } else {
                freqMapTwo[currLetter] = 1
            }
        }

        console.log(freqMapOne)
        console.log(freqMapTwo)

        for (const key of Object.keys(freqMapOne)) {
            console.log("freqMapOne[key]", freqMapOne[key])
            console.log("freqMapTwo[key]", freqMapTwo[key])
            if ((freqMapOne[key] !== freqMapTwo[key])) {
                return false
            } 
        }

        // for (const key of Object.keys(freqMapOne)) {
        //     if (freqMapOne[key] !== freqMapTwo[key]) {
        //         return false
        //     }
        // }

        return true
    }
}
