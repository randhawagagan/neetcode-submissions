class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        const count = new Map<number, number>();
        for(const n of nums){
            count.set(n, (count.get(n) ?? 0) + 1);
        }

        const buckets: number[][] = [];
        for(let i=0; i<=nums.length; i++){
            buckets.push([]);
        }


        for(const [n,freq] of count){
            buckets[freq].push(n);
        }

        const res: number[] = [];
        for(let i= buckets.length -1 ; i>=1; i--){
            for(const n of buckets[i]){
                res.push(n);
            }
            if(res.length === k){
                return res
            }
        }
    }
}
