$(document).ready(function() {

  var dataList = [];
  var dataLength = 100;

  //初始化数据
  (function(){
    for(var i = 0;i < dataLength;i++){
      var row = [];
      for(var j = 0;j < 10;j++){
        row.push('Row ' + (i + 1) + ' Data ' + (j + 1));
      }
      dataList.push(row);
    }
  }());

  // dataTables默认设置
  $.extend($.fn.dataTable.defaults,
  {
    searching: false,// 禁用搜索
    ordering: false,// 禁用排序
    dom: "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-5 page-info'li><'col-sm-7'p>>"
  });
  
  //初始化dataTables
  $('#example').DataTable({
    data: dataList,
    scrollY: 400, // 表格里使用滚动
  });

});