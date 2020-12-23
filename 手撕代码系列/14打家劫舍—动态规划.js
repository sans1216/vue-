//小偷计划偷窃沿街的房屋，每间房间都藏有一定的现金，但相邻的放酒如果在同一晚上被小偷闯入，系统回自动报警
//给定一个代表每个房屋存放金额的非负整数数组，计算不触动警报装置的情况下，一夜之内能够偷窃到的最高金额

//输入: [1,2,3,1]
//输出：4
//解释：偷窃1号房屋（金额=1），然后偷窃3号房屋（金额=3）.偷窃到的最高金额=1+3=4

//输入:[2,7,9,3,1]
//输出：12
//解释：偷窃1号房屋（金额=2），偷窃3号房屋（金额=9），偷窃5号房屋（金额=1）

var rob = function(nums) {
    return anotherRob(nums,nums.length-1)
}
var anotherRob = function(nums ,lastIndex) {
    if(lastIndex == 0) {
        return nums[0];
    }
    let planA = anotherRob(nums,lastIndex-2)+nums[lastIndex];
    let planB = anotherRob(nums,lastIndex-1);
    return Math.max(planA,planB);
}
//递归转迭代
var rob = function(nums) {
    if(nums.length === 0) {
        return 0;
    }
    var dp = new Array(nums.length+1);
    dp[0] = 0;
    dp[1] = nums[0];
    for(let i = 2;i<nums.length+1;i++) {
        dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1]);
    }
    return dp[nums.length];
};
