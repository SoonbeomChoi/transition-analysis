(function(e){function t(t){for(var a,s,o=t[0],c=t[1],u=t[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(p.length)p.shift()();return n.push.apply(n,u||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,o=1;o<i.length;o++){var c=i[o];0!==r[c]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=i[0]))}return e}var a={},r={app:0},n=[];function s(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=a,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(i,a,function(t){return e[t]}.bind(null,a));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/transition-analysis/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"25db":function(e,t,i){"use strict";i("889d")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"h-100",attrs:{id:"app"}},[e.isLoading?e._e():i("div",{staticClass:"container-fluid"},[i("h2",{staticClass:"text-center mt-2"},[e._v("DJ Mix Transition Analysis")]),i("div",{staticClass:"row border-bottom"}),e._l(e.mixTypes,(function(e){return i("Panel",{key:e.key,attrs:{"mix-type":e}})})),i("div",{staticClass:"row align-items-center mt-1"},[i("div",{staticClass:"col-sm-auto"},[i("span",{staticClass:"btn p-0",on:{click:e.prevExample}},[i("svg",{staticClass:"bi bi-skip-start",attrs:{width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"white",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M4.5 3.5A.5.5 0 0 0 4 4v8a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5z"}}),i("path",{attrs:{"fill-rule":"evenodd",d:"M5.696 8L11.5 4.633v6.734L5.696 8zm-.792-.696a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696L4.904 7.304z"}})])]),i("span",{directives:[{name:"show",rawName:"v-show",value:e.isPlaying,expression:"isPlaying"}],staticClass:"btn p-0",on:{click:e.pauseAll}},[i("svg",{staticClass:"bi bi-pause",attrs:{width:"3em",height:"3em",viewBox:"0 0 16 16",fill:"white",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"}})])]),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.isPlaying,expression:"!isPlaying"}],staticClass:"btn p-0",on:{click:e.playAll}},[i("svg",{staticClass:"bi bi-play",attrs:{width:"3em",height:"3em",viewBox:"0 0 16 16",fill:"white",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"}})])]),i("span",{staticClass:"btn p-0",on:{click:e.nextExample}},[i("svg",{staticClass:"bi bi-skip-end",attrs:{width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"white",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M12 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"}}),i("path",{attrs:{"fill-rule":"evenodd",d:"M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"}})])])]),i("div",{staticClass:"col-sm-auto"},[i("div",{staticClass:"btn-group",attrs:{role:"group"}},e._l(e.examples,(function(t,a){return i("button",{key:a,staticClass:"btn",class:{"btn-primary":e.currentExample===t,"btn-secondary":e.currentExample!==t},attrs:{value:a,type:"button"},on:{click:function(t){return e.changeExample(a)}}},[e._v(" "+e._s(a)+" ")])})),0)]),i("div",{staticClass:"col"}),i("div",{staticClass:"col-sm-auto"},[i("div",{staticClass:"btn-group",attrs:{role:"group"}},e._l(e.mixTypes,(function(t){return i("button",{key:t.key,staticClass:"btn",class:{"btn-primary":e.currentMixType===t.key,"btn-secondary":e.currentMixType!==t.key},attrs:{value:t.key,type:"button"},on:{click:e.changeMixType}},[e._v(" "+e._s(t.name)+" ")])})),0)])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"}),i("div",{staticClass:"col-6 p-0 mt-2"},[e._m(0),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"},[i("dl",{staticClass:"row"},[e._m(1),i("dd",{staticClass:"col-sm-10 p-0"},[e._v(" Solo Previous Track and mute others ")]),e._m(2),i("dd",{staticClass:"col-sm-10 p-0"},[e._v(" Solo Mix and mute others ")]),e._m(3),i("dd",{staticClass:"col-sm-10 p-0"},[e._v(" Solo Next Track and mute others ")]),i("dt",{staticClass:"col-sm-2 text-center p-0"},[i("span",{staticClass:"border border-primary rounded bg-primary"},[i("svg",{staticClass:"bi bi-caret-right-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}})])])]),i("dd",{staticClass:"col-sm-10 p-0"},[e._v(" Seek forward 4 seconds ")]),i("dt",{staticClass:"col-sm-2 text-center p-0"},[i("span",{staticClass:"border border-primary rounded bg-primary"},[i("svg",{staticClass:"bi bi-caret-left-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"}})])])]),i("dd",{staticClass:"col-sm-10 p-0"},[e._v(" Seek backward 4 seconds ")])])]),i("div",{staticClass:"col-6"},[i("dl",{staticClass:"row"},[e._m(4),i("dd",{staticClass:"col-sm-10 p-0"},[e._v(" Select DJ Mix ")]),e._m(5),i("dd",{staticClass:"col-sm-10 p-0"},[e._v(" Select Baseline ")]),e._m(6),i("dd",{staticClass:"col-sm-10 p-0"},[e._v(" Select Crossfader ")]),e._m(7),i("dd",{staticClass:"col-sm-10 p-0"},[e._v(" Select EQ3 ")]),i("dt",{staticClass:"col-sm-2 text-center p-0"},[i("span",{staticClass:"border border-primary rounded bg-primary"},[i("svg",{staticClass:"bi bi-caret-up-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}})])])]),i("dd",{staticClass:"col-sm-10 p-0"},[e._v(" Previous Example ")]),i("dt",{staticClass:"col-sm-2 text-center p-0"},[i("span",{staticClass:"border border-primary rounded bg-primary"},[i("svg",{staticClass:"bi bi-caret-down-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"}})])])]),i("dd",{staticClass:"col-sm-10 p-0"},[e._v(" Next Example ")])])])])])])],2),e.isLoading?i("div",{staticClass:"d-flex h-100 justify-content-center align-content-center"},[e._m(8)]):e._e()])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row"},[i("h4",[e._v("Keyboard Shortcuts")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("dt",{staticClass:"col-sm-2 text-center p-0"},[i("span",{staticClass:"border border-primary rounded bg-primary px-1"},[e._v("1")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("dt",{staticClass:"col-sm-2 text-center p-0"},[i("span",{staticClass:"border border-primary rounded bg-primary px-1"},[e._v("2")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("dt",{staticClass:"col-sm-2 text-center p-0"},[i("span",{staticClass:"border border-primary rounded bg-primary px-1"},[e._v("3")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("dt",{staticClass:"col-sm-2 text-center p-0"},[i("span",{staticClass:"border border-primary rounded bg-primary px-1"},[e._v("Q")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("dt",{staticClass:"col-sm-2 text-center p-0"},[i("span",{staticClass:"border border-primary rounded bg-primary px-1"},[e._v("W")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("dt",{staticClass:"col-sm-2 text-center p-0"},[i("span",{staticClass:"border border-primary rounded bg-primary px-1"},[e._v("E")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("dt",{staticClass:"col-sm-2 text-center p-0"},[i("span",{staticClass:"border border-primary rounded bg-primary px-1"},[e._v("R")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"spinner-border align-self-center",staticStyle:{width:"3rem",height:"3rem"},attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[e._v("Loading...")])])}],s=i("5530"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowing,expression:"isShowing"}]},e._l(e.audioTypes,(function(t){return i("div",{key:""+t.key,staticClass:"row"},[i("TrackRow",{staticClass:"col p-0 border-bottom border-bottom",attrs:{"mix-type":e.mixType,"audio-type":t}})],1)})),0)},c=[],u=i("2f62"),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row m-0"},[i("div",{staticClass:"col p-0"},[i("Spectrogram",{staticStyle:{height:"200px"},attrs:{"mix-type":e.mixType,"audio-type":e.audioType}})],1),i("div",{staticClass:"col-sm-auto pt-1",staticStyle:{width:"160px"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col px-2"},[i("h6",{staticClass:"p-0 pt-1 mb-0 d-inline-block"},[e._v(e._s(e.audioType.name))])]),i("div",{staticClass:"p-0 mr-1 col-sm-auto btn-group-toggle",attrs:{"data-toggle":"buttons"}},[i("label",{staticClass:"btn py0 px-2 py-0 font-weight-bold",class:{"btn-primary":e.currentSoloAudioType===e.audioType.key,"btn-secondary":e.currentSoloAudioType!==e.audioType.key}},[i("input",{attrs:{type:"radio",name:"solo",autocomplete:"off"},domProps:{value:e.audioType.key},on:{click:e.solo}}),e._v(" S ")])])])])])},d=[],p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{position:"relative"}},[i("div",{staticClass:"canvas-container",staticStyle:{"z-index":"0"}},[i("canvas",{ref:"spec",staticClass:"w-100 h-100"})]),i("div",{staticClass:"canvas-container",staticStyle:{"z-index":"1"}},[i("canvas",{ref:"curves",staticClass:"w-100 h-100"})]),i("div",{staticClass:"canvas-container",staticStyle:{"z-index":"2"}},[i("canvas",{ref:"bar",staticClass:"w-100 h-100"})])])},m=[],h=(i("a630"),i("fb6a"),i("d3b7"),i("3ca3"),i("ddb0"),i("b85c")),f=i("3835"),x=i("595c"),y=i.n(x),v={name:"Spectrogram",props:["mixType","audioType"],computed:Object(s["a"])({audio:function(){return this.$store.state.currentExample.mixes[this.mixType.key].audios[this.audioType.key]},audioDuration:function(){return this.audio.audioBuffer.duration},curves:function(){return this.audio.curves},isShowing:function(){return this.currentMixType===this.mixType.key}},Object(u["b"])(["audioCtx","isLoading","isPlaying","currentExampleIndex","currentMixType","currentSoloAudioType","startedTime","offsetTime"])),watch:{startedTime:function(){this.animate()},offsetTime:function(){this.drawBar()},isPlaying:function(){},isShowing:function(){this.isShowing&&(this.drawCurves(),this.drawBar())}},methods:{drawSpec:function(){var e=this;return new Promise((function(t){var i=e.audio.specImageUrl,a=new Image;a.onload=function(){var i=y()({colormap:"electric",nshades:256,format:"rgb"}),r=e.$refs.spec,n=r.getContext("2d");r.width=a.width,r.height=a.height,n.drawImage(a,0,0);for(var s=n.getImageData(0,0,a.width,a.height),o=0;o<s.data.length;o+=4){var c=Object(f["a"])(i[s.data[o]],3),u=c[0],l=c[1],d=c[2];s.data[o+0]=u,s.data[o+1]=l,s.data[o+2]=d,s.data[o+3]=u+l+d>4?255:0}n.putImageData(s,0,0),t()},a.src=i}))},drawCurves:function(){if(void 0!==this.curves){var e=1.5,t=1.5*e,i=15,a=["red","yellow","lime","cyan","blue","magenta"],r=this.curves,n=this.$refs.curves,s=n.getContext("2d"),o=n.getBoundingClientRect(),c=n.width=r.length*e,u=n.height=c*(o.height/o.width);s.lineWidth=t;var l,d=r[0].length,p=Array.from(Array(d).keys());l="prev"===this.audioType.key?p.slice(0,d/2):"next"===this.audioType.key?p.slice(d/2,d):p;var m,f=Object(h["a"])(l);try{for(f.s();!(m=f.n()).done;){var x=m.value;s.beginPath(),s.strokeStyle=a[x],s.moveTo(0,i+(1-r[0][x])*(u-2*i));for(var y=0;y<r.length;y++){var v=r[y][x];s.lineTo(y/r.length*c,i+(1-v)*(u-2*i))}s.stroke()}}catch(g){f.e(g)}finally{f.f()}}},animate:function(){this.drawBar(),this.isPlaying&&requestAnimationFrame(this.animate)},drawBar:function(e){if(!this.isLoading){var t,i=this.$refs.bar,a=i.getContext("2d"),r=i.getBoundingClientRect(),n=i.width=r.width,s=i.height=i.width*(r.height/r.width);if(void 0!==e)t=e;else{var o=this.isPlaying?this.audioCtx.currentTime-this.startedTime:0;t=(o+this.offsetTime)/this.audioDuration*n}a.strokeStyle="white",a.lineWidth=1.5,a.clearRect(0,0,n,s),a.beginPath(),a.moveTo(t,0),a.lineTo(t,s),a.stroke()}}},created:function(){},mounted:function(){var e=this;"dj"!==this.mixType.key&&this.drawCurves(),this.drawSpec().then((function(){e.drawBar(0),e.$refs.bar.addEventListener("mousedown",(function(t){var i=e.$refs.bar.getBoundingClientRect(),a=e.audioDuration*t.offsetX/i.width;e.$store.commit("seek",{offsetTime:a}),e.drawBar()}))}))},destroyed:function(){}},g=v,w=(i("25db"),i("2877")),b=Object(w["a"])(g,p,m,!1,null,"12ad13e0",null),T=b.exports,C={name:"TrackRow",components:{Spectrogram:T},props:["mixType","audioType"],data:function(){return{audioSource:void 0,gainNode:void 0,isAudioSourceStarted:!1}},computed:Object(s["a"])({audio:function(){return this.$store.state.currentExample.mixes[this.mixType.key].audios[this.audioType.key]},audioBuffer:function(){return this.audio.audioBuffer},isShowing:function(){return this.currentMixType===this.mixType.key},isSolo:function(){return this.isShowing&&this.currentSoloAudioType===this.audioType.key}},Object(u["b"])(["audioCtx","isPlaying","currentExampleIndex","currentMixType","currentSoloAudioType","startedTime","offsetTime"])),watch:{startedTime:function(){this.play()},offsetTime:function(){},isPlaying:function(){this.isPlaying||this.pause()},isSolo:function(){this.isSolo?this.unmute():this.mute()}},methods:{initAudio:function(){this.gainNode=this.audioCtx.createGain(),this.refreshAudioSource(),this.isSolo?this.unmute():this.mute()},refreshAudioSource:function(){var e=this;this.destroyAudioSource(),this.audioSource=this.audioCtx.createBufferSource(),this.audioSource.buffer=this.audioBuffer,this.audioSource.connect(this.gainNode).connect(this.audioCtx.destination),this.audioSource.onended=function(){e.refreshAudioSource(),e.$store.commit("ended")}},play:function(){this.isAudioSourceStarted&&this.refreshAudioSource(),this.audioSource.start(this.startedTime,this.offsetTime),this.isAudioSourceStarted=!0},pause:function(){this.refreshAudioSource()},mute:function(){this.gainNode.gain.setValueAtTime(0,this.audioCtx.currentTime)},unmute:function(){this.gainNode.gain.setValueAtTime(1,this.audioCtx.currentTime)},destroyAudioSource:function(){this.audioSource&&(this.isAudioSourceStarted&&(this.audioSource.onended=void 0,this.audioSource.stop()),this.audioSource.disconnect(),this.gainNode.disconnect()),this.isAudioSourceStarted=!1},solo:function(){this.$store.commit("changeSolo",{currentSoloAudioType:this.audioType.key})}},created:function(){},mounted:function(){this.initAudio()},destroyed:function(){this.destroyAudioSource()}},S=C,k=Object(w["a"])(S,l,d,!1,null,"134439d0",null),_=k.exports,E={name:"Panel",props:["mixType"],components:{TrackRow:_},computed:Object(s["a"])({isShowing:function(){return this.currentMixType===this.mixType.key},mix:function(){return this.$store.state.currentExample.mixes[this.mixType.key]}},Object(u["b"])(["audioTypes","currentExampleIndex","currentMixType"]))},A=E,P=Object(w["a"])(A,o,c,!1,null,"db4c0e6e",null),$=P.exports,M={name:"App",computed:Object(s["a"])({},Object(u["b"])(["isLoading","isPlaying","audioCtx","startedTime","offsetTime","mixTypes","currentMixType","examples","currentExample"])),components:{Panel:$},methods:{changeMixType:function(e){this.$store.commit("changeMixType",{mixType:e.target.value})},playAll:function(){this.$store.commit("play")},pauseAll:function(){this.$store.commit("pause")},changeExample:function(e){var t=this;this.$store.dispatch("fetchAndChangeExample",{exampleIndex:e}).then((function(){console.log(t.offsetTime)}))},prevExample:function(){this.$store.dispatch("fetchAndSetPrevExample")},nextExample:function(){this.$store.dispatch("fetchAndSetNextExample")},handleShortcuts:function(e){var t=this;console.log(e);var i={Space:function(){t.isPlaying?t.$store.commit("pause"):t.$store.commit("play")},Digit1:function(){t.$store.commit("changeSolo",{currentSoloAudioType:"prev"})},Digit2:function(){t.$store.commit("changeSolo",{currentSoloAudioType:"mix"})},Digit3:function(){t.$store.commit("changeSolo",{currentSoloAudioType:"next"})},KeyQ:function(){t.$store.commit("changeMixType",{mixType:"dj"})},KeyW:function(){t.$store.commit("changeMixType",{mixType:"base"})},KeyE:function(){t.$store.commit("changeMixType",{mixType:"xfade"})},KeyR:function(){t.$store.commit("changeMixType",{mixType:"eq3"})},ArrowRight:function(){var e=t.isPlaying?t.audioCtx.currentTime-t.startedTime:0,i=t.offsetTime+e+4;t.$store.commit("seek",{offsetTime:i})},ArrowLeft:function(){var e=t.isPlaying?t.audioCtx.currentTime-t.startedTime:0,i=t.offsetTime+e-4;t.$store.commit("seek",{offsetTime:i})},ArrowUp:function(){t.$store.dispatch("fetchAndSetPrevExample")},ArrowDown:function(){t.$store.dispatch("fetchAndSetNextExample")}};!(e.code in i)||this.isLoading||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||(i[e.code](),e.preventDefault())}},created:function(){var e=this;this.$store.dispatch("init").then((function(){console.log(e.currentExample)}))},mounted:function(){document.addEventListener("keydown",this.handleShortcuts)},destroyed:function(){document.removeEventListener("keydown",this.handleShortcuts)}},j=M,O=(i("5c0b"),Object(w["a"])(j,r,n,!1,null,null,null)),B=O.exports,L=(i("99af"),i("2b3d"),i("96cf"),i("1da1"));a["a"].use(u["a"]);var R=new u["a"].Store({state:{audioCtx:new AudioContext,startedTime:0,offsetTime:0,duration:0,isLoading:!0,isPlaying:!1,currentExample:{},currentExampleIndex:void 0,currentMixType:"eq3",currentSoloAudioType:"mix",examples:[],mixTypes:[{key:"dj",name:"DJ Mix"},{key:"base",name:"Baseline"},{key:"xfade",name:"Crossfader"},{key:"eq3",name:"EQ3"}],audioTypes:[{key:"prev",name:"Previous Track"},{key:"mix",name:"Mix"},{key:"next",name:"Next Track"}]},mutations:{init:function(e,t){e.examples=t,e.currentExampleIndex=Math.floor(Math.random()*e.examples.length),e.currentExample=e.examples[e.currentExampleIndex]},seek:function(e,t){var i=t.offsetTime;i=Math.max(0,i),i=Math.min(e.duration,i),console.log(i),e.offsetTime=i,e.isPlaying&&(e.startedTime=e.audioCtx.currentTime)},play:function(e){e.isPlaying||(e.startedTime=e.audioCtx.currentTime),e.isPlaying=!0},pause:function(e){if(e.isPlaying){var t=e.offsetTime,i=e.audioCtx.currentTime-e.startedTime;e.offsetTime=t+i}e.isPlaying=!1},ended:function(e){e.isPlaying=!1,e.offsetTime=0},changeSolo:function(e,t){var i=t.currentSoloAudioType;e.currentSoloAudioType=i},changeMixType:function(e,t){var i=t.mixType;e.currentMixType=i}},actions:{init:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var i,a,r,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.state,a=e.commit,r=e.dispatch,t.next=3,fetch("/meta.json");case 3:return n=t.sent,t.next=6,n.json();case 6:return s=t.sent,a("init",s),t.abrupt("return",r("fetchAndChangeExample",{exampleIndex:i.currentExampleIndex}));case 9:case"end":return t.stop()}}),t)})))()},fetchAndChangeExample:function(e,t){var i=e.state,a=e.dispatch,r=t.exampleIndex;i.isPlaying=!1,i.isLoading=!0;var n,s=i.examples[r];if(i.currentExample=s,i.currentExampleIndex=r,s.isLoaded)n=Promise.resolve(s);else{var o=[];s.mixes={};var c,u=Object(h["a"])(i.mixTypes);try{for(u.s();!(c=u.n()).done;){var l=c.value,d=s.mixes[l.key]={};d.audios={};var p,m=Object(h["a"])(i.audioTypes);try{var f=function(){var e=p.value,t=d.audios[e.key]={},i="audio/".concat(r,"-").concat(e.key,"-").concat(l.key,".mp3"),n=a("fetchAudio",{path:i}).then((function(e){return t.audioBuffer=e})),s="spec/".concat(r,"-").concat(e.key,"-").concat(l.key,".png"),c=a("fetchSpec",{path:s}).then((function(e){return t.specImageUrl=e}));if("dj"!==l.key){var u="curve/".concat(r,"-").concat(l.key,".json"),m=a("fetchCurves",{path:u}).then((function(e){return t.curves=e}));o.push(m)}o.push(n,c)};for(m.s();!(p=m.n()).done;)f()}catch(x){m.e(x)}finally{m.f()}}}catch(x){u.e(x)}finally{u.f()}n=Promise.all(o)}return n.then((function(){return s.isLoaded=!0,i.offsetTime=0,i.duration=i.currentExample.mixes["dj"].audios["mix"].audioBuffer.duration,i.isLoading=!1,s}))},fetchAndSetPrevExample:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var i,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e.state,a=e.dispatch,r=Math.max(0,i.currentExampleIndex-1),r===i.currentExampleIndex){t.next=5;break}return t.next=5,a("fetchAndChangeExample",{exampleIndex:r});case 5:case"end":return t.stop()}}),t)})))()},fetchAndSetNextExample:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var i,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e.state,a=e.dispatch,r=Math.min(i.examples.length-1,i.currentExampleIndex+1),r===i.currentExampleIndex){t.next=5;break}return t.next=5,a("fetchAndChangeExample",{exampleIndex:r});case 5:case"end":return t.stop()}}),t)})))()},fetchAudio:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function i(){var a,r,n,s,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.state,r=t.path,i.next=4,fetch(r,{cache:"force-cache"});case 4:return n=i.sent,i.next=7,n.arrayBuffer();case 7:return s=i.sent,i.next=10,a.audioCtx.decodeAudioData(s);case 10:return o=i.sent,i.abrupt("return",o);case 12:case"end":return i.stop()}}),i)})))()},fetchSpec:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function e(){var i,a,r,n,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.path,e.next=3,fetch(i,{cache:"force-cache"});case 3:return a=e.sent,e.next=6,a.arrayBuffer();case 6:return r=e.sent,n=new Blob([r],{type:"image/png"}),s=window.URL||window.webkitURL,o=s.createObjectURL(n),e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})))()},fetchCurves:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function e(){var i,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.path,e.next=3,fetch(i,{cache:"force-cache"});case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))()}},modules:{}});a["a"].config.productionTip=!1,new a["a"]({store:R,render:function(e){return e(B)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";i("9c0c")},"889d":function(e,t,i){},"9c0c":function(e,t,i){}});
//# sourceMappingURL=app.4ae8aa79.js.map