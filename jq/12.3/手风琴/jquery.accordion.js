/**
 * Created by HUCC on 2017/4/12.
 */
$.fn.accordion = function (colors, width) {
  colors = colors || [];
  width = width || 0;


  var $li = this.find("li");
  console.log(this);

  var boxLength = this.width();
  // 占满整个盒子
  var maxLength = boxLength - ($li.length - 1) * width;
  var avgLength = boxLength / $li.length;

  //更改li的颜色
  $li.each(function (i, e) {
    $(e).css("backgroundColor", colors[i]);
  });

  //给li注册鼠标经过事件
  $li.on("mouseenter", function () {
    $(this).stop().animate({
      width: maxLength
    }).siblings().stop().animate({
      //其他兄弟的宽度为0
      width: width
    })
  });

  $li.on("mouseleave", function () {
    $li.stop().animate({
      width: avgLength
    });
  });
};