var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){function run(){var g=function(id){return document.getElementById(id)},ttl=g("mmt"),btn=g("mmb"),menu=g("mm"),body=document.getElementsByTagName("body")[0],on=false,html,height;if(!btn||!menu||!body){return}function onclick(){on=!on;if(on){btn.className="on";menu.className="on";height=Math.max(window.innerHeight||document.documentElement.clientHeight,body.offsetHeight,menu.offsetHeight);menu.style.height=height+"px"}else{btn.className="off";menu.className="off"}}ttl.onclick=onclick;btn.onclick=onclick;menu.onclick=function(e){var target,parent;target=e?e.target:window.event.srcElement;target=target.nodeType===3?target.parentNode:target;if(target.tagName==="DIV"){parent=target.parentNode;parent.className=parent.className?"":"expanded"}}}var readyTimer=setInterval(function(){if(document.readyState==="complete"||document.readyState==="interactive"){run();clearInterval(readyTimer)}},10)})();

}
/*
     FILE ARCHIVED ON 23:20:06 Jan 21, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:32:10 Mar 10, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.089
  exclusion.robots.policy: 0.069
  cdx.remote: 0.136
  esindex: 0.025
  LoadShardBlock: 284.848 (6)
  PetaboxLoader3.datanode: 432.83 (8)
  load_resource: 513.52 (2)
  PetaboxLoader3.resolve: 244.504 (2)
*/