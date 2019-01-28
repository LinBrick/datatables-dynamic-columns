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

  // 默认设置
  $.extend($.fn.dataTable.defaults,
  {
    language: {
        "sProcessing": "处理中...",
        "sLengthMenu": "显示 _MENU_ 项结果",
        "sZeroRecords": "没有匹配结果",
        "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
        "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
        "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
        "sInfoPostFix": "",
        "sSearch": "搜索:",
        "sUrl": "",
        "sEmptyTable": "表中数据为空",
        "sLoadingRecords": "载入中...",
        "sInfoThousands": ",",
        "oPaginate": {
            "sFirst": "首页",
            "sPrevious": "上页",
            "sNext": "下页",
            "sLast": "末页"
        },
        "oAria": {
            "sSortAscending": ": 以升序排列此列",
            "sSortDescending": ": 以降序排列此列"
        }
      }
  });
  
  //初始化dataTables
  $('#example').DataTable({
    ordering:  false,// 禁用排序
    data: dataList,
    scrollY: 400 // 表格里使用滚动
  });

});