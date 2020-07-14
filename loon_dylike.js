
console.log("dylike脚本开始!");
var url = $request.url;
var headers = $request.headers;
var body = $request.body;
try {
    if (url.indexOf("//webcast3-normal-c-hl.amemv.com/webcast/room/like/?") >= 0) {

        if (!!body) {

            //$notification.post('获取到手动点赞!', '获取到手动点赞!', body)

            console.log("###########################################");
            console.log("原body:" + body);

            //body = body.replace("count=3", "count=");
            body = "count=12&" + body.split('&')[1];

            console.log("修改后body:" + body);

            console.log("###########################################");

            var params = {
                url: url,
                headers: headers,
                body: body
            };

            console.log("请求体****************************************");
            console.log("请求体:" + JSON.stringify(params));
            console.log("请求体****************************************");

            var likeCount = 12;
            function forPost() {
                setTimeout(function () {
                    console.log("循环请求执行");
                    $httpClient.post(params, function (error, response, data) {
                        console.log("错误:" + error);
                        console.log("返回数据:" + data);
                        if (data.indexOf("手速") > -1) {
                            $notification.post('点赞已到上限!', '点赞个数:' + likeCount, data);
                        }
                        else {
                            likeCount += 12;
                            forPost();
                        }
                    });
                }, 1000);
            }

            forPost();
        }

    }
} catch (e) {
    console.log("try错误:" + e);
}

$done({body});
//$done(body);
console.log("执行完成!!!!");
