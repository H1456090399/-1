//获取应用实例
const app = getApp()
//下面这三个函数，就是初始化状态的。
function sort_display() {
  return ['sort_hide', 'sort_hide'];
}
function item_nav_set_list_light() {
  return ['', ''];
}
function item_nav_set_list_content_light() {
  return [
    ['', '', '', ''],
    ['', '']
  ];
}
Page({
  data: {
    //这里是存储数据的地方，把改变过的东西放在这里。
    //主菜单高亮
    item_nav_set_list_light: item_nav_set_list_light(),
    //储存子菜单显示与否
    sort_status: sort_display(),
    //    子菜单高亮
    item_nav_set_list_content_light: item_nav_set_list_content_light(),
  },
  //事件处理函数

  // 点击排序设置
  //这个是点击主菜单触发的函数
  item_nav_set_list_display: function (e) {
    //  首先获取一下，点击的信息，下面这行就是得出点击的哪个主菜单
    var index = parseInt(e.currentTarget.dataset.index);
    //   将初始化的状态获取到。   
    //因为思路是点击一个主菜单，然后将所有子菜单隐藏，然后在对点击的主菜单
    //下的子菜单进行显示处理 。所以获取初始化状态就是隐藏所有子菜单的动作。
    //因为最后是将这个值赋值给data中的数据
    //页面根据data这种的数据做出改变。
    var new_sort_display = sort_display();
    var new_item_nav_set_list_light = item_nav_set_list_light();
    //if判断状态，然后做出响应动作
    if (this.data.sort_status[index] == 'sort_hide') {
      new_sort_display[index] = 'sort_show';
      new_item_nav_set_list_light[index] = 'item_nav_set_list_light';
    } else {
      new_sort_display[index] = 'sort_hide';
      new_item_nav_set_list_light[index] = '';
    }
    //最后将值赋给data
    this.setData({
      sort_status: new_sort_display,
      item_nav_set_list_light: new_item_nav_set_list_light
    });
  },
  //下面这个同理，就不罗嗦了。
  // 点击排序设置内容
  item_nav_set_list_content_display: function (e) {
    var new_sort_display = sort_display();
    var new_item_nav_set_list_content_light = item_nav_set_list_content_light();
    var indexArray = e.currentTarget.dataset.index.split('_');
    if (indexArray[0] == 0) {
      new_item_nav_set_list_content_light[0][indexArray[1]] = 'item_nav_set_list_content_light';
      new_item_nav_set_list_content_light[1] = this.data.item_nav_set_list_content_light[1];
    } else if (indexArray[0] == 1) {
      new_item_nav_set_list_content_light[1][indexArray[1]] = 'item_nav_set_list_content_light';
      new_item_nav_set_list_content_light[0] = this.data.item_nav_set_list_content_light[0];
    }
    this.setData({
      sort_status: new_sort_display,
      item_nav_set_list_content_light: new_item_nav_set_list_content_light
    });
    console.log(new_item_nav_set_list_content_light);
  }
})