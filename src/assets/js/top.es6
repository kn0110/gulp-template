class TOP {
  constructor(){
    if(!window.console) {window.console = { log: function(msg){} };}
    this.DevicePar = 1;         //デバイスの比率(初期化)
    this.CacheDOMElement();
    this.BindFunc();
		if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
      //this.SpInit();
		}
    this.Init();
  }
  CacheDOMElement(){
    this.$DocH = document.body.clientHeight ? document.body.clientHeight/this.DevicePar : $(document).height()/this.DevicePar;
    this.$DocW = document.body.clientWidth ? document.body.clientWidth/this.DevicePar : $(document).width()/this.DevicePar;
    this.$winW = window.innerWidth ? window.innerWidth : $(window).width();
    this.$winH = window.innerHeight ? window.innerHeight : $(window).height();
  }
  SpInit(){
    const _that = this;
    const agent = navigator.userAgent;
    $('body').addClass('sp');
    if(agent.search(/iPhone/) !== -1 || agent.search(/iPad/) !== -1 || agent.search(/iPod/) !== -1) {
    } else if (agent.search(/Android/) !== -1)  {
    }
  }
  BindFunc(){
    $(window).on('load',()=>{
      const userAgent = window.navigator.userAgent.toLowerCase();
      const appVersion = window.navigator.appVersion.toLowerCase();
      if (userAgent.indexOf('msie') !== -1) {
        if (appVersion.indexOf('msie 6.') !== -1) {
        }else if (appVersion.indexOf('msie 7.') !== -1) {
        }else if (appVersion.indexOf('msie 8.') !== -1) {
        }else if (appVersion.indexOf('msie 9.') !== -1) {
        }else if (appVersion.indexOf('msie 10.') !== -1) {
        } else {
        }
      } else {
      }
      $(window).on('resize',()=>{
        this.$winH = window.innerHeight ? window.innerHeight : $(window).height();
        this.$winW = window.innerWidth ? window.innerWidth : $(window).width();
      });
      $(window).on('scroll',()=>{
      });
    });
  }
  Init(){
    this.HoverBtn();
    $('.pagetop__btn').on('click',function(){
      $('html,body').animate({scrollTop:0},500);
    });
  }
  HoverBtn(){
    if(navigator.userAgent.indexOf('MSIE') !== -1) {
      jQuery('img').each(function() {
        if(jQuery(this).attr('src').indexOf('.png') !== -1) {
          jQuery(this).css({
            'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + jQuery(this).attr('src') + '", sizingMethod="scale");'
          });
        }
      });
    }
    $('.alpha').hover(function(){
      $(this).stop(true).animate({opacity:0.5},400);
    },function(){
      $(this).stop(true).animate({opacity:1},350);
    });
  }
}
if( document.addEventListener ){
  document.addEventListener( 'DOMContentLoaded', function(){
    new TOP();
  }, false);
} else if( document.attachEvent ){
  var CheckReadyState = function(){
    if(document.readyState === 'complete'){
      document.detachEvent('onreadystatechange', CheckReadyState);
      new TOP();
    }
  }
  document.attachEvent('onreadystatechange', CheckReadyState);
  (function(){
    try {
      document.documentElement.doScroll('left');
    } catch(e){
      setTimeout(arguments.callee, 10);
      return;
    }
    document.detachEvent( 'onreadystatechange', CheckReadyState );
    new TOP();
  })();
} else {
  new TOP();
}
