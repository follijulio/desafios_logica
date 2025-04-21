/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
        i++;
        nums[i] = nums[j];
        }
    }
    array.forEach(element => {
        
    });
    return i + 1;
};



console.log(removeDuplicates([1, 1,2]));