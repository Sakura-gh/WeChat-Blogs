// components/wave/wave.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
        type: String,
        value:""
    },
    backText: {
        type: String,
        value:""
    }  
  },

  /**
   * 组件的初始数据
   */
  data: {
      ColorList: app.globalData.ColorList,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
