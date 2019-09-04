//ws JSSDK封装

  const mqtt = require("mqtt");
  let mqttClient = null //mqtt实例
  let config = {
    clientId: 0,
    keepalive: 10060, // 保持链接60s
    reconnectPeriod: 5000, // 两次重连间隔
    reconnecting: true, // 是否重新连接
    resubscribe: true, // 重连后是否自动订阅,
    clean: false,
  }
  //生成四位随机数
  function fourRandom() {
    let out = 0
    do
      out = Math.floor(Math.random() * 10000);
    while (out < 1000)
    return out
  }
  config.clientId = new Date().getTime() + '' + fourRandom()
  // mqtt JSSDK封装 
  function MQtt() {}
  MQtt.prototype.start = function (cfg, callback) {
    let cfgs = Object.assign(config, cfg || {})
    mqttClient = mqtt.connect(cfgs.hostUrl, cfgs);
    if (callback) callback(mqttClient)
    this.onMessage().onConnect().onClose();
  }
  // //停止mqtt
  // MQtt.prototype.end = function () {
  //   if(mqttClient)
  //     mqttClient.end()
  // }
  //通过对于topic 订阅消息
  MQtt.prototype.subscribe = function (topicData) {
    mqttClient.subscribe(topicData)
  }
  //取消对于topic 订阅消息
  MQtt.prototype.unsubscribe = function (topicData) {
    // console.log(topicData);
    mqttClient.unsubscribe(topicData)
  }
  //结束mqtt
  MQtt.prototype.end = function () {
    mqttClient.end(true)
  }
  // 收到的消息
  MQtt.prototype.onMessage = function () {
    let that = this;
    if (mqttClient)
      mqttClient.on("message", function(topic, message){
        let msg = JSON.parse(message.toString());
        // console.log(topic,msg);
        //报警信息重写函数
        that.AlarmMessage(msg)
      });
    return this
  }
  // 连接成功
  MQtt.prototype.onConnect = function () {
    mqttClient.on("connect", () => {
      //console.log("~~~~~success~~~~");
    });
    return this
  }
  // 断开后触发
  MQtt.prototype.onClose = function () {
    mqttClient.on("close", () => {
      // console.log("~~~~~close~~~~~");
    });
    return this
  }
  // win.$mqtt = new MQtt();
  export default MQtt;

