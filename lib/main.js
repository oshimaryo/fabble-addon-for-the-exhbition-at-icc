var self = require('sdk/self');
var tabs = require('sdk/tabs');
var pageMod = require('sdk/page-mod');
var timer = require('sdk/timers');

var data = self.data;

pageMod.PageMod({
  include: "*",
  contentScriptWhen: "end",
  contentScriptFile: [
    data.url("js/content.js")
  ],
});

tabs.on("open", function onOpen(tab) {
  var duration = 60 * 1000;
  timer.setTimeout(closeTabs, duration);
});

function closeTabs(){
  for(var i=0; i<tabs.length; i++){
    if(i !== 0){
      tabs[i].close("console.log('closetabs')");
    }
  }
}
