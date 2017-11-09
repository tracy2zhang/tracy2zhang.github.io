webpackJsonp([5],{651:function(t,e,i){function n(t){i(698)}var s=i(6)(i(680),i(716),n,"data-v-4b8ff140",null);t.exports=s.exports},654:function(t,e,i){"use strict";var n=i(25),s=i.n(n),a=i(54);e.a={computed:s()({},i.i(a.a)(["playlist"])),mounted:function(){this.handlePlaylist(this.playlist)},activated:function(){this.handlePlaylist(this.playlist)},watch:{playlist:function(){this.handlePlaylist(this.playlist)}},methods:{handlePlaylist:function(){throw new Error("Component must implements handlePlaylist method")}}}},674:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(39),s=i.n(n),a=i(38),r=i.n(a),o=i(56),l=i.n(o),A=i(94),c=i.n(A),u=i(37),d=i(74);e.default={name:"listview",props:{data:{type:Array,default:[]},selectItem:Function},components:{Scroller:l.a,Loading:c.a},created:function(){this.touch={originalIndex:0,y:0,anchorItemHeight:18},this.groupHeightList=[]},data:function(){return{currentIndex:0,hideFixedTitle:!1}},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},watch:{data:i.i(d.a)(r()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.i(u.b)(50);case 2:this._caculateHeight();case 3:case"end":return t.stop()}},t,this)})))},methods:{onShortcutTouchstart:function(t){var e=t.target,i=t.touches[0],n=e.dataset.index;this.touch.y=i.pageY,n&&(this.touch.anchorItemHeight=e.clientHeight,this.touch.originalIndex=+n,this._scrollToIndex(this.touch.originalIndex))},onShortcutTouchmove:function(t){var e=t.touches[0],i=Math.floor((e.pageY-this.touch.y)/this.touch.anchorItemHeight);this._scrollToIndex(this.touch.originalIndex+i)},_scrollToIndex:function(t){var e=this.$refs,i=e.scroller,n=e.groupList;t<0||t>n.length-1||(this.currentIndex=t,i.scrollToElement(n[t],0))},onScroll:function(t){var e=t.y;this.hideFixedTitle=e>=0;var i=this.groupHeightList.findIndex(function(t){return t>=-e});this.currentIndex=i<0?0:i},_caculateHeight:function(){var t=this;this.groupHeightList=[],this.$refs.groupList.reduce(function(e,i){var n=e+i.clientHeight;return t.groupHeightList.push(n),n},0)},select:function(t){this.selectItem&&this.selectItem(t)},refresh:function(){this.$refs.scroller.refresh()}}}},680:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(25),s=i.n(n),a=i(54),r=i(44),o=i(708),l=i.n(o),A=i(654),c=i(55);e.default={name:"singer",components:{Listview:l.a},mixins:[A.a],created:function(){this._getSingerList()},computed:s()({},i.i(a.a)(["singerGroupList"])),methods:s()({},i.i(a.c)({_getSingerList:r.p}),{selectSinger:function(t){this.$router.push("/singer/"+t.id)},handlePlaylist:function(t){var e=t.length>0?c.f:0;this.$refs.singer.style.bottom=e,this.$refs.listview.refresh()}})}},686:function(t,e,i){e=t.exports=i(644)(!0),e.push([t.i,".listview[data-v-45207430]{position:relative;width:100%;height:100%;overflow:hidden;background:#222}.listview .scroller[data-v-45207430]{width:100%;height:100%}.listview .list-group[data-v-45207430]{padding-bottom:30px}.listview .list-group .list-group-title[data-v-45207430]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .list-group .list-group-item[data-v-45207430]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:20px 0 0 30px}.listview .list-group .list-group-item .avatar[data-v-45207430]{width:50px;height:50px;border-radius:50%}.listview .list-group .list-group-item .name[data-v-45207430]{margin-left:20px;color:hsla(0,0%,100%,.5);font-size:14px}.listview .list-shortcut[data-v-45207430]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;z-index:30;right:0;top:50%;transform:translateY(-50%);width:20px;padding:10px 0;border-radius:10px;text-align:center;background:rgba(0,0,0,.3);font-family:Helvetica}.listview .list-shortcut .item[data-v-45207430]{padding:3px;line-height:1;color:hsla(0,0%,100%,.5);font-size:12px}.listview .list-shortcut .item.current[data-v-45207430]{color:#ffcd32}.listview .list-fixed[data-v-45207430]{position:absolute;top:0;left:0;width:100%}.listview .list-fixed .fixed-title[data-v-45207430]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .loading-wrapper[data-v-45207430]{margin-top:20px;text-align:center}","",{version:3,sources:["/Users/utopia_one/workspace/vue-music/src/components/base/listview/listview.vue"],names:[],mappings:"AACA,2BACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,eAAiB,CAClB,AACD,qCACE,WAAY,AACZ,WAAa,CACd,AACD,uCACE,mBAAqB,CACtB,AACD,yDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAAgC,AAChC,eAAiB,CAClB,AACD,wDACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,qBAAuB,CACxB,AACD,gEACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,8DACE,iBAAkB,AAClB,yBAAgC,AAChC,cAAgB,CACjB,AACD,0CACE,yBAA0B,AACvB,sBAAuB,AACtB,qBAAsB,AAClB,iBAAkB,AAC1B,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,QAAS,AACT,2BAA4B,AAC5B,WAAY,AACZ,eAAgB,AAChB,mBAAoB,AACpB,kBAAmB,AACnB,0BAA+B,AAC/B,qBAAuB,CACxB,AACD,gDACE,YAAa,AACb,cAAe,AACf,yBAAgC,AAChC,cAAgB,CACjB,AACD,wDACE,aAAe,CAChB,AACD,uCACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,UAAY,CACb,AACD,oDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAAgC,AAChC,eAAiB,CAClB,AACD,4CACE,gBAAiB,AACjB,iBAAmB,CACpB",file:"listview.vue",sourcesContent:["\n.listview[data-v-45207430] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #222;\n}\n.listview .scroller[data-v-45207430] {\n  width: 100%;\n  height: 100%;\n}\n.listview .list-group[data-v-45207430] {\n  padding-bottom: 30px;\n}\n.listview .list-group .list-group-title[data-v-45207430] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.5);\n  background: #333;\n}\n.listview .list-group .list-group-item[data-v-45207430] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 20px 0 0 30px;\n}\n.listview .list-group .list-group-item .avatar[data-v-45207430] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.listview .list-group .list-group-item .name[data-v-45207430] {\n  margin-left: 20px;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 14px;\n}\n.listview .list-shortcut[data-v-45207430] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: absolute;\n  z-index: 30;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  padding: 10px 0;\n  border-radius: 10px;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.3);\n  font-family: Helvetica;\n}\n.listview .list-shortcut .item[data-v-45207430] {\n  padding: 3px;\n  line-height: 1;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n}\n.listview .list-shortcut .item.current[data-v-45207430] {\n  color: #ffcd32;\n}\n.listview .list-fixed[data-v-45207430] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.listview .list-fixed .fixed-title[data-v-45207430] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.5);\n  background: #333;\n}\n.listview .loading-wrapper[data-v-45207430] {\n  margin-top: 20px;\n  text-align: center;\n}\n"],sourceRoot:""}])},687:function(t,e,i){e=t.exports=i(644)(!0),e.push([t.i,".singer[data-v-4b8ff140]{position:absolute;top:88px;bottom:0;width:100%}","",{version:3,sources:["/Users/utopia_one/workspace/vue-music/src/components/singer/singer.vue"],names:[],mappings:"AACA,yBACE,kBAAmB,AACnB,SAAU,AACV,SAAU,AACV,UAAY,CACb",file:"singer.vue",sourcesContent:["\n.singer[data-v-4b8ff140] {\n  position: absolute;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n}\n"],sourceRoot:""}])},697:function(t,e,i){var n=i(686);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(645)("01de3528",n,!0)},698:function(t,e,i){var n=i(687);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(645)("7c4c98a3",n,!0)},708:function(t,e,i){function n(t){i(697)}var s=i(6)(i(674),i(715),n,"data-v-45207430",null);t.exports=s.exports},715:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"listview"},[i("div",{directives:[{name:"show",rawName:"v-show",value:0==t.data.length,expression:"data.length == 0"}],staticClass:"loading-wrapper"},[i("loading",{attrs:{scale:1.5}})],1),t._v(" "),i("scroller",{ref:"scroller",staticClass:"scroller",attrs:{data:t.data,onScroll:t.onScroll}},[i("ul",t._l(t.data,function(e){return i("li",{ref:"groupList",refInFor:!0,staticClass:"list-group"},[i("h2",{staticClass:"list-group-title"},[t._v(t._s(e.title))]),t._v(" "),i("ul",t._l(e.items,function(e){return i("li",{staticClass:"list-group-item",on:{"!click":function(i){t.select(e)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"item.avatar"}],staticClass:"avatar"}),t._v(" "),i("span",{staticClass:"name"},[t._v(t._s(e.name))])])}))])}))]),t._v(" "),i("div",{staticClass:"list-shortcut",on:{touchstart:t.onShortcutTouchstart,touchmove:function(e){e.stopPropagation(),e.preventDefault(),t.onShortcutTouchmove(e)}}},[i("ul",t._l(t.shortcutList,function(e,n){return i("li",{staticClass:"item",class:{current:n===t.currentIndex},attrs:{"data-index":n}},[t._v("\n        "+t._s(e)+"\n      ")])}))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle&&!t.hideFixedTitle,expression:"fixedTitle && !hideFixedTitle"}],ref:"fixed",staticClass:"list-fixed"},[i("div",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle)+" ")])])],1)},staticRenderFns:[]}},716:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"singer",staticClass:"singer"},[i("listview",{ref:"listview",attrs:{data:t.singerGroupList,selectItem:t.selectSinger}}),t._v(" "),i("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.d3824ddb86d8f82a08fb.js.map