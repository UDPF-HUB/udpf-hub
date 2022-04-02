
	var appUpdate=function(){
	
	var url="https://udpf-hub.github.io/udpf-hub/UDPF HUB_1_4.0.apk";
	window.location.href=url;
	Website2APK.openExternal(url);
	}
	
	
	setInterval(function(){ 
	const d=new Date();
udpf.js_abrowser({
    	          url : "https://udpf-hub.github.io/udpf-hub/upate.json"+'?t=' +d.getTime(),  // ""(by default)
    	          method :  "get"  //get(by default) /post
				  
                             }, function(a,b,c){
                                         var VersionName=udpf.json_decode(a).VersionName;
										 
										  var VersionCode=udpf.json_decode(a).VersionCode;	
                                                          //alert(VersionName);										  
						          if(Website2APK.getAppVersionCode()<VersionCode)
					 window.location.href="https://udpf-hub.github.io/udpf-hub/update.html"+'?t=' +d.getTime();
	                                                  if(Website2APK.getAppVersionName()<VersionName)
					 window.location.href="https://udpf-hub.github.io/udpf-hub/update.html"+'?t=' +d.getTime();
								   
                                                                   });
	
	
	
	}, 10000);
function udpf_link_finder1(filter, url="https://telemetr.io/en/channels/1571630354-cricket_live_link_updates/posts" ){
var op=udpf.js_browser(proxy_url(url)).trim();	
var urlRegex = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
var url = op.match(urlRegex);
//return url;
var __FOUND ="";
for(var i=0; i< url.length; i++) {
	var ttext=(url[i]).toString() ;
	//console.log(i+ttext)
	if( ttext.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
		__FOUND = url[i];
		break;
	}
}

//return __FOUND.replace("_lowest","").replace("_low","").replace("_medium","").replace("_high","");
document.getElementById("ext_player_url").src = id;
ext.main.plyr_init();
 }

