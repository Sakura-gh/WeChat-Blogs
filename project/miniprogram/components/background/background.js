const app = getApp();
Page({
  data: {
    ColorList: app.globalData.ColorList, 
    months: ["一月份", "二月份", "三月份", "四月份", "五月份", "六月份", "七月份", "八月份", "九月份", "十月份", "十一月份", "十二月份"],
    styles: ["“含蓄”", "“精神”", "“疏野”", "“清奇”", "“委曲”", "“形容”", "“劲健”", "“冲淡”", "“洗练”", "“细腻”", "“隽永”", "“流畅”"],
        hot: ["title1", "title2", "title3", "title4", "title5", "title6"],
    hotColor:["red","orange","green","blue","purple","pink"],
    },
    
    onLoad: function (options) {
        // 每日诗词
        jinrishici.load(result => {
            // 下面是处理逻辑示例
            this.setData({
                jinrishici: result.data.content
            });
        });
    },
    gotoHot: function (e) {
        wx.navigateTo({
            url:"/pages/article1/article1"
        })
    }

})

