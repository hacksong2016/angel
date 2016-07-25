oss = null;
var ALY = require('aliyun-sdk')
Meteor.startup(function() {
  oss = new ALY.OSS({
    accessKeyId: "",
    secretAccessKey: "",
    endpoint: 'http://oss-cn-beijing.aliyuncs.com',
    endpoint: 'http://oss-cn-beijing.aliyuncs.com',
    apiVersion: '2013-10-15'
  });
});
