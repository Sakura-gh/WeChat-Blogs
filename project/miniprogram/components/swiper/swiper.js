Page({
  data: {
    cardCur: 0,
    swiperList: [{
        id: 0,
        title: "星之守护者",  
        type: 'image',
        createTime: "2020.1",
        url: 'http://img5.xiazaizhijia.com/walls/20160921/mid_23b7a4ecae76931.jpg',
    }, {
        id: 1,
        title: "离群之刺",
        type: 'image',
        createTime: "2020.1",
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
        id: 2,
        title: "刀锋舞者",
        type: 'image',
        createTime: "2020.1",
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
        id: 3,
        title: "正义天使",
        type: 'image',
        createTime: "2020.1",
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
        id: 4,
        title: "紫金罗刹",
        type: 'image',
        createTime: "2020.1",
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
        id: 5,
        title: "武装战姬",
        type: 'image',
        createTime: "2020.1",
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
        id: 6,
        title: "光辉女郎",
        type: 'image',
        createTime: "2020.1",
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
  },
  onLoad() {
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  }
})