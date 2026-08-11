class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

       if(s.length !== t.length ){
return false;
       }
const count = new Map<string, number>();

for(const char of s){
    const curr = count.get(char) || 0;
    count.set(char, curr + 1 );
}

for(const char of t){
       const curr = count.get(char) || 0;
   count.set(char, curr - 1 );
}

for (const value of count.values()) {
  if (value !== 0) {
    return false;
  }
}
       
       return true;






    }
}
