function maxProduct(nums) {
    var res = Math.max.apply(Math, nums);
    var curMax = 1;
    var curMin = 1;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        var tmpMax = curMax * num;
        curMax = Math.max(num, tmpMax, curMin * num);
        curMin = Math.min(num, tmpMax, curMin * num);
        res = Math.max(curMax, res);
        console.log("vars: ", {
            num: num,
            curMax: curMax,
            curMin: curMin,
            res: res,
        });
    }
    return res;
}
var nums1 = [2, 3, -2, 4];
var nums2 = [-2, 0, -1];
var res1 = maxProduct(nums1);
// const res2 = maxProduct(nums2)
