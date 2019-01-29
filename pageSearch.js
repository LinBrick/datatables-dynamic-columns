!(function () {

  function pageSearch(options){
    this.table = null;
    this.options = $.extend({
    container:'#my-page',//容器
    settingBtn:'#setting',//容器内的按钮
    table:'#page-table',//容器内的table
    customColumns:{
      pageId: '',//(必填)自定义列需要用到的id 必须唯一
      pageFieldList: [],//(必填)页面字段配置
      columns: null,//列配置项
      columnDefaults: null
    },
    DataTable:{}//保留dataTables参数
    },options);

    this.main();
  }

  $.extend(pageSearch.prototype,{
    main:function(){
      this.renderThead();
      this.setDefault();
      this.initTable();
      this.events();
    },
    // 对datatables设置默认参数
    setDefault:function(){
      $.extend($.fn.dataTable.defaults,{
        searching: false,// 禁用搜索
        ordering: false,// 禁用排序
        dom: "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-5 page-info'li><'col-sm-7'p>>",
        scrollY: 400 // 表格里使用滚动
      });
    },
    // 初始化dataTables
    initTable:function(){
      var opts = this.options;
      var formatColumns = this.handleDataTableOption();
      var dataTablesOption = $.extend({
        columns:formatColumns.columns,
        aoColumnDefs:formatColumns.aoColumnDefs
      },opts.DataTable);
      this.table = $(opts.table,opts.container).DataTable(dataTablesOption);
    },
    // 事件绑定
    events:function(){
      var that = this;
      var opts = this.options;
      //设置
      $(opts.settingBtn,opts.container).click(function(){
        that.actionSetting();
      });
    },
    // 把数据转成dataTables需要的格式
    handleDataTableOption:function(){
      var customColumns = this.options.customColumns;
      var colums = [];
      var columnDefs = [];
      $.each(customColumns.pageFieldList, function (i, fieldInfo) {
          var fieldName = fieldInfo.fieldName;
          var columnDefObj = customColumns.columnDefaults && customColumns.columnDefaults[fieldName];
          colums.push($.extend({
              data: fieldName,
              visible: fieldInfo.display
          }, customColumns.columns ? customColumns.columns[fieldName] : {}));
          if (columnDefObj) {
              columnDefs.push($.extend({
                  aTargets: [i]
              }, columnDefObj));
          }
      });

      return {
          columns: colums,
          aoColumnDefs: columnDefs
      }
    },
    // 渲染表头
    renderThead:function(){
      var that = this;
      var customColumns = this.options.customColumns;
      var thead = '<tr>';
      $.each(customColumns.pageFieldList, function (i, fieldInfo) {
          if (fieldInfo.display) {
              thead += '<th title="' + fieldInfo.displayName + '">' + fieldInfo.displayName + '</th>';
          } else {
              thead += '<th style="display:none;" title="' + fieldInfo.displayName + '">' + fieldInfo.displayName + '</th>';
          }
      });
      thead += '</tr>';
      $('thead', that.options.table).html(thead);
    },
    // 开始设置
    actionSetting:function(){
      var that = this;
      var list = this.options.customColumns.pageFieldList;
      dialog({
        title:'设置',
        content:this.getDialogContent(list),
        width:300,
        height:400,
        onshow:function(){
          $('#sortable',this.node).sortable().disableSelection();
        },
        skin:'scroll-y',
        okValue:'保存',
        ok:function(){
          var fieldList = [];
          $('li',this.node).each(function(){
            var data = $(this).data();
            fieldList.push({
              display: $('[name="display"]',this).prop('checked'),
              displayName: data.displayName,
              fieldName: data.fieldName
            });
          });
          if(!localStorage){
            alert('抱歉，浏览器不支持localStorage，数据保存失败！')
          }else{
            // 这里做本地缓存，可以换成ajax
            localStorage.setItem(that.options.customColumns.pageId,JSON.stringify(fieldList));
            alert('保存成功');
            that.options.customColumns.pageFieldList = fieldList;
            that.columnOptions = that.handleDataTableOption();
            // 销毁datatables实例
            that.table && that.table.destroy();
            // 重绘表头
            that.renderThead();
            // 用新的options重新渲染dataTables
            that.table && (that.table = $(that.options.table,that.options.container).DataTable($.extend(that.columnOptions, that.options.DataTable)));
            //关闭窗口
            this.close().remove();
          }
          return false;
        },
        cancelValue:'取消',
        cancel:true
      }).showModal();
    },
    // 生成弹窗的内容
    getDialogContent:function(list){
      var html = '';
      html += '<h4 class="green">可拖拽排序列表</h4>';
      html += '<ul id="sortable">';
      for(var i = 0;i < list.length;i++){
        html += '<li class="ui-state-default" data-display-name="' + list[i].displayName + '" data-field-name="' + list[i].fieldName + '">';
        html += '<span>' + list[i].displayName + '</span>';
        html += '<input type="checkbox" name="display" title="是否展示" ' + (list[i].display ? 'checked="checked"' : '') + ' />';
        html += '</li>';
      }
      html += '</ul>';
      return html;
    }
  });

  $.pageSearch = pageSearch;
})();