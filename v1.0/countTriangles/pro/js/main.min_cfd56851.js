var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(r,s){function a(t){try{h(n.next(t))}catch(e){s(e)}}function o(t){try{h(n["throw"](t))}catch(e){s(e)}}function h(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(a,o)}h((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return n([t,e])}}function n(i){if(r)throw new TypeError("Generator is already executing.");for(;h;)try{if(r=1,s&&(a=s[2&i[0]?"return":i[0]?"throw":"next"])&&!(a=a.call(s,i[1])).done)return a;switch(s=0,a&&(i=[0,a.value]),i[0]){case 0:case 1:a=i;break;case 4:return h.label++,{value:i[1],done:!1};case 5:h.label++,s=i[1],i=[0];continue;case 7:i=h.ops.pop(),h.trys.pop();continue;default:if(a=h.trys,!(a=a.length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){h=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){h.label=i[1];break}if(6===i[0]&&h.label<a[1]){h.label=a[1],a=i;break}if(a&&h.label<a[2]){h.label=a[2],h.ops.push(i);break}a[2]&&h.ops.pop(),h.trys.pop();continue}i=e.call(t,h)}catch(n){i=[6,n],s=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var r,s,a,o,h={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,i){function n(n){e.call(i,n,t)}if(RES.hasRes(t)){var r=RES.getRes(t);r?n(r):RES.getResAsync(t,n,this)}else RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Button=function(t){function e(e){void 0===e&&(e="按钮");var i=t.call(this)||this;return i._label=new egret.TextField,i._label.text=e,i._bgColor=16777215,i.draw(),i}return __extends(e,t),Object.defineProperty(e.prototype,"clickable",{set:function(t){t?(this.touchEnabled=!0,this._bgColor=16777215):(this.touchEnabled=!1,this._bgColor=12303291),this.draw()},enumerable:!0,configurable:!0}),e.prototype.draw=function(){var t=this._label;t.textColor=3355443,t.size=20,t.bold=!0,t.x=10,t.y=10,t.fontFamily="微软雅黑";var e=new egret.Shape,i=e.graphics;i.clear(),i.lineStyle(1,8947848),i.beginFill(this._bgColor),i.drawRoundRect(0,0,t.width+20,t.height+20,15,15),this.addChild(e),this.addChild(t)},e}(egret.Sprite);__reflect(Button.prototype,"Button");var Canvas=function(t){function e(e,i){var n=t.call(this)||this;return n._drawAble=!0,n._bg=new egret.Shape,n._lines=[],n._linesWithCross=[],n._lineShapes=[],n._points=[],n._markCrossPoints=[],n._marks=[],n._label=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U"],n._triangleNames=[],n._triangles=[],n._showTriangleShape=new egret.Shape,n._redrawLine=new egret.Shape,n._width=e,n._height=i,n._startPoint,n.touchEnabled=!0,n.createBackGround(),n.addChild(n._bg),n.addChild(n._redrawLine),n.addChild(n._showTriangleShape),n._showTriangleShape.alpha=.5,n.addEvents(),n._trianglesNumLabel=new eui.Label("共5个三角形"),n._trianglesNumLabel.textColor=16711680,n._trianglesNumLabel.size=30,n._trianglesNumLabel.fontFamily="微软雅黑",n._trianglesNumLabel.x=10,n._trianglesNumLabel.y=10,n.addChild(n._trianglesNumLabel),n._trianglesNumLabel.visible=!1,n}return __extends(e,t),Object.defineProperty(e.prototype,"drawAble",{set:function(t){this._drawAble=t,t?this.touchEnabled=!0:this.touchEnabled=!1},enumerable:!0,configurable:!0}),e.prototype.reDraw=function(){for(var t=0;t<this._lineShapes.length;t++)this.removeChild(this._lineShapes[t]);this._lineShapes=[],this._linesWithCross=this.getLinesWithCross(this._lines),this.sortLines(this._linesWithCross),this.trimLines(this._linesWithCross);var e=this._redrawLine.graphics;e.clear(),e.lineStyle(3,0);for(var t=0;t<this._linesWithCross.length;t++){var i=this._linesWithCross[t][0],n=this._linesWithCross[t][this._linesWithCross[t].length-1];i&&n&&(e.moveTo(i.x,i.y),e.lineTo(n.x,n.y))}},e.prototype.markCross=function(){this.setMartCrossPoints();for(var t=(this.getLinesWithCross(this._lines),0);t<this._markCrossPoints.length;t++){var e=new Mark(this._label[t]);e.x=this._markCrossPoints[t].x,e.y=this._markCrossPoints[t].y,this._marks.push(e),this.addChild(e)}},Object.defineProperty(e.prototype,"triangles",{get:function(){this._triangleNames=[],this._triangles=[],this.fillTrianglesList();var t=this._triangleNames.length;return this._trianglesNumLabel.text="共"+t+"个三角形",this._trianglesNumLabel.visible=!0,this._triangleNames},enumerable:!0,configurable:!0}),e.prototype.showTriangleByIndex=function(t){var e=this._triangles[t],i=this._showTriangleShape.graphics;i.clear(),i.beginFill(65280),i.moveTo(e[0].x,e[0].y),i.lineTo(e[1].x,e[1].y),i.lineTo(e[2].x,e[2].y),i.endFill()},e.prototype.update=function(){for(var t=0;t<this._lineShapes.length;t++)this.removeChild(this._lineShapes[t]);this._lineShapes=[];var e=this._redrawLine.graphics;e.clear(),this._lines=[],this._linesWithCross=[],this._points=[],this._markCrossPoints=[],this._triangleNames=[],this._triangles=[],this._trianglesNumLabel.visible=!1;for(var t=0;t<this._marks.length;t++)this.removeChild(this._marks[t]);this._marks=[];var i=this._showTriangleShape.graphics;i.clear()},e.prototype.fillTrianglesList=function(){for(var t=this._markCrossPoints.length,e=0,i=0;t-2>i;i++)for(var n=i+1;t-1>n;n++)for(var r=n+1;t>r;r++){var s={p:this._markCrossPoints[i],mark:this._label[i]},a={p:this._markCrossPoints[n],mark:this._label[n]},o={p:this._markCrossPoints[r],mark:this._label[r]};if(this.isTriangle(s.p,a.p,o.p)){var h="△"+s.mark+a.mark+o.mark;this._triangleNames.push(h),this._triangles.push([s.p,a.p,o.p]),e++}}console.log("三角形个数"+e)},e.prototype.isTriangle=function(t,e,i){for(var n=!1,r=!1,s=!1,a=0;a<this._linesWithCross.length;a++){var o=this._linesWithCross[a];-1==o.indexOf(t)||-1==o.indexOf(e)?-1==o.indexOf(t)||-1==o.indexOf(i)?-1==o.indexOf(e)||-1==o.indexOf(i)||(s=!0):r=!0:n=!0}return n&&r&&s},e.prototype.setMartCrossPoints=function(){this._markCrossPoints=this._points.concat();for(var t=this._markCrossPoints.length;t>=0;t--){for(var e=this._markCrossPoints[t],i=!1,n=0;n<this._linesWithCross.length;n++)-1!=this._linesWithCross[n].indexOf(e)&&(i=!0);i||this._markCrossPoints.splice(t,1)}},e.prototype.addEvents=function(){this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(t){var e=t.stageX-this.x,i=t.stageY-this.y;this._currentLine=new egret.Shape,this._lineShapes.push(this._currentLine),this.addChild(this._currentLine),this._startPoint=new egret.Point(e,i),this.addEventListener(egret.TouchEvent.TOUCH_END,this.drawEndHandler,this)},this),this.addEventListener(egret.TouchEvent.TOUCH_MOVE,function(t){var e=this._currentLine.graphics;e.clear(),e.lineStyle(3,0),e.moveTo(this._startPoint.x,this._startPoint.y),e.lineTo(t.stageX-this.x,t.stageY-this.y)},this)},e.prototype.drawEndHandler=function(t){var e=t.stageX-this.x,i=t.stageY-this.y,n=new egret.Point(e,i);this._lines.push([this._startPoint,n]),this._startPoint=null,this.removeEventListener(egret.TouchEvent.TOUCH_END,this.drawEndHandler,this)},e.prototype.getLinesWithCross=function(t){for(var e=[],i=0,n=t.length;n>i;i++){var r=[],s=t[i][0],a=t[i][1];0==this.getPointsNearBy(s,this._points).length?this._points.push(s):s=this.getPointsNearBy(s,this._points)[0],0==this.getPointsNearBy(a,this._points).length?this._points.push(a):a=this.getPointsNearBy(a,this._points)[0],r.push(s,a);for(var o=0,h=t.length;h>o;o++)if(i!=o){var l=this.segmentsIntr(t[i][0],t[i][1],t[o][0],t[o][1]);l&&(0==this.getPointsNearBy(l,this._points).length?this._points.push(l):l=this.getPointsNearBy(l,this._points)[0],r.push(l))}e.push(r)}return e},e.prototype.getPointsNearBy=function(t,e){return e.filter(function(e,i,n){var r=(e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y);return 225>r?!0:void 0})},e.prototype.sortLines=function(t){for(var e=function(e){var i=t[e][0];t[e].sort(function(t,e){var n=(t.x-i.x)*(t.x-i.x)+(t.y-i.y)*(t.y-i.y),r=(e.x-i.x)*(e.x-i.x)+(e.y-i.y)*(e.y-i.y);return n>r?-1:1}),console.log(t[e])},i=0;i<t.length;i++)e(i)},e.prototype.trimLines=function(t){for(var e=0,i=t.length;i>e;e++){for(var n=t[e][0],r=t[e][t[e].length-1],s=!1,a=!1,o=0,h=t.length;h>o;o++)e!=o&&(-1!=t[o].indexOf(n)&&(s=!0),-1!=t[o].indexOf(r)&&(a=!0));s||t[e].splice(0,1),a||t[e].splice(t[e].length-1,1)}},e.prototype.createBackGround=function(){var t=new egret.Shape,e=t.graphics;e.beginFill(16777215),e.drawRoundRect(0,0,this._width,this._height,20,20),this.addChild(t)},e.prototype.segmentsIntr=function(t,e,i,n){var r=(e.y-t.y)*(n.x-i.x)-(t.x-e.x)*(i.y-n.y);if(0==r)return!1;var s=((e.x-t.x)*(n.x-i.x)*(i.y-t.y)+(e.y-t.y)*(n.x-i.x)*t.x-(n.y-i.y)*(e.x-t.x)*i.x)/r,a=-((e.y-t.y)*(n.y-i.y)*(i.x-t.x)+(e.x-t.x)*(n.y-i.y)*t.y-(n.x-i.x)*(e.y-t.y)*i.y)/r;return Math.round(s-t.x)*Math.round(s-e.x)<=0&&Math.round(a-t.y)*Math.round(a-e.y)<=0&&Math.round(s-i.x)*Math.round(s-n.x)<=0&&Math.round(a-i.y)*Math.round(a-n.y)<=0?new egret.Point(s,a):!1},e.prototype.getDistance=function(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))},e}(egret.Sprite);__reflect(Canvas.prototype,"Canvas");var ControlPanel=function(t){function e(e,i,n,r){var s=t.call(this)||this;return s._width=e,s._height=i,s._canvas=n,s._triangleList=r,s.createBackGround(),s.addBtns(),s}return __extends(e,t),e.prototype.createBackGround=function(){var t=new egret.Shape,e=t.graphics;e.lineStyle(1,15658734),e.beginFill(16777215),e.drawRoundRect(0,0,this._width,this._height,20,20),this.addChild(t)},e.prototype.addBtns=function(){var t=new eui.ToggleButton;t.label="绘 图",t.width=100,t.height=50,t.x=10,t.y=5,t.selected=!0,this.addChild(t),t.addEventListener(egret.TouchEvent.TOUCH_TAP,function(e){this._canvas.drawAble=t.selected},this);var e=new eui.Button;e.label="修 正",e.width=100,e.height=50,e.x=120,e.y=5,this.addChild(e),e.addEventListener(egret.TouchEvent.TOUCH_TAP,function(e){t.selected=!1,this._canvas.drawAble=t.selected,this._canvas.reDraw()},this);var i=new eui.Button;i.label="标 记",i.width=100,i.height=50,i.x=230,i.y=5,this.addChild(i),i.addEventListener(egret.TouchEvent.TOUCH_TAP,function(e){t.selected=!1,this._canvas.drawAble=t.selected,this._canvas.markCross()},this);var n=new eui.Button;n.label="答 案",n.width=100,n.height=50,n.x=340,n.y=5,this.addChild(n),n.addEventListener(egret.TouchEvent.TOUCH_TAP,function(e){t.selected=!1,this._canvas.drawAble=t.selected,this._triangleList.list=[],this._triangleList.list=this._canvas.triangles},this);var r=new eui.Button;r.label="刷 新",r.width=100,r.height=50,r.x=this._width-110,r.y=5,this.addChild(r),r.addEventListener(egret.TouchEvent.TOUCH_TAP,function(e){t.selected=!0,this._canvas.drawAble=t.selected,this._triangleList.list=[],this._canvas.update()},this)},e}(egret.Sprite);__reflect(ControlPanel.prototype,"ControlPanel");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return[4,this.loadResource()];case 1:return i.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=i.sent(),this.startAnimation(t),[4,platform.login()];case 3:return i.sent(),[4,platform.getUserInfo()];case 4:return e=i.sent(),console.log(e),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,this.loadTheme()];case 2:return i.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return i.sent(),this.stage.removeChild(t),[3,5];case 4:return e=i.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,i){var n=new eui.Theme("resource/default.thm.json",t.stage);n.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){var t=.8*this.stage.stageWidth,e=this.stage.stageHeight-20,i=new Canvas(t,e);i.y=10,this.addChild(i);var n=.2*this.stage.stageWidth-10,r=this.stage.stageHeight-20,s=new TriangleList(n,r,i);s.x=this.stage.stageWidth-n,s.y=10,this.addChild(s);var a=new ControlPanel(.8*this.stage.stageWidth-20,60,i,s);a.x=10,a.y=this.stage.stageHeight-80,this.addChild(a)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},e.prototype.startAnimation=function(t){},e.prototype.onButtonClick=function(t){},e}(eui.UILayer);__reflect(Main.prototype,"Main");var Mark=function(t){function e(e){var i=t.call(this)||this;return i._label="a",i._label=e,i.draw(),i}return __extends(e,t),e.prototype.draw=function(){var t=new egret.Shape,e=t.graphics;e.beginFill(16711680),e.drawCircle(0,0,15),this.addChild(t);var i=new egret.TextField;i.text=this._label;var n=20;i.size=n,i.textAlign=egret.HorizontalAlign.CENTER,i.verticalAlign=egret.VerticalAlign.MIDDLE,i.width=n,i.height=n,i.anchorOffsetX=n/2,i.anchorOffsetY=n/2,i.bold=!0,this.addChild(i)},e}(egret.Sprite);__reflect(Mark.prototype,"Mark");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,i,n){function r(t){e.call(n,t)}function s(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),i.call(n))}var a=this;"undefined"!=typeof generateEUI?egret.callLater(function(){e.call(n,generateEUI)},this):"undefined"!=typeof generateEUI2?RES.getResByUrl("resource/gameEui.json",function(t,i){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(n,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_TEXT))},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var TriangleList=function(t){function e(e,i,n){var r=t.call(this)||this;return r._width=e,r._height=i,r._canvas=n,r.createBackground(),r.createHeader(),r.createList(),r}return __extends(e,t),Object.defineProperty(e.prototype,"list",{set:function(t){this._list.dataProvider=new eui.ArrayCollection(t)},enumerable:!0,configurable:!0}),e.prototype.createBackground=function(){var t=new egret.Shape,e=t.graphics;e.beginFill(16777215),e.drawRoundRect(0,0,this._width,this._height,20,20),this.addChild(t)},e.prototype.createHeader=function(){var t=new egret.TextField;t.text="三角形",t.fontFamily="微软雅黑",t.textColor=3355443,t.width=this._width,t.textAlign=egret.HorizontalAlign.CENTER,t.verticalAlign=egret.VerticalAlign.MIDDLE,t.size=25,t.height=50,this.addChild(t)},e.prototype.createList=function(){var t=new egret.Shape,e=t.graphics;e.beginFill(15658734),e.lineStyle(1,13421772),e.drawRect(10,50,this._width-20,this._height-70),this.addChild(t),this._list=new eui.List,this._list.width=this._width,this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onChange,this);var i=new eui.Scroller;i.width=this._width-20,i.height=this._height-70,i.x=10,i.y=50,i.viewport=this._list,this.addChild(i)},e.prototype.onChange=function(t){console.log(this._list.selectedItem,this._list.selectedIndex),this._canvas.showTriangleByIndex(this._list.selectedIndex)},e}(eui.Group);__reflect(TriangleList.prototype,"TriangleList");