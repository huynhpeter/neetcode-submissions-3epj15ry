class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 0) return [[""]]

        let wordToSublistMap = {}

        // iterate strs 
        // each item we sort alphabettically 
        // push unsorted word as item in array value for unsorted word key
        strs.forEach(currWord => {
            const sortedWord = currWord.split("").sort().toString()
            wordToSublistMap[sortedWord] = [...wordToSublistMap[sortedWord] || [], currWord]
        })

        let anagramGroupSublist = []
        for (const k in wordToSublistMap) {
            anagramGroupSublist.push(wordToSublistMap[k])
        }

        return anagramGroupSublist
    }
}
