jQuery(document).ready(function($){if(1==wp_data.disable_ajax){jQuery('.cbp-singlePage').click(function(){window.location=jQuery(this).attr('href');return false;});}
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){jQuery('body').addClass('mobile');}
  jQuery('p:empty').remove();var firstId=jQuery('section.page-section').eq(0).attr('id'),headerOffset=78,$header=jQuery('#header');if(firstId){jQuery('#down-link').attr({'href':'#'+firstId});}
  if(jQuery('body').hasClass('fade-header'))
    startfade();jQuery("[rel=tooltip]").tooltip();jQuery("[data-rel=tooltip]").tooltip();jQuery('#bottom').tooltip();jQuery(window).on('resize',function resize(){jQuery(window).off('resize',resize);setTimeout(function(){var content=jQuery('#content');var top=(window.innerHeight-content.height())/2;content.css('top',Math.max(0,top)+'px');jQuery(window).on('resize',resize);},50);}).resize();jQuery(".clients-carousel").owlCarousel({autoPlay:3000,items:4,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3]});jQuery(".testimonials").owlCarousel({singleItem:true});jQuery("#big").owlCarousel({navigation:false,slideSpeed:300,paginationSpeed:400,lazyLoad:true,singleItem:true,});jQuery(".wallpapered").wallpaper();jQuery('.top-slider').flexslider({animation:"fade",directionNav:false,controlNav:false,slideshowSpeed:5000,animationSpeed:600,initDelay:0,useCSS:true});if(jQuery('.fullplate').length>0){jQuery('.fullplate').flicker();}
  jQuery(window).scroll(function(){var scaleBg=-jQuery(window).scrollTop()/4;if(jQuery(window).scrollTop()>1){$header.addClass('show-header');}else{$header.removeClass('show-header');}});if(jQuery('body').hasClass('admin-bar'))
    headerOffset=headerOffset+32;jQuery('#menu a[href^="#"], #down-link, .ebor-scroll').smoothScroll({offset:-headerOffset,speed:800});$(window).scroll(function(){$('#menu a[href^="#"]').each(function(){var scrollHref=$(this).attr('href');if($(scrollHref).length>0){if($(window).scrollTop()>$(scrollHref).offset().top-130){$('#menu a[href^="#"]').removeClass('active');$(this).addClass('active');}}});});$(window).trigger('scroll');jQuery('#nav-toggle').click(function(){if($header.hasClass('responsive-menu')){$header.removeClass('responsive-menu');}else{$header.addClass('responsive-menu');}});jQuery('#menu li a').click(function(){if($header.hasClass('responsive-menu')){$header.removeClass('responsive-menu');}});});jQuery(window).load(function(){setTimeout(function(){jQuery(".rotate").show();jQuery(".rotate").textrotator({animation:"dissolve",separator:"*",speed:3200});},3500);});;jQuery(document).ready(function(){var gridContainer=jQuery('#grid-container,#grid-container2');gridContainer.cubeportfolio({animationType:'sequentially',gapHorizontal:0,gapVertical:10,gridAdjustment:'responsive',caption:'zoom',displayType:'sequentially ',displayTypeSpeed:100,lightboxDelegate:'.cbp-lightbox',lightboxGallery:true,lightboxTitleSrc:'data-title',lightboxShowCounter:true,singlePageDelegate:'.cbp-singlePage',singlePageDeeplinking:true,singlePageStickyNavigation:true,singlePageShowCounter:true,singlePageCallback:function(url,element){var t=this;jQuery.ajax({url:url,type:'GET',dataType:'html',timeout:5000}).done(function(result){result=jQuery(result).find('#single');t.updateSinglePage(result);}).fail(function(){t.updateSinglePage("Error! Please refresh the page!");});}});var gridContainer=jQuery('#grid-container3'),filtersContainer=jQuery('#filters-container');gridContainer.cubeportfolio({defaultFilter:'*',animationType:'flipOut',gapHorizontal:-50,gapVertical:20,gridAdjustment:'responsive',caption:'pushTop',displayType:'sequentially',displayTypeSpeed:100,lightboxDelegate:'.cbp-lightbox',lightboxGallery:true,lightboxTitleSrc:'data-title',lightboxShowCounter:true,singlePageDelegate:'.cbp-singlePage',singlePageDeeplinking:true,singlePageStickyNavigation:true,singlePageShowCounter:true,singlePageCallback:function(url,element){var t=this;jQuery.ajax({url:url,type:'GET',dataType:'html',timeout:5000}).done(function(result){result=jQuery(result).find('#single');jQuery("#big",result).owlCarousel({navigation:false,slideSpeed:300,paginationSpeed:400,lazyLoad:true,singleItem:true,});t.updateSinglePage(result);}).fail(function(){t.updateSinglePage("Error! Please refresh the page!");});}});if(jQuery('body').hasClass('mobile')){filtersContainer.on('click','.cbp-filter-item',function(e){gridContainer.cubeportfolio('filter',jQuery(this).data('filter'));jQuery('.cbp-filter-item').removeClass('cbp-filter-item-active');jQuery(this).addClass('cbp-filter-item-active');});}else{filtersContainer.on('click','.cbp-filter-item',function(e){var me=jQuery(this),wrap;if(!jQuery.data(gridContainer[0],'cubeportfolio').isAnimating){if(filtersContainer.hasClass('cbp-l-filters-dropdown')){wrap=jQuery('.cbp-l-filters-dropdownWrap');wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());me.addClass('cbp-filter-item-active');}else{me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');}}
gridContainer.cubeportfolio('filter',me.data('filter'),function(){});});gridContainer.cubeportfolio('showCounter',filtersContainer.find('.cbp-filter-item'));}});;var addComment={moveForm:function(a,b,c,d){var e,f=this,g=f.I(a),h=f.I(c),i=f.I("cancel-comment-reply-link"),j=f.I("comment_parent"),k=f.I("comment_post_ID");if(g&&h&&i&&j){f.respondId=c,d=d||!1,f.I("wp-temp-form-div")||(e=document.createElement("div"),e.id="wp-temp-form-div",e.style.display="none",h.parentNode.insertBefore(e,h)),g.parentNode.insertBefore(h,g.nextSibling),k&&d&&(k.value=d),j.value=b,i.style.display="",i.onclick=function(){var a=addComment,b=a.I("wp-temp-form-div"),c=a.I(a.respondId);if(b&&c)return a.I("comment_parent").value="0",b.parentNode.insertBefore(c,b),b.parentNode.removeChild(b),this.style.display="none",this.onclick=null,!1};try{f.I("comment").focus()}catch(l){}return!1}},I:function(a){return document.getElementById(a)}};
