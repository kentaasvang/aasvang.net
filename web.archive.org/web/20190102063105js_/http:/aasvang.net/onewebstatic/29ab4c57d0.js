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

(function(){function run(){var segments=[],innerBody=document.querySelector(".innerBody"),innerParent=innerBody.parentNode,leaves=document.querySelectorAll(".mobile-leaf"),src,newBase,newLeaf,i,node,base,len,leaf,seg,weight,id;for(i=0,len=leaves.length;i<len;i+=1){leaf=leaves[i];weight=(leaf.getAttribute("data-weight")||0)-0;if(weight){node=leaf.parentNode;base=null;id=leaf.getAttribute("data-id");while(node.tagName!=="BODY"&&!base){base=/mobile-base/.test(node.className)?node:base;id=id||node.getAttribute("data-id");node=node.parentNode}segments.push({id:id,leaf:leaf,base:base,weight:weight})}}segments.sort(function(a,b){return a.weight-b.weight});for(i=0,len=segments.length;i<len;i+=1){seg=segments[i];newLeaf=document.createElement("DIV");newLeaf.setAttribute("class",seg.leaf.className);if(seg.id){newLeaf.setAttribute("data-id",seg.id)}newLeaf.setAttribute("data-weight",seg.weight);src=newLeaf;if(seg.base){newBase=document.createElement("DIV");newBase.setAttribute("class",seg.base.className);newBase.appendChild(newLeaf);src=newBase}seg.leaf.className+=" mobile-hide";src.className+=" mobile-show";if(seg.weight<0){innerParent.insertBefore(src,innerBody)}else{innerParent.appendChild(src)}seg.newLeaf=newLeaf}function isMobile(){var width=window.innerWidth||document.documentElement.clientWidth;return width<=650}function move(){var mobile=isMobile();for(i=0,len=segments.length;i<len;i+=1){seg=segments[i];if(mobile){if(seg.newLeaf&&seg.leaf&&seg.leaf.children.length){addChildren(seg.newLeaf,seg.leaf.children)}}else{if(seg.leaf&&seg.newLeaf&&seg.newLeaf.children.length){addChildren(seg.leaf,seg.newLeaf.children)}}}}function addChildren(node,children){var child=children[0];while(child){node.appendChild(child);child=children[0]}}move();var timer;function timedMove(){clearTimeout(timer);timer=setTimeout(move,200)}if(window.addEventListener){window.addEventListener("resize",timedMove)}else if(window.attachEvent){window.attachEvent("onresize",timedMove)}}var readyTimer=setInterval(function(){if(document.readyState==="complete"){run();clearInterval(readyTimer)}},10);window.runMobileSort=run})();

}
/*
     FILE ARCHIVED ON 06:00:19 Jan 29, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:32:10 Mar 10, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.21
  exclusion.robots.policy: 0.186
  cdx.remote: 0.202
  esindex: 0.017
  LoadShardBlock: 269.697 (6)
  PetaboxLoader3.datanode: 122.794 (8)
  PetaboxLoader3.resolve: 457.281 (4)
  load_resource: 360.879 (2)
*/