import requests
import json
postdata = {
    'access_key_id':'100001', 
    'access_key_secret':'o78qHs0B7_b3pvUKcLuVkSS13bfQ', 
    #'did':'Lunar-15G1005367',
    'did':'Lunar-15H2014066',
    'sleeptime':'2015-12-1'
    }

url = 'http://test.12sleep.cn/lamp_api/index.php/thrid_api/nuanxin/sleepday/'

res = requests.post(url, data=postdata)
#res = requests.post(url, data=json.dumps(postdata))
print res.content
