# datatables-dynamic-columns
在实际开发当中，往往会遇到Table的列太多的情况。解决方案会有添加横向混动条，把列合并等等。而我的方案是根据用户设置排序，动态隐藏显示列。

[在线预览](https://ll527563266.github.io/datatables-dynamic-columns/)

注意：此例子只是演示这种设计思路，大家可以根据此例子派生，实现自己在项目中需要的效果。

![演示图](https://ll527563266.github.io/datatables-dynamic-columns/demo.gif)

# html
```html
  <table id="page-table">
      <thead></thead>
      <tbody></tbody>
  </table>
```

# javascript 
```javascript
  new $.pageSearch({
    customColumns:{
      pageId: pageId,// 唯一标识
      pageFieldList:pageFieldList,
      // dataTables的columns参数写这里
      columns:{
        column1:{
          width:200
        }
      },
      // dataTables的aoColumnDefs参数写这里
      aoColumnDefs:{
        column2:{
          width:200,
          mRender: function (data, type, full) {
            return 'custom ' + data;
          }
        }
      }
    },
    DataTable:{
      data: dataList // dataTables的data
    }
  });
```

# 关于例子代码说明
* 本例子主要是基于dataTables来实现的。[中文官网](http://www.datatables.club/)
* 由于作者偷懒，引用了两个个插件来实现功能，只是给大家做个演示而已，如有看不懂插件相关代码的可以查看各自的官网了解：
  * artDialog(经典的网页对话框组件，帮助实现弹窗效果)。[官网](http://aui.github.io/artDialog/)
  * jquery-ui(帮助实现拖拽排序效果)。[官网](https://jqueryui.com/)
