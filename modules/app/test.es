var $ = require('jquery');

// 测试UIbase
var UIBase = require('ui/base/base');
console.log(UIBase);

// 测试Promise
var Promise = require('es6-promise').Promise;
console.log(Promise);

// 测试template
require('util/template/template').template;
var tpl = __inline('test.tmpl');
$('body').append(tpl({}));

// 测试 underscore
var _ = require('underscore');
console.log(_);

// 测试data.js

var Data = require('lib/data.js/data.js');
Data.sub('set', 'a', function (e) {console.warn(e.data)});//订阅消息，当a被设置时，会派发消息
Data.set('a', 1);//存入数据
var d1 = Data.get('a');//读取数据

import {guid, uuid} from 'util/guid/guid';

var count = 10;
while(count--) {
    console.log(guid());
    console.log(uuid());
}
