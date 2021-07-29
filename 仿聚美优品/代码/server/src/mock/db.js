// mock框架，这里demo暂时没用到
var Mock = require('mockjs');


var apiGoods = require('./modules/goods.js');

module.exports = {
    goodsList: apiGoods.goodsList
}
