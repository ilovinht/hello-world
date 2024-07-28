/******************************

脚本功能：test
更新时间：2023-7-29
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
    "show_renew_flag_abroad" : false,
    "in_trial_period" : false,
    "account_type" : 1
  },
  "request_id" : obj.request_id,
  "success" : true,
  "error_code" : "00000" 
}
console.log("Modified Body:\n" + JSON.stringify(obj));
$done({body : JSON.stringify(obj)});
