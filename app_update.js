window.onload=function(){
	
	var appUpdate=function(){
	
	var url="https://udpf-hub.github.io/udpf-hub/UDPF HUB_1_4.0.apk";
	window.location.href=url;
	Website2APK.openExternal(url);
	}
	
	
	setInterval(function(){ 
	const d=new Date();
udpf.js_abrowser({
    	          url : "https://udpf-hub.github.io/udpf-hub/update.js"+'?t=' +d.getTime(),  // ""(by default)
    	          method :  "get"  //get(by default) /post
				  
                             }, function(a,b,c){
                                         var VersionName=udpf.json_decode(a).VersionName;
										  var VersionCode=udpf.json_decode(a).VersionCode;	  
						if(Website2APK.getAppVersionCode()>VersionCode||Website2APK.getAppVersionName()>VersionName)
					 window.location.href="https://udpf-hub.github.io/udpf-hub/update.html"+'?t=' +d.getTime();
								   
                                                                   });
	
	
	
	}, 6000);
	
	
	
	
}
