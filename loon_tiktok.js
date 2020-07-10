console.log("tiktok脚本开始执行");
let url=$request.url;
if(url.indexOf("CN")>=0){
	url.replace(/CN/g,"JP")
}

$done({url});
