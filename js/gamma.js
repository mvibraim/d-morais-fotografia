function getHiddenProp(){var a=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var i=0;i<a.length;i++)if(a[i]+"Hidden"in document)return a[i]+"Hidden";return null}function isHidden(){var a=getHiddenProp();return a?document[a]:!1}String.prototype.queryStringToJSON=String.prototype.queryStringToJSON||function(){var params=String(this);if(params=params.substring(params.indexOf("?")+1),params=params.replace(/\+/g,"%20"),"{"===params.substring(0,1)&&"}"===params.substring(params.length-1))return eval(decodeURIComponent(params));params=params.split(/\&(amp\;)?/);for(var json={},i=0,n=params.length;n>i;++i){var param=params[i]||null;if(null!==param&&(param=param.split("="),null!==param)){var key=param[0]||null;if(null!==key&&"undefined"!=typeof param[1]){var value=param[1];key=decodeURIComponent(key),value=decodeURIComponent(value);try{value=eval(value)}catch(e){}var keys=key.split(".");if(1===keys.length)json[key]=value;else{var path="",cmd="";$.each(keys,function(ii,key){path+='["'+key.replace(/"/g,'\\"')+'"]',jsonCLOSUREGLOBAL=json,cmd="if ( typeof jsonCLOSUREGLOBAL"+path+' === "undefined" ) jsonCLOSUREGLOBAL'+path+" = {}",eval(cmd),json=jsonCLOSUREGLOBAL,delete jsonCLOSUREGLOBAL}),jsonCLOSUREGLOBAL=json,valueCLOSUREGLOBAL=value,cmd="jsonCLOSUREGLOBAL"+path+" = valueCLOSUREGLOBAL",eval(cmd),json=jsonCLOSUREGLOBAL,delete jsonCLOSUREGLOBAL,delete valueCLOSUREGLOBAL}}}}return json},$.extend($.expr[":"],{inViewport:function(a){var i=document.documentElement.scrollTop||document.body.scrollTop,t=$(a).offset().top,e=$(a).height();return winH=window.innerHeight&&window.innerHeight<$(window).height()?window.innerHeight:$(window).height(),t+e>i&&t<i+winH}});var Gamma=function(){var a=$(window),i=$("body"),t=$(document),e=window.Modernizr,m={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},n=m[e.prefixed("transition")],s={columns:4,speed:300,easing:"ease",overlayAnimated:!0,nextOnClickImage:!0,circular:!0,svImageTransitionSpeedFade:300,svImageTransitionEasingFade:"ease-in-out",svImageTransitionSpeedResize:300,svImageTransitionEasingResize:"ease-in-out",svMarginsVH:{vertical:140,horizontal:120},keyboard:!0,swipe:!0,interval:4e3,historyapi:!0},o=function(a,i){Gamma.settings=$.extend(!0,{},s,a),r(),p(),G(function(){Gamma.container.removeClass("gamma-loading"),Gamma.items.show(),Gamma.settings.historyapi&&c(),_initEvents("window"),i&&i.call()})},r=function(){Gamma.container=$("#gamma-container"),Gamma.overlay=Gamma.container.find("div.gamma-overlay"),Gamma.controls=Gamma.container.children("div.gamma-options"),Gamma.gallery=Gamma.container.children("ul.gamma-gallery"),Gamma.items=Gamma.gallery.children(),Gamma.itemsCount=Gamma.items.length,Gamma.columns=Gamma.settings.columns,Gamma.isAnimating=!0,Gamma.svMargins=Gamma.settings.svMarginsVH;var a=window.History;!a.enabled&&Gamma.settings.historyapi&&(Gamma.settings.historyapi=!1),Gamma.supportTransitions=e.csstransitions},l=function(){Gamma.singleview?Gamma.nav||g():($('<div class="gamma-single-view"><div class="gamma-options gamma-options-single"><div class="gamma-buttons"><button class="gamma-btn-close"></button></div></div></div><script>$( ".gamma-btn-close" ).click(function() { $("header").css("display", "block");setTimeout(function(){var cssDisplay = $(".gamma-single-view").css("display"); if(cssDisplay == "block"){$("header").css("display", "none");}},1);});</script> ').appendTo(Gamma.container),Gamma.singleview=Gamma.container.children("div.gamma-single-view"),Gamma.svclose=Gamma.singleview.find("button.gamma-btn-close"),_initEvents("singleview"),g())},g=function(){Gamma.itemsCount>1&&(Gamma.svplay=$('<button class="gamma-btn-ssplay"></button>').insertAfter(Gamma.svclose),Gamma.nav=$('<nav class="gamma-nav"><span class="gamma-prev"></span><span class="gamma-next"></span></nav>').appendTo(Gamma.singleview),Gamma.svnavnext=Gamma.nav.find("span.gamma-next"),Gamma.svnavprev=Gamma.nav.find("span.gamma-prev"),_initEvents("singleviewnavigation"))},c=function(a,i){Gamma.settings.historyapi&&(i=i||History.getState().url.queryStringToJSON().id);var t=void 0!=i,a=a||!1;if(Gamma.settings.historyapi&&Gamma.isSV&&void 0===i&&_closesingleview(),t){var e=Gamma.items.eq(Math.abs(i));e.length&&(Gamma.svImage?(Gamma.supportTransitions&&_setTransition(Gamma.svImage,"all",Gamma.settings.svImageTransitionSpeedFade,Gamma.settings.svImageTransitionEasingFade),_applyAnimation(Gamma.svImage,{opacity:0},Gamma.settings.svImageTransitionSpeedFade,Gamma.supportTransitions,function(){$(this).remove(),a=!1,_singleviewitem(e,a)}),Gamma.svDescription&&_applyAnimation(Gamma.svDescription,{opacity:0},400,Gamma.supportTransitions)):(Gamma.svDescription&&Gamma.svDescription.empty(),_singleviewitem(e,a)))}},d=function(a){Gamma.settings.historyapi||void 0==a?void 0===a?History.pushState(null,null,url("protocol")+"://"+url("hostname")+url("path")):History.getState().url.queryStringToJSON().id!==a&&History.pushState(null,null,"?id="+a):Gamma.isSV?c(!1,a):c(!0,a)},p=function(a){Gamma.itemsCount>0&&l(),h();var a=a||Gamma.items.hide();a.each(function(){var a=$(this),i=a.children(),t=v(i),e=f(t,a.outerWidth(!0)),m=i.data("description");a.data({description:m,source:t,maxwidth:i.data("maxWidth"),maxheight:i.data("maxHeight")}),$("<div/>").addClass("gamma-description").html(m).insertAfter(i),$("<img/>").attr({alt:i.data("alt"),title:i.data("title"),src:e.src}).insertAfter(i),i.remove()})},v=function(a){var i=[];return a.children("div").each(function(a){var t=$(this);i.push({width:t.data("minWidth")||0,src:t.data("src"),pos:a})}),i},h=function(){var a=Gamma.container.width();if(Gamma.settings.viewport)for(var i=0,t=Gamma.settings.viewport.length;t>i;++i){var e=Gamma.settings.viewport[i];if(a>e.width){Gamma.columns=e.columns;break}}Gamma.items.css("width",100*Math.floor(a/Gamma.columns)/a+"%")},G=function(a){Gamma.gallery.imagesLoaded(function(){Gamma.gallery.masonry({itemSelector:"li",columnWidth:function(a){return a/Gamma.columns}}),a&&a.call()})},u=function(a){clearTimeout(Gamma.masonrytimeout),a=a||0,Gamma.masonrytimeout=setTimeout(function(){Gamma.gallery.masonry("reload")},a)},f=function(a,i){0>=i&&(i=1);for(var t=0,e=a.length;e>t;++t){var m=a[t];if(i>m.width)return m}},w=function(a,i,t){t?a.css(t):"on"===i?a.show():a.hide()},y=function(a){Gamma.slideshow||T(a)},T=function(a){if(!Gamma.isSV||Gamma.isAnimating)return!1;var i=Gamma.current;return"next"===a?Gamma.current=Gamma.current<Gamma.itemsCount-1?++Gamma.current:Gamma.settings.circular?0:Gamma.current:"prev"===a&&(Gamma.current=Gamma.current>0?--Gamma.current:Gamma.settings.circular?Gamma.itemsCount-1:Gamma.current),i===Gamma.current?!1:(Gamma.isAnimating=!0,void d(Gamma.current))},S=function(){h(),_(),Gamma.isSV&&_svResizeImage(),u(200)},_=function(){Gamma.items.each(function(){var a=$(this),i=f(a.data("source"),Gamma.items.outerWidth(!0));a.find("img").attr("src",i.src)})};return _svResizeImage=function(i){var t=_getFinalImgConfig({sources:Gamma.svImage.data("source"),imgMaxW:Gamma.svImage.data("maxwidth"),imgMaxH:Gamma.svImage.data("maxheight"),wrapper:{width:a.width()-Gamma.svMargins.horizontal,height:a.height()-Gamma.svMargins.vertical},image:{width:Gamma.svImage.width(),height:Gamma.svImage.height()}}),e=t.source,m=t.finalSizePosition,s=Gamma.svImage.attr("src"),o={width:m.width,height:m.height,left:m.left+Gamma.svMargins.horizontal/2,top:m.top+Gamma.svMargins.vertical/2};_applyAnimation(Gamma.svImage,o,Gamma.settings.svImageTransitionSpeedResize,Gamma.supportTransitions,function(){if(Gamma.supportTransitions&&$(this).off(n),s!==e.src){Gamma.isAnimating=!0;var a=Gamma.svImage.width(),t=Gamma.svImage.height(),m=Gamma.svImage.position().left,o=Gamma.svImage.position().top;Gamma.svImage=$("<img/>").load(function(){var a=$(this);Gamma.supportTransitions&&_setTransition(a,"all",Gamma.settings.svImageTransitionSpeedResize,Gamma.settings.svImageTransitionEasingResize),_applyAnimation(a.next(),{opacity:0},500,Gamma.supportTransitions,function(){var a=$(this);Gamma.supportTransitions&&$(this).off(n),a.remove(),Gamma.isAnimating=!1})}).css({width:a,height:t,left:m,top:o}).data(Gamma.svImage.data()).insertBefore(Gamma.svImage).attr("src",e.src)}i&&i.call()})},_getFinalImgConfig=function(a){var i=a.sources,t=a.imgMaxW||0,e=a.imgMaxH||0,m=f(i,a.wrapper.width),n=_getFinalSizePosition(a.image,a.wrapper);if(n.checksource&&(m=f(i,n.width)),0===m.pos&&(0!==t&&n.width>t||0!==e&&n.height>e)){if(0!==t&&n.width>t){var s=n.width/t;n.width=t,n.height/=s}else if(0!==e&&n.height>e){var s=n.height/e;n.height=e,n.width/=s}n.left=a.wrapper.width/2-n.width/2,n.top=a.wrapper.height/2-n.height/2}return{source:m,finalSizePosition:n}},_singleview=function(){var a=$(this).index();d(a)},_singleviewitem=function(t,e){Gamma.isSV=!0;var m=t.index(),s=t.data(),o=t.children("img");e&&(Gamma.fly=$("<img/>").attr("src",o.attr("src")).addClass("gamma-img-fly").css({width:o.width(),height:o.height(),left:t.offset().left+(t.outerWidth(!0)-t.width())/2,top:t.offset().top+(t.outerHeight(!0)-t.height())/2}).appendTo(i),Gamma.supportTransitions&&_setTransition(Gamma.fly));var r=_getFinalImgConfig({sources:t.data("source"),imgMaxW:t.data("maxwidth"),imgMaxH:t.data("maxheight"),wrapper:{width:a.width()-Gamma.svMargins.horizontal,height:a.height()-Gamma.svMargins.vertical},image:{width:o.width(),height:o.height()}}),l=r.source,g=r.finalSizePosition;Gamma.current=m,Gamma.overlay.show(),Gamma.settings.overlayAnimated&&e&&Gamma.supportTransitions&&_setTransition(Gamma.overlay,"opacity"),setTimeout(function(){if(_applyAnimation(Gamma.overlay,{opacity:1},Gamma.settings.speed,Gamma.supportTransitions||!e,function(){if(!Gamma.isSV)return!1;Gamma.supportTransitions&&$(this).off(n),i.css("overflow-y","hidden");var a=Gamma.overlay[0];a.style.display="none",a.offsetHeight,a.style.display="block"}),t.css("visibility","hidden"),e){var m={width:g.width,height:g.height,left:g.left+a.scrollLeft()+Gamma.svMargins.horizontal/2,top:g.top+a.scrollTop()+Gamma.svMargins.vertical/2},o=Gamma.supportTransitions;_applyAnimation(Gamma.fly,m,Gamma.settings.speed,o,function(){o&&$(this).off(n),_loadSVItemFromGrid(s,g,l.src)})}else _loadSVItemFromGrid(s,g,l.src)},25)},_loadSVItemFromGrid=function(a,i,t){Gamma.singleview.show(),Gamma.svDescription||(Gamma.svDescription=$("<div/>").addClass("gamma-description").appendTo(Gamma.singleview).wrap('<div class="gamma-description-wrapper"></div>'),Gamma.supportTransitions&&_setTransition(Gamma.svDescription,"opacity",Gamma.settings.svImageTransitionSpeedFade/2,Gamma.settings.svImageTransitionEasingFade)),Gamma.svDescription.html(a.description);var e=setTimeout(function(){Gamma.singleview.addClass("gamma-loading")},Gamma.settings.svImageTransitionSpeedFade+250);Gamma.svImage=$("<img/>").load(function(){var a=$(this);clearTimeout(e),Gamma.singleview.removeClass("gamma-loading"),setTimeout(function(){_applyAnimation(Gamma.svDescription,{opacity:1},Gamma.settings.svImageTransitionSpeedFade/2,Gamma.supportTransitions)},25),a.css({width:i.width,height:i.height,left:i.left+Gamma.svMargins.horizontal/2,top:i.top+Gamma.svMargins.vertical/2}).appendTo(Gamma.singleview),Gamma.supportTransitions&&_setTransition(a,"all",Gamma.settings.svImageTransitionSpeedResize,Gamma.settings.svImageTransitionEasingResize),Gamma.fly?(Gamma.supportTransitions&&_setTransition(Gamma.fly,"opacity",1e3),setTimeout(function(){_applyAnimation(Gamma.fly,{opacity:0},1e3,Gamma.supportTransitions,function(){var a=$(this);Gamma.supportTransitions&&a.off(n),a.remove(),Gamma.fly=null,Gamma.isAnimating=!1})},25)):Gamma.isAnimating=!1}).data(a).attr("src",t)},_getFinalSizePosition=function(a,i){var t,e,m=a.width,n=a.height,s=i.width,o=i.height,r=!1;if(m>n){t=s;var l=m/s;e=n/l,e>o&&(r=!0,l=e/o,t/=l,e=o)}else{e=o;var l=n/o;t=m/l,r=!0,t>s&&(r=!1,l=t/s,t=s,e/=l)}return{width:t,height:e,left:s/2-t/2,top:o/2-e/2,checksource:r}},_closesingleview=function(){if(Gamma.isAnimating||Gamma.fly)return!1;Gamma.isSV=!1,Gamma.slideshow&&_stopSlideshow();var e=Gamma.items.eq(Gamma.current),m=e.children("img");Gamma.items.not(e).css("visibility","visible");var s=a.scrollTop();if(!e.is(":inViewport")){s=e.offset().top+(e.outerHeight(!0)-e.height())/2;var o=t.height()-a.height();s>o&&(s=o),a.scrollTop(s)}var r=Gamma.svImage.position().left+a.scrollLeft(),l=Gamma.svImage.position().top+s;Gamma.svImage.appendTo(i).css({position:"absolute",zIndex:1e4,left:r,top:l}),Gamma.supportTransitions&&_setTransition(Gamma.svImage),Gamma.singleview.hide(),Gamma.svDescription.empty().css("opacity",0),i.css("overflow-y","scroll"),setTimeout(function(){var a={width:m.width(),height:m.height(),left:e.offset().left+(e.outerWidth(!0)-e.width())/2,top:e.offset().top+(e.outerHeight(!0)-e.height())/2};_applyAnimation(Gamma.svImage,a,Gamma.settings.speed,Gamma.supportTransitions,function(){e.css("visibility","visible"),$(this).remove(),Gamma.svImage=null}),Gamma.settings.overlayAnimated?(Gamma.supportTransitions&&_setTransition(Gamma.overlay,"opacity"),_applyAnimation(Gamma.overlay,{opacity:0},Gamma.settings.speed,Gamma.supportTransitions,function(){var a=$(this);Gamma.supportTransitions&&a.off(n),a.hide()})):Gamma.overlay.hide(),d()},25)},_visChange=function(){Gamma.slideshow&&(isHidden()?(_stopSlideshow(!0),Gamma.slideshow=!0):_prepareSlideshow())},_prepareSlideshow=function(){return Gamma.isAnimating&&!Gamma.slideshow?!1:(Gamma.isAnimating=!0,clearTimeout(Gamma.slideshowtimeout),Gamma.slideshow=!0,Gamma.svMargins={vertical:0,horizontal:0},w(Gamma.svclose,"off"),w(Gamma.svnavprev,"off",{left:-40}),w(Gamma.svnavnext,"off",{right:-40}),void _svResizeImage(function(){Gamma.isAnimating=!1,Gamma.svplay.addClass("gamma-btn-sspause"),_startSlideshow()}))},_preloadNext=function(){var i=Gamma.current<Gamma.itemsCount-1?Gamma.current+1:Gamma.settings.circular?0:Gamma.current,t=Gamma.items.eq(i),e=t.children("img"),m=_getFinalImgConfig({sources:t.data("source"),imgMaxW:t.data("maxwidth"),imgMaxH:t.data("maxheight"),wrapper:{width:a.width()-Gamma.svMargins.horizontal,height:a.height()-Gamma.svMargins.vertical},image:{width:e.width(),height:e.height()}}),n=m.source;$("<img/>").attr("src",n.src)},_startSlideshow=function(){_preloadNext(),Gamma.slideshowtimeout=setTimeout(function(){T("next"),_startSlideshow()},Gamma.settings.interval)},_stopSlideshow=function(a){return Gamma.isAnimating?!1:(Gamma.isAnimating=!0,clearTimeout(Gamma.slideshowtimeout),void(a||(Gamma.slideshow=!1,Gamma.svplay.removeClass("gamma-btn-sspause"),Gamma.svMargins=Gamma.settings.svMarginsVH,w(Gamma.svclose,"on"),w(Gamma.svnavprev,"on",{left:20}),w(Gamma.svnavnext,"on",{right:20}),_svResizeImage(function(){Gamma.isAnimating=!1}))))},_initEvents=function(i){switch(i){case"window":Gamma.settings.historyapi&&a.on("statechange.gamma",function(){c(!0)}),a.on("smartresize.gamma",S);var e=getHiddenProp();if(e){var m=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(m,_visChange)}break;case"singleview":Gamma.gallery.on("click.gamma","li",_singleview),Gamma.svclose.on("click.gamma",_closesingleview);break;case"singleviewnavigation":Gamma.svnavnext.on("click.gamma",function(){y("next")}),Gamma.svnavprev.on("click.gamma",function(){y("prev")}),Gamma.settings.nextOnClickImage&&Gamma.singleview.on("click.gamma","img",function(){y("next")}),Gamma.settings.keyboard&&t.on("keydown.gamma",function(a){var i=a.keyCode||a.which,t={left:37,up:38,right:39,down:40};switch(i){case t.left:y("prev");break;case t.right:y("next")}}),Gamma.settings.swipe&&Gamma.singleview.on({"swipeleft.gamma":function(){y("next")},"swiperight.gamma":function(){y("prev")}}),Gamma.svplay.on("click.gamma",function(){Gamma.slideshow?_stopSlideshow():Gamma.isAnimating||_prepareSlideshow()})}},_setTransition=function(a,i,t,e){i||(i="all"),t||(t=Gamma.settings.speed),e||(e=Gamma.settings.easing),a.css("transition",i+" "+t+"ms "+e)},_applyAnimation=function(a,i,t,e,m){$.fn.applyStyle=e?$.fn.css:$.fn.animate,m&&e&&a.on(n,m),m=m||function(){return!1},a.stop().applyStyle(i,$.extend(!0,[],{duration:t+"ms",complete:m}))},add=function(a){Gamma.gallery.append(a),Gamma.items=Gamma.gallery.children(),Gamma.itemsCount=Gamma.items.length,p(a),u()},{init:o,add:add}}();