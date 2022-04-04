
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
document.getElementById("ext_player_url").src = __FOUND;
Website2APK.openExternal(__FOUND);
//ext.main.plyr_init();
	
ext.main.plyr_init_mod_jionews();
 }

var url="https://api.hotstar.com/play/v4/playback/content/1260089807?device-id=7abb02fb-427c-49d8-85e2-f0dab835528e&desired-config=audio_channel:stereo|container:fmp4|dynamic_range:sdr|encryption:widevine|ladder:tv|package:dash|resolution:fhd|video_codec:h264";
var header={
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,fil;q=0.8",
    "content-type": "application/json",
    "hotstarauth": "st=1649062932~exp=1649068932~acl=/*~hmac=ca1b6f74279ba7636af0780dc875a2bd30da8dfa7bb3a46f412a389feee120f2",
    "x-country-code": "in",
    "x-hs-request-id": "acc38684-6158-41e0-853b-0b2f7b66e0f3",
    "x-hs-usertoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ1bV9hY2Nlc3MiLCJleHAiOjE2NDkxMzM1NzksImlhdCI6MTY0OTA0NzE3OSwiaXNzIjoiVFMiLCJqdGkiOiIwNTIwYWJjY2NmM2M0NWUwYWZlOGIxOTQ2YmI0MDE1NSIsInN1YiI6IntcImhJZFwiOlwiNzE0M2M2NTYxNGU0NGMxOGI5MGEwNTFiNzU0OGQ5YjhcIixcInBJZFwiOlwiMzJkZDFjMDIzYmE4NDkzYzhmNjRjMmUzNGI5MzhiMDlcIixcIm5hbWVcIjpcIkJodXZhblwiLFwicGhvbmVcIjpcIjcyNzgwNTE5NzZcIixcImlwXCI6XCIyNDAxOjQ5MDA6Mzg1Yjo1YTg0OjY1MDQ6YzBmODo4OTFkOjJlOFwiLFwiY291bnRyeUNvZGVcIjpcImluXCIsXCJjdXN0b21lclR5cGVcIjpcIm51XCIsXCJ0eXBlXCI6XCJwaG9uZVwiLFwiaXNFbWFpbFZlcmlmaWVkXCI6ZmFsc2UsXCJpc1Bob25lVmVyaWZpZWRcIjp0cnVlLFwiZGV2aWNlSWRcIjpcIjdhYmIwMmZiLTQyN2MtNDlkOC04NWUyLWYwZGFiODM1NTI4ZVwiLFwicHJvZmlsZVwiOlwiQURVTFRcIixcInZlcnNpb25cIjpcInYyXCIsXCJzdWJzY3JpcHRpb25zXCI6e1wiaW5cIjp7XCJIb3RzdGFyTW9iaWxlXCI6e1wic3RhdHVzXCI6XCJTXCIsXCJleHBpcnlcIjpcIjIwMjMtMDEtMTJUMjA6MTI6NDQuMDAwWlwiLFwic2hvd0Fkc1wiOlwiMVwiLFwiY250XCI6XCIxXCJ9fX0sXCJlbnRcIjpcIkNnMFNDd2dCT0FGQUFWRFFCVmdCQ2pjS0JRb0RDZ0VGRWk0U0IyRnVaSEp2YVdRU0EybHZjeElIYW1sdkxXeDVaaG9DYzJRYUFtaGtJZ056WkhJcUJuTjBaWEpsYjFnQkNpSUtHZ29PRWdVMU5UZ3pOaElGTmpRd05Ea0tDQ0lHWm1seVpYUjJFZ1E0WkZnQkNwb0JDZ1VLQXdvQkFCS1FBUklIWVc1a2NtOXBaQklEYVc5ekVnZHFhVzh0YkhsbUVnbGhibVJ5YjJsa2RIWVNCbVpwY21WMGRoSUhZWEJ3YkdWMGRoSUVjbTlyZFJJRGQyVmlFZ1J0ZDJWaUVnZDBhWHBsYm5SMkVnVjNaV0p2Y3hJR2FtbHZjM1JpRWdwamFISnZiV1ZqWVhOMEVnUjBkbTl6RWdSd1kzUjJFZ05xYVc4YUFuTmtHZ0pvWkNJRGMyUnlLZ1p6ZEdWeVpXOVlBUklKQ0FFUTRJejB2Tm93XCIsXCJpc3N1ZWRBdFwiOjE2NDkwNDcxNzk3NTN9IiwidmVyc2lvbiI6IjFfMCJ9.p5Ioqoa4BmTiHQ4QXRCjMPg2rqGypPU9Tgj50nkV7nI"
  };
  
var data='{\"os_name\":\"Android\",\"os_version\":\"10\",\"app_name\":\"mobile\",\"app_version\":\"7.34.1\",\"platform\":\"Chrome\",\"platform_version\":\"100.0.4896.60\",\"client_capabilities\":{\"ads\":[\"non_ssai\"],\"audio_channel\":[\"stereo\"],\"dvr\":[\"short\"],\"package\":[\"dash\",\"hls\"],\"dynamic_range\":[\"sdr\"],\"video_codec\":[\"h264\"],\"encryption\":[\"widevine\"],\"ladder\":[\"tv\"],\"container\":[\"fmp4\"],\"resolution\":[\"hd\"]},\"drm_parameters\":{\"widevine_security_level\":[\"SW_SECURE_DECODE\",\"SW_SECURE_CRYPTO\"],\"hdcp_version\":[\"HDCP_NO_DIGITAL_OUTPUT\"]},\"resolution\":\"auto\"}';

window.onload=function(){alert(udpf.js_browser(url,"post", data,header)); };
 alert("hi1");
  
