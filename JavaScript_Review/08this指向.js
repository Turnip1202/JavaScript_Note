var name = '李四';
var obj = {
  name: '张三',
  speak:function() {
    showName();//没有人调用，故指向window；其他情况，谁调用，this指向谁
  }
};
function showName() { 
  console.log(this.name);
};
obj.speak();//浏览器中将打印李四，但是在node中，打印undefined，因为node中this默认指向空对象
