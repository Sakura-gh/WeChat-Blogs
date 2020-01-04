// miniprogram/pages/index/index.js
const app = getApp()
const jinrishici = require('../../utils/jinrishici.js')
let touchDotX = 0;//X按下时坐标
let touchDotY = 0;//y按下时坐标
let interval;//计时器
let time = 0;//从按下到松开共多少时间*100

Page({
  /**
   * 页面的初始数据
   */
    data: {
        SearchContent:null,
    },

    /**
 * 监听屏幕滚动 判断上下滚动
 */
    onPageScroll: function (event) {
        this.setData({
            scrollTop: event.detail.scrollTop
        })
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
   },

  /**
   * 生命周期函数--监听页面加载
   */
    onLoad: function (options) {
        const that = this
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo:true
            })
        }
        
        // 每日诗词
        jinrishici.load(result => {
            // 下面是处理逻辑示例
            this.setData({
                jinrishici: result.data.content
            });
        });
    },
 
    showModal(e) {
        console.log(e);
        this.setData({
            modalName: e.currentTarget.dataset.target
        })
    },
    hideModal(e) {
        this.setData({
            modalName: null
        })
    },
    ////////////////////////////////////////
    tabSelect(e) {
        //点击切换界面
        this.randomNum();
        this.setData({
            postList: [],
        });

        
        this.setData({
            TabCur: e.currentTarget.dataset.id,
            scrollLeft: (e.currentTarget.dataset.id - 1) * 60
        });
        console.log(e);
    },
    /////////////////////////////////////
    switchSex: function (e) {
        // console.warn(e.detail.value);
        app.globalData.skin = e.detail.value
        console.log(app.globalData.skin)
        this.setData({
            skin: e.detail.value
        });
    },
    // 触摸开始事件
    touchStart: function (e) {
        touchDotX = e.touches[0].pageX; // 获取触摸时的原点
        touchDotY = e.touches[0].pageY;
        // 使用js计时器记录时间    
        interval = setInterval(function () {
            time++;
        }, 100);
    },
    // 触摸结束事件
    touchEnd: function (e) {
        let touchMoveX = e.changedTouches[0].pageX;
        let touchMoveY = e.changedTouches[0].pageY;
        let tmX = touchMoveX - touchDotX;
        let tmY = touchMoveY - touchDotY;
        if (time < 20) {
            let absX = Math.abs(tmX);
            let absY = Math.abs(tmY);
            if (absX > 2 * absY) {
                if (tmX < 0) {
                    this.setData({
                        modalName: null
                    })
                } else {
                    this.setData({
                        modalName: "viewModal"
                    })
                }
            }
            if (absY > absX * 2 && tmY < 0) {
                console.log("==上滑动==")
            }
        }
        clearInterval(interval); // 清除setInterval
        time = 0;
    },
    // 关闭抽屉
    shutDownDrawer: function (e) {
        this.setData({
            modalName: null
        })
    },
    //冒泡事件
    maopao: function (e) {
        console.log("冒泡...")
    },
    showMask: function (e) {
        this.selectComponent("#authorCardId").showMask();
        this.shutDownDrawer();
    },
    showAuthors: function (e) {
        this.selectComponent("#authorsId").showMask();
        this.shutDownDrawer();
    },
    gotoLoL: function (e) {
        if(e)
        wx.navigateTo({
            url:"/pages/article1/article1"
        })
    },
    Search: function (e) {
        var content = e.detail.value.replace(/\s+/g, '');
        // console.log(content);
        var that = this;
        that.setData({
            SearchContent: content,
        });
    },
    //根据输入的文章名称进行跳转
    SearchSubmit: function (e) {
        var that = this;
        //content保存文章名称
        var content = that.data.SearchContent;
        if (content == "星之守护者" || content == "离群之刺" || content == "刀锋舞者" || content == "正义天使" || content == "紫金罗刹" || content == "武装战姬" || content == "光辉女郎") {
            wx.navigateTo({
                url: "/pages/article1/article1"
            })
        }
    },

    //获取随机数
    randomNum: function () {
        var num = Math.floor(Math.random() * 10);
        this.setData({
            randomNum: num
        });
    },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
    onShareAppMessage: function () {
        return {
            title: this.data.jinrishici,
            path: '/pages/index/index',
            imageUrl: 'https://pic4.zhimg.com/v2-242cf58cf46104c1b02540bb09490eba_1200x500.jpg',
        }
    },
})