var elementPosition;$(document).ready(function(){$('#search-mobile').hide();$("#mobile-menu").click(function(){$('#header #menu').toggle();});$("#mobile-search").click(function(){$(this).toggleClass('hidesearch')
$('#search-mobile').toggle();});elementPosition=$('#stickyad').offset();$(".addtofavorite").click(function(){var hash=$(this).attr("data-url");var nfav=$(this).parent().find("p").text();var nfave=$(this).parent().find("p");var fave=$(this);var continueurl=$(this).attr("continue");$.post("/manage-favorites",{hash:hash,nfav:nfav}).done(function(data){if(data=="login"){$(".loginreq").remove();fave.after("<p class='loginreq'><a href='/signin?redirect="+continueurl+"'>Log in</a> or <a href='/signup?redirect="+continueurl+"'>sign up</a> to favorite</p>");$(".loginreq").fadeIn('fast',function(){$(this).delay(2000).fadeOut('slow');});}else{if(data>nfav){fave.find("img").attr("src","/img/fav-hover.png");fave.find("img").addClass("favorited");}else{fave.find("img").removeClass("favorited");fave.find("img").attr("src","/img/fav.png");}
nfave.text(data);}});return false;});$('.wpimg').mousedown(function(event){switch(event.which){case 3:var hash=$(this).attr("data-url");var slug=$(this).attr("slug");$.post("/download",{slug:slug,hash:hash});break;}});$(".addtofavorite").hover(function(){$(this).find("img").attr("src","/img/fav-hover.png");},function(){if(!$(this).find("img").hasClass("favorited")){$(this).find("img").attr("src","/img/fav.png");}});$(".download").hover(function(){$(this).find("img").attr("src","/img/download-hover.png");},function(){$(this).find("img").attr("src","/img/download.png");});$(".comments").hover(function(){$(this).find("img").attr("src","/img/comment-hover.png");},function(){$(this).find("img").attr("src","/img/comment.png");});function sticker(hash,type){$.post("/sticker",{hash:hash,type:type},function(data){if(data=="login"){$(".loginreq").remove();var continueurl='/wp/'+hash;$('#'+hash+'stickers').after("<p class='loginreq'><a href='/signin?redirect="+continueurl+"'>Log in</a> or <a href='/signup?redirect="+continueurl+"'>sign up</a> to favorite</p>");$(".loginreq").fadeIn('fast',function(){$(this).delay(2000).fadeOut('slow');});}else{var json=$.parseJSON(data);$('#'+hash+'stickers div').removeClass("active")
$('#'+hash+'stickers .'+type).addClass("active");var i;var l=0,a=0,cu=0,co=0,t=0;for(i=0;i<json.length;++i){if(json[i].hasOwnProperty('awesome')){$('#'+hash+'stickers .awesomec').css("display","inline");$('#'+hash+'stickers .awesomec').text(json[i]['awesome']);a=1;}
if(json[i].hasOwnProperty('lol')){$('#'+hash+'stickers .lolc').css("display","inline");$('#'+hash+'stickers .lolc').text(json[i]['lol']);l=1;}
if(json[i].hasOwnProperty('cute')){$('#'+hash+'stickers .cutec').css("display","inline");$('#'+hash+'stickers .cutec').text(json[i]['cute']);cu=1;}
if(json[i].hasOwnProperty('cool')){$('#'+hash+'stickers .coolc').css("display","inline");$('#'+hash+'stickers .coolc').text(json[i]['cool']);co=1;}
if(json[i].hasOwnProperty('thanks')){$('#'+hash+'stickers .thanksc').css("display","inline");$('#'+hash+'stickers .thanksc').text(json[i]['thanks']);t=1;}}
if(a==0){$('#'+hash+'stickers .awesomec').css("display","none");}
if(l==0){$('#'+hash+'stickers .lolc').css("display","none");}
if(t==0){$('#'+hash+'stickers .thanksc').css("display","none");}
if(co==0){$('#'+hash+'stickers .coolc').css("display","none");}
if(cu==0){$('#'+hash+'stickers .cutec').css("display","none");}}});}});