/******************************

脚本功能：Foodie-美食相机——解锁VIP
下载地址：https://is.gd/RChGSr
软件版本：5.2.11
脚本作者：彭于晏
更新时间：2023-9-28
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：️此脚本仅供学习与交流，请勿转载与贩卖！️️️

*******************************

[rewrite_local]

^https:\/\/api-sub\.meitu\.com\/v2\/user\/vip_info_by_group\.json.+ url script-response-body https://raw.githubusercontent.com/ilovinht/hello-world/master/mtxx.js

[mitm] 

hostname = api-sub.meitu.com



*******************************/

var obj = JSON.parse($response.body);

    obj = {
  "code" : 0,
  "message" : "success",
  "data" : {
    "account_id" : obj.data.account_id,
    "is_vip" : true,
    "limit_type" : 0,
    "have_valid_contract" :true,
    "use_vip" : true,
    "show_renew_flag" : false,
    "show_renew_flag_abroad" : true,
    "in_trial_period" : false,
    "account_type" : 2
  },
  "request_id" : obj.request_id,
  "success" : true,
  "error_code" : "00000" 
}
console.log("Modified Body:\n" + JSON.stringify(obj));
$done({body : JSON.stringify(obj)});
