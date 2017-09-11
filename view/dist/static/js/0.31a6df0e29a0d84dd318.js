webpackJsonp([0],{128:function(t,e,n){function a(t){n(140)}var i=n(51)(n(132),n(144),a,"data-v-7eb8a6e1",null);t.exports=i.exports},132:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(50),i=n.n(a),o=n(52);e.default={data:function(){return{playerConfig:{isShow:!1,src:""},picUrl:"",lyricList:[],songsMsg:{ar:"",name:""},startPlay:!1,currentId:"",controlTime:{curTime:"00:00",endTime:"00:00",lineWidth:"0%",lyricIndex:0,lyricPre:"-0%"}}},filters:{replaceTime:function(t){return t.replace(/\[\d{2}:\d{2}.\d*\]/g,"")}},created:function(){this.initView()},methods:i()({},n.i(o.b)(["getSongDetail","getLyricDetail","getSongUrl","getPicUrl"]),{initView:function(){this.currentId=this.$route.query.id,this.callSongDetail(this.currentId),window.requestAnimationFrame(function(){})},callSongDetail:function(t){var e=this,n={id:t};this.getSongUrl(n).then(function(t){e.playerConfig.src=t[0].url,e.playerConfig.isShow=!0}),this.getSongDetail(n).then(function(t){var n={id:t.songs[0].al.pic};return e.songsMsg.name=t.songs[0].name,e.songsMsg.ar=t.songs[0].ar[0].name,e.getPicUrl(n)}).then(function(t){e.picUrl=t.url}),this.getLyricDetail(n).then(function(t){var n=t.lrc.lyric.split(/\n/);e.lyricList=[],n.map(function(t,n){if(t){var a=t.match(/\[\d{2}:\d{2}.\d*\]/g)[0].replace(/(\[|\])/g,""),i=a.split(":"),o=60*Number(i[0])+Number(i[1]),r={nth:n,time:o,lyric:t.replace(/\[\d{2}:\d{2}.\d*\]/g,"")};e.lyricList.push(r)}})})},debounce:function(t,e,n){var a;return function(){var i=this,o=arguments,r=function(){a=null,n||t.apply(i,o)},A=n&&!a;clearTimeout(a),a=setTimeout(r,e),A&&t.apply(i,o)}},scrollLyric:function(t){for(var e=0;this.lyricList[e].time<t;)e++;this.controlTime.lyricIndex!=e&&(this.controlTime.lyricIndex=e,this.controlTime.lyricPre="-"+(e/this.lyricList.length*100).toFixed(2)+"%",console.log(this.controlTime.lyricPre))},watchAudio:function(){var t=this;if(this.$refs.audioPlay.paused)return!1;4==this.$refs.audioPlay.readyState&&(this.controlTime.lineWidth=(this.$refs.audioPlay.currentTime/this.$refs.audioPlay.duration*100).toFixed(2)+"%",this.controlTime.curTime=this.transTime(this.$refs.audioPlay.currentTime),this.controlTime.endTime=this.transTime(this.$refs.audioPlay.duration),this.scrollLyric(this.$refs.audioPlay.currentTime)),window.requestAnimationFrame(function(){t.debounce(t.watchAudio(),300)})},transTime:function(t){var e=Number(t).toFixed(0),n=0==e?e:Math.floor(e/60),a=e%60;return(n<10?"0":"")+n+":"+(a<10?"0":"")+a},callStartPlay:function(){this.startPlay=!this.startPlay,this.startPlay?(this.$refs.audioPlay.play(),this.watchAudio()):this.$refs.audioPlay.pause()}})}},136:function(t,e,n){e=t.exports=n(123)(!0),e.push([t.i,'.music-box[data-v-7eb8a6e1]{width:10rem;font-size:14px}.music-box>.song-wrap[data-v-7eb8a6e1]{position:relative;margin:1.33333rem auto .8rem}.music-box>.song-wrap>.song-disc[data-v-7eb8a6e1]{width:6.66667rem;height:6.66667rem;margin:0 auto;background-image:url("https://s3.music.126.net/m/s/img/disc-ip6.png?69796123ad7cfe95781ea38aac8f2d48");background-size:contain}.music-box>.song-wrap>.song-disc>.song-img[data-v-7eb8a6e1]{position:absolute;top:50%;left:50%;width:4.13333rem;height:4.13333rem;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.music-box>.song-wrap>.song-disc>.song-img>.u-img[data-v-7eb8a6e1]{width:100%;vertical-align:middle;border-radius:50%}.music-box>.song-wrap>.song-disc>.song-img>.u-img.img-rotate[data-v-7eb8a6e1]{-webkit-animation:rotate-img-data-v-7eb8a6e1 20s infinite linear;animation:rotate-img-data-v-7eb8a6e1 20s infinite linear;-webkit-animation-delay:1s;animation-delay:1s}@-webkit-keyframes rotate-img{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-img-data-v-7eb8a6e1{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.music-box>.song-wrap>.song-disc>.btn-sign[data-v-7eb8a6e1]:before{content:"";position:absolute;top:50%;left:50%}.music-box>.song-wrap>.song-disc>.btn-sign[data-v-7eb8a6e1]{position:absolute;width:2.56rem;height:3.65333rem;top:-1.33333rem;left:48%;background-image:url("https://s3.music.126.net/m/s/img/needle-ip6.png?be4ebbeb6befadfcae75ce174e7db862");background-size:contain;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:rotate(-30deg);transform:rotate(-30deg);transition:all 1s ease}.music-box>.song-wrap>.song-disc>.btn-sign.sign-rotate[data-v-7eb8a6e1]{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.music-box>.lyric-wrap[data-v-7eb8a6e1]{width:9.46667rem;height:4rem;padding-top:.53333rem;overflow:hidden;margin:0 auto;color:rgba(0,204,255,.4)}.music-box>.lyric-wrap .lyric-box[data-v-7eb8a6e1]{transition:all .2s ease}.music-box>.lyric-wrap .lyric-box>p[data-v-7eb8a6e1]{text-align:center;padding:2px 0}.music-box>.lyric-wrap .lyric-box>p.cur-lyric[data-v-7eb8a6e1]{font-size:16px;color:#0cf}.control-box[data-v-7eb8a6e1]{position:fixed;bottom:0;left:0;width:10rem;padding:.13333rem 0;background-color:rgba(153,204,153,.6);color:#fff;z-index:99}.control-box>.time-box[data-v-7eb8a6e1]{width:9.46667rem;line-height:.53333rem;margin:0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.control-box>.time-box>span[data-v-7eb8a6e1]{width:1.06667rem;text-align:center;overflow:hidden}.control-box>.time-box>.time-line[data-v-7eb8a6e1]{position:relative;width:6.66667rem}.control-box>.time-box>.time-line>.base-line[data-v-7eb8a6e1],.control-box>.time-box>.time-line>.current-line[data-v-7eb8a6e1]{position:absolute;top:50%;left:0;height:2px;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);background-color:#dcdcdc;border-radius:2px}.control-box>.time-box>.time-line>.base-line[data-v-7eb8a6e1]{width:6.66667rem}.control-box>.time-box>.time-line>.current-line[data-v-7eb8a6e1]{transition:width .1s ease;background-color:#0cf}.control-box>.menu-box[data-v-7eb8a6e1]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;width:9.46667rem;line-height:.8rem;margin:0 auto}.control-box>.menu-box>span[data-v-7eb8a6e1]{width:1.86667rem;text-align:center}.control-box>.menu-box>span>div.start[data-v-7eb8a6e1]{position:relative;width:.8rem;height:.8rem;margin:0 auto;border-radius:50%;border:1px solid #fff}.control-box>.menu-box>span>div.start>.btn-start[data-v-7eb8a6e1]{position:absolute;top:.2rem;left:.29333rem;border-top:.2rem solid transparent;border-bottom:.2rem solid transparent;border-left:.33333rem solid #fff}.control-box>.menu-box>span>div.start>.btn-pause[data-v-7eb8a6e1]{position:absolute;top:.2rem;left:.24rem;width:.10667rem;height:.4rem;background-color:#fff}.control-box>.menu-box>span>div.start>.btn-pause[data-v-7eb8a6e1]:after{content:"";position:absolute;top:0;left:.21333rem;width:.10667rem;height:.4rem;background-color:#fff}.player-box[data-v-7eb8a6e1]{position:fixed;bottom:0;left:0;width:10rem;height:1.6rem}',"",{version:3,sources:["E:/github/super_music/view/src/pages/Music/song.vue"],names:[],mappings:"AACA,4BACE,YAAa,AACb,cAAgB,CACjB,AACD,uCACI,kBAAmB,AACnB,4BAA+B,CAClC,AACD,kDACM,iBAAkB,AAClB,kBAAmB,AACnB,cAAe,AACf,uGAAwG,AACxG,uBAAyB,CAC9B,AACD,4DACQ,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,iBAAkB,AAClB,kBAAmB,AACnB,2CAA8C,AACtC,kCAAsC,CACrD,AACD,mEACU,WAAY,AACZ,sBAAuB,AACvB,iBAAmB,CAC5B,AACD,8EACY,iEAAsE,AAC9D,yDAA8D,AACtE,2BAAgC,AACxB,kBAAwB,CAC3C,AAID,8BACA,GACI,+BAAgC,AACxB,sBAAwB,CACnC,AACD,GACI,gCAAkC,AAC1B,uBAA0B,CACrC,CACA,AACD,sCACA,GACI,+BAAgC,AACxB,sBAAwB,CACnC,AACD,GACI,gCAAkC,AAC1B,uBAA0B,CACrC,CACA,AACD,mEACQ,WAAY,AACZ,kBAAmB,AACnB,QAAS,AACT,QAAU,CACjB,AACD,4DACQ,kBAAmB,AACnB,cAAe,AACf,kBAAmB,AACnB,gBAAiB,AACjB,SAAU,AACV,yGAA0G,AAC1G,wBAAyB,AACzB,6BAA8B,AACtB,qBAAsB,AAC9B,iCAAkC,AAC1B,yBAA0B,AAClC,sBAA4B,CACnC,AACD,wEACU,+BAAgC,AACxB,sBAAwB,CACzC,AACD,wCACI,iBAAkB,AAClB,YAAa,AACb,sBAAwB,AACxB,gBAAiB,AACjB,cAAe,AACf,wBAA8B,CACjC,AACD,mDACM,uBAA2B,CAChC,AACD,qDACQ,kBAAmB,AACnB,aAAe,CACtB,AACD,+DACU,eAAgB,AAChB,UAAe,CACxB,AACD,8BACE,eAAgB,AAChB,SAAU,AACV,OAAQ,AACR,YAAa,AACb,oBAAsB,AACtB,sCAA2C,AAC3C,WAAY,AACZ,UAAY,CACb,AACD,wCACI,iBAAkB,AAClB,sBAAwB,AACxB,cAAe,AACf,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,4BAA8B,CACrC,AACD,6CACM,iBAAkB,AAClB,kBAAmB,AACnB,eAAiB,CACtB,AACD,mDACM,kBAAmB,AACnB,gBAAkB,CACvB,AACD,+HACQ,kBAAmB,AACnB,QAAS,AACT,OAAQ,AACR,WAAY,AACZ,wCAA2C,AACnC,gCAAmC,AAC3C,yBAA4B,AAC5B,iBAAmB,CAC1B,AACD,8DACQ,gBAAkB,CACzB,AACD,iEACQ,0BAA6B,AAC7B,qBAA0B,CACjC,AACD,wCACI,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,6BAA8B,AAClC,iBAAkB,AAClB,kBAAoB,AACpB,aAAe,CAClB,AACD,6CACM,iBAAkB,AAClB,iBAAmB,CACxB,AACD,uDACQ,kBAAmB,AACnB,YAAc,AACd,aAAe,AACf,cAAe,AACf,kBAAmB,AACnB,qBAAuB,CAC9B,AACD,kEACU,kBAAmB,AACnB,UAAY,AACZ,eAAiB,AAGjB,mCAAqC,AACrC,sCAAwC,AACxC,gCAAmC,CAE5C,AACD,kEACU,kBAAmB,AACnB,UAAY,AACZ,YAAc,AACd,gBAAkB,AAClB,aAAe,AACf,qBAAuB,CAChC,AACD,wEACU,WAAY,AACZ,kBAAmB,AACnB,MAAO,AACP,eAAiB,AACjB,gBAAkB,AAClB,aAAe,AACf,qBAAuB,CAChC,AACD,6BACE,eAAgB,AAChB,SAAU,AACV,OAAQ,AACR,YAAa,AACb,aAAe,CAChB",file:"song.vue",sourcesContent:["\n.music-box[data-v-7eb8a6e1] {\n  width: 10rem;\n  font-size: 14px;\n}\n.music-box > .song-wrap[data-v-7eb8a6e1] {\n    position: relative;\n    margin: 1.33333rem auto 0.8rem;\n}\n.music-box > .song-wrap > .song-disc[data-v-7eb8a6e1] {\n      width: 6.66667rem;\n      height: 6.66667rem;\n      margin: 0 auto;\n      background-image: url(\"https://s3.music.126.net/m/s/img/disc-ip6.png?69796123ad7cfe95781ea38aac8f2d48\");\n      background-size: contain;\n}\n.music-box > .song-wrap > .song-disc > .song-img[data-v-7eb8a6e1] {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 4.13333rem;\n        height: 4.13333rem;\n        -webkit-transform: translate3d(-50%, -50%, 0);\n                transform: translate3d(-50%, -50%, 0);\n}\n.music-box > .song-wrap > .song-disc > .song-img > .u-img[data-v-7eb8a6e1] {\n          width: 100%;\n          vertical-align: middle;\n          border-radius: 50%;\n}\n.music-box > .song-wrap > .song-disc > .song-img > .u-img.img-rotate[data-v-7eb8a6e1] {\n            -webkit-animation: rotate-img-data-v-7eb8a6e1 20000ms infinite linear;\n                    animation: rotate-img-data-v-7eb8a6e1 20000ms infinite linear;\n            -webkit-animation-delay: 1000ms;\n                    animation-delay: 1000ms;\n}\n.music-box > .song-wrap > .song-disc > .song-img > .u-img.img-rotate-paused[data-v-7eb8a6e1] {\n            /*animation-play-state:paused;*/\n}\n@-webkit-keyframes rotate-img {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes rotate-img-data-v-7eb8a6e1 {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n.music-box > .song-wrap > .song-disc > .btn-sign[data-v-7eb8a6e1]:before {\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n}\n.music-box > .song-wrap > .song-disc > .btn-sign[data-v-7eb8a6e1] {\n        position: absolute;\n        width: 2.56rem;\n        height: 3.65333rem;\n        top: -1.33333rem;\n        left: 48%;\n        background-image: url(\"https://s3.music.126.net/m/s/img/needle-ip6.png?be4ebbeb6befadfcae75ce174e7db862\");\n        background-size: contain;\n        -webkit-transform-origin: 0 0;\n                transform-origin: 0 0;\n        -webkit-transform: rotate(-30deg);\n                transform: rotate(-30deg);\n        transition: all 1000ms ease;\n}\n.music-box > .song-wrap > .song-disc > .btn-sign.sign-rotate[data-v-7eb8a6e1] {\n          -webkit-transform: rotate(0deg);\n                  transform: rotate(0deg);\n}\n.music-box > .lyric-wrap[data-v-7eb8a6e1] {\n    width: 9.46667rem;\n    height: 4rem;\n    padding-top: 0.53333rem;\n    overflow: hidden;\n    margin: 0 auto;\n    color: rgba(0, 204, 255, 0.4);\n}\n.music-box > .lyric-wrap .lyric-box[data-v-7eb8a6e1] {\n      transition: all 200ms ease;\n}\n.music-box > .lyric-wrap .lyric-box > p[data-v-7eb8a6e1] {\n        text-align: center;\n        padding: 2px 0;\n}\n.music-box > .lyric-wrap .lyric-box > p.cur-lyric[data-v-7eb8a6e1] {\n          font-size: 16px;\n          color: #00ccff;\n}\n.control-box[data-v-7eb8a6e1] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 10rem;\n  padding: 0.13333rem 0;\n  background-color: rgba(153, 204, 153, 0.6);\n  color: #fff;\n  z-index: 99;\n}\n.control-box > .time-box[data-v-7eb8a6e1] {\n    width: 9.46667rem;\n    line-height: 0.53333rem;\n    margin: 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n.control-box > .time-box > span[data-v-7eb8a6e1] {\n      width: 1.06667rem;\n      text-align: center;\n      overflow: hidden;\n}\n.control-box > .time-box > .time-line[data-v-7eb8a6e1] {\n      position: relative;\n      width: 6.66667rem;\n}\n.control-box > .time-box > .time-line > .base-line[data-v-7eb8a6e1], .control-box > .time-box > .time-line > .current-line[data-v-7eb8a6e1] {\n        position: absolute;\n        top: 50%;\n        left: 0;\n        height: 2px;\n        -webkit-transform: translate3d(0, -50%, 0);\n                transform: translate3d(0, -50%, 0);\n        background-color: gainsboro;\n        border-radius: 2px;\n}\n.control-box > .time-box > .time-line > .base-line[data-v-7eb8a6e1] {\n        width: 6.66667rem;\n}\n.control-box > .time-box > .time-line > .current-line[data-v-7eb8a6e1] {\n        transition: width 100ms ease;\n        background-color: #00ccff;\n}\n.control-box > .menu-box[data-v-7eb8a6e1] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    width: 9.46667rem;\n    line-height: 0.8rem;\n    margin: 0 auto;\n}\n.control-box > .menu-box > span[data-v-7eb8a6e1] {\n      width: 1.86667rem;\n      text-align: center;\n}\n.control-box > .menu-box > span > div.start[data-v-7eb8a6e1] {\n        position: relative;\n        width: 0.8rem;\n        height: 0.8rem;\n        margin: 0 auto;\n        border-radius: 50%;\n        border: 1px solid #FFF;\n}\n.control-box > .menu-box > span > div.start > .btn-start[data-v-7eb8a6e1] {\n          position: absolute;\n          top: 0.2rem;\n          left: 0.29333rem;\n          /*width: remChange(30);*/\n          /*height: remChange(30);*/\n          border-top: 0.2rem solid transparent;\n          border-bottom: 0.2rem solid transparent;\n          border-left: 0.33333rem solid #fff;\n          /*background-color: #FFF;*/\n}\n.control-box > .menu-box > span > div.start > .btn-pause[data-v-7eb8a6e1] {\n          position: absolute;\n          top: 0.2rem;\n          left: 0.24rem;\n          width: 0.10667rem;\n          height: 0.4rem;\n          background-color: #FFF;\n}\n.control-box > .menu-box > span > div.start > .btn-pause[data-v-7eb8a6e1]:after {\n          content: '';\n          position: absolute;\n          top: 0;\n          left: 0.21333rem;\n          width: 0.10667rem;\n          height: 0.4rem;\n          background-color: #FFF;\n}\n.player-box[data-v-7eb8a6e1] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 10rem;\n  height: 1.6rem;\n}\n"],sourceRoot:""}])},140:function(t,e,n){var a=n(136);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(124)("aae2dac2",a,!0)},144:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"music-box"},[n("div",{staticClass:"song-wrap block-box"},[n("div",{staticClass:"song-disc"},[n("div",{staticClass:"song-img"},[n("img",{class:t.startPlay?"u-img img-rotate":"u-img  img-rotate-paused",attrs:{src:t.picUrl,alt:""}})]),t._v(" "),n("span",{class:t.startPlay?"btn-sign sign-rotate":"btn-sign"})])]),t._v(" "),n("div",{staticClass:"lyric-wrap block-box"},[n("div",{staticClass:"lyric-box",style:"transform: translate3d(0,"+t.controlTime.lyricPre+",0);"},[n("p",[t._v(t._s(t.songsMsg.name+"-"+t.songsMsg.ar))]),t._v(" "),t._l(t.lyricList,function(e,a){return[n("p",{class:t.controlTime.lyricIndex-1==a?"cur-lyric":""},[t._v(t._s(e.lyric))])]})],2)]),t._v(" "),n("div",{staticClass:"control-box"},[n("div",{staticClass:"time-box"},[n("span",[t._v(t._s(t.controlTime.curTime))]),t._v(" "),n("div",{staticClass:"time-line"},[n("span",{staticClass:"base-line"}),t._v(" "),n("span",{staticClass:"current-line",style:"width:"+t.controlTime.lineWidth})]),t._v(" "),n("span",[t._v(t._s(t.controlTime.endTime))])]),t._v(" "),n("div",{staticClass:"menu-box"},[n("span"),t._v(" "),n("span"),t._v(" "),n("span",{on:{click:t.callStartPlay}},[n("div",{staticClass:"start"},[t.startPlay?t._e():n("div",{staticClass:"btn-start"}),t._v(" "),t.startPlay?n("div",{staticClass:"btn-pause"}):t._e()])]),t._v(" "),n("span"),t._v(" "),n("span")])]),t._v(" "),t.playerConfig.isShow?n("div",{staticClass:"player-box",staticStyle:{opacity:"0"},on:{click:t.callStartPlay}},[n("audio",{ref:"audioPlay",attrs:{controls:"controls",src:t.playerConfig.src}})]):t._e()])},staticRenderFns:[]}}});
//# sourceMappingURL=0.31a6df0e29a0d84dd318.js.map