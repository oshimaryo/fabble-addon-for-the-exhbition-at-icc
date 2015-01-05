var self = require('sdk/self');
var tabs = require('sdk/tabs');
var pageMod = require('sdk/page-mod');
var timer = require('sdk/timers');
var utils = require('sdk/window/utils');
var data = self.data;

var active = utils.getMostRecentBrowserWindow();
active.BrowserFullScreen();

pageMod.PageMod({
  include: "*",
  contentScriptWhen: "end",
  contentScriptFile: [
    data.url("js/content.js")
  ],
});

tabs.open({
  url: "http://fabble.cc",
  isPinned: true,
  onOpen: function onOpen(tab) {
    tabs[0].close();
  }
});

tabs.on("ready", function onOpen(tab) {
  var duration = 60 * 1000;
  timer.setTimeout(closeTabs, duration);
});

function closeTabs(){
  for(var i=0; i<tabs.length; i++){
    if(i !== 0){
      tabs[i].close("console.log('closetabs')");
    }
    else {
      tabs[i].pin();
    }
  }
  var tmp_active = utils.getMostRecentBrowserWindow();
  if(!tmp_active.fullScreen){
    tmp_active.BrowserFullScreen();
  }
}
