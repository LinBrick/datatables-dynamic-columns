$(document).ready(function() {

  var dataList = [];
  var dataLength = 100;
  var pageFieldList = [
    {
      display: true,
      displayName: 'Column1',
      fieldName: 'column1'
    },
    {
      display: true,
      displayName: 'Column2',
      fieldName: 'column2'
    },
    {
      display: true,
      displayName: 'Column3',
      fieldName: 'column3'
    },
    {
      display: true,
      displayName: 'Column4',
      fieldName: 'column4'
    },
    {
      display: true,
      displayName: 'Column5',
      fieldName: 'column5'
    },
    {
      display: true,
      displayName: 'Column6',
      fieldName: 'column6'
    },
    {
      display: true,
      displayName: 'Column7',
      fieldName: 'column7'
    },
    {
      display: true,
      displayName: 'Column8',
      fieldName: 'column8'
    },
    {
      display: true,
      displayName: 'Column9',
      fieldName: 'column9'
    },
    {
      display: true,
      displayName: 'Column10',
      fieldName: 'column10'
    }
  ];

  //初始化数据
  (function(){
    for(var i = 0;i < dataLength;i++){
      dataList.push({
        column1:'Row ' + (i + 1) + ' Data 1',
        column2:'Row ' + (i + 1) + ' Data 2',
        column3:'Row ' + (i + 1) + ' Data 3',
        column4:'Row ' + (i + 1) + ' Data 4',
        column5:'Row ' + (i + 1) + ' Data 5',
        column6:'Row ' + (i + 1) + ' Data 6',
        column7:'Row ' + (i + 1) + ' Data 7',
        column8:'Row ' + (i + 1) + ' Data 8',
        column9:'Row ' + (i + 1) + ' Data 9',
        column10:'Row ' + (i + 1) + ' Data 10'
      });
      // var row = [];
      // for(var j = 0;j < 10;j++){
      //   row.push('Row ' + (i + 1) + ' Data ' + (j + 1));
      // }
      // dataList.push(row);
    }
  }());
  
  new $.pageSearch({
    customColumns:{
      pageId:'0000001',
      pageFieldList:pageFieldList
    },
    DataTable:{
      data: dataList,
    //   columns: [
    //     { data: 'column1' },
    //     { data: 'column2' },
    //     { data: 'column3' },
    //     { data: 'column4' },
    //     { data: 'column5' },
    //     { data: 'column6' },
    //     { data: 'column7' },
    //     { data: 'column8' },
    //     { data: 'column9' },
    //     { data: 'column10' }
    // ],
    }
  });

});