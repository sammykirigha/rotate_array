//Given an array, rotate the array to the right by k staps where k is non-negative;

function rotate(nums, k) {
    let len = nums.length
    k %= len;
    reverse(nums, 0, len - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, len - 1)

    function reverse(nums, start, end) {
        while (start < end) {
            let temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp;
            start++;
            end--;
        }
    }
}

console.log(rotate([1,2,3,4,5,6,7]))
