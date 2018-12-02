// pages/map/details.js
//获取应用实例
var app = getApp()
Page({
  data: {
    // 页面配置  
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0,
    // tab切换 
    currentTab: 0,
    buildlData: [
      {
        "name": "报到流程",
        "description": "<p>    </p>"
      },
      {
        "name": "住宿规章",
        "description": "<p><h4> 一、宿舍安全 </h4>1、不得出现违章电器：热得快、电夹板、卷发棒、电热毯、电饭煲、电磁炉、电热水壶、洗衣机等<br>&nbsp; &nbsp; 2、严禁出现存在安全隐患的物品：蚊香、蜡烛、火柴、打火机、酒精炉、香烟（烟头）等。<br>&nbsp; &nbsp; 3、小动物可能引发传染病，不允许在宿舍饲养。<br>&nbsp; &nbsp; 4、不得从宿舍内扯电线给电车充电，宿舍内网线等不能乱扯，不能将插板及电线扯到床铺上。<br>注意：<br> &nbsp; &nbsp; 1.凡是在寝室发现违章电器、违禁物品和小动物等，寝室评分一律记为违规宿舍，并通报批评。<br>&nbsp; &nbsp;  2.电吹风与电暖手器不允许在宿舍内使用，须在各寝室楼一楼大厅镜子旁的插口处使用。一旦发现在寝室内使用这两种电器，寝室评比一律记为违规宿舍。<br>&nbsp; &nbsp; 3.宿舍无人时，所有电器必须关闭或者插头从插座上拔下，如果室内无人时有用电设备工作，将在备注栏进行备注。</p><br> <p> <h4>二、宿舍卫生</h4>1.床铺：要求床铺无杂物，床头物品摆放整齐，床单整洁。<br>2.地面，墙壁：地面无垃圾、水渍，脚印，头发，垃圾桶无垃圾。<br>3.室内陈设：桌子摆放整齐、桌面物品整洁，鞋子统一摆放于床铺下方呈一条线，脸盆、暖瓶，板凳等摆放整齐。尤其是垃圾桶的摆放位置，不要放在走廊中间。<br>4.阳台：物品摆放整齐、无积灰，水壶统一摆放。<br>5.门窗，玻璃: 干净整洁。<br>6..配合度：出现不配合检查，、拒绝检查人员进入宿舍等情况，记为不及格，出现三次取消评比资格。（拒检：宿舍有人，超过一分钟未开门迎检称为拒检；宿舍无人，提前说明情况者，不扣分）<br> 7.检查宿舍时要求床铺无人，特殊情况除外。<br> 8.态度: 宿舍成员的态度表现，互相尊重。<br> 9.其它：不乱搭网线、无异味（饭香也不允许），禁止乱挂衣物（床上，墙上都不允许乱挂）等。</p><br> <p><h4>三、检查时间及公布</h4>1、检查时间：每周五进行例行检查，其他时间随机进行不定时抽查。<br>2、评比公布：每周日会将评比表张贴于宿舍楼下<br>注意：<br>1.每学期开展的宿舍卫生检查与文明寝室评比活动紧密相连，二者缺一不可评为文明寝室；<br>2.文明寝室称号获得寝室将颁发奖状及奖品；<br> 3.为保证同学们有一个安全良好的生活学习环境，一经发现大功率电器将取消本人及宿舍各人评优评先（包括奖助学金）以及优秀宿舍的评比资格；<br>4.另宿舍成员有晚归、酗酒、打架、留宿外人、私自互换宿舍等违纪行为，仍作为评比优秀宿舍的参考；<br>5.希望同学们仔细阅读卫生检查标准相关要求和学生手册相关规定，自觉营造洁净安全的寝室生活环境。</p>"
      },
      {
        "name": "生活指南",
        "description": "<p><h3>一、旅游景点</h3></p>"
      },
      {
        "name": "商丘周边",
        "description": "<p><h3>一、旅游景点</h3></p>"
      }

    ],
  },
  onLoad: function () {
    var that = this;
    // 获取系统信息 
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },
  imageLoad: function (e) {
    var _this = this;
    var $width = e.detail.width,    //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;   //图片的真实宽高比例
    var viewWidth = 500,           //设置图片显示宽度，
      viewHeight = 500 / ratio;    //计算的高度值   
    this.setData({
      imgwidth: viewWidth,
      imgheight: viewHeight
    })
  },

  // 滑动切换tab 
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  // 点击tab切换 
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
}) 