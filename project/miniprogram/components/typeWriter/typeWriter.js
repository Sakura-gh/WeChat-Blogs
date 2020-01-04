// components/typeWriter/wh-typeWriter.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        Content: {
            type: String,
            default: ' '
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
    },

    /**
     * 组件的方法列表
     */
    methods: {
    },

    /**
     * 通过组件的生命周期函数执行代码
     */
    lifetimes: {
        attached: function () {
            // 在组件实例进入页面节点树时执行
        },
        detached: function () {
            // 在组件实例被从页面节点树移除时执行
        },
        ready: function () {
            // 在组件在视图层布局完成后执行
            var that = this
            //文字逐个显示
            var story = this.data.Content;
            var i = 0;
            var flag = 1;
            var time = setInterval(function () {
                var text = story.substring(0, i);
                if (flag == 1)
                    i++;
                else if (flag == 0)
                    i--;
                that.setData({
                    Content: text
                });
                if (i == story.length - 1)
                {
                    flag = 0;
                }
                else if (i == 0)
                {
                    flag = 1;
                }
                // if (text.length == story.length) {
                //     //   console.log("定时器结束！");
                //     //clearInterval(time);
                //     i = 0;
                // }
            }, 200)
        },
    },
})
