#! /usr/bin/python
#coding=utf-8


import requests
import hashlib
import time

def send(method,params):
    access_key_id = '100001'
    access_key_secret = 'o78qHs0B7_b3pvUKcLuVkSS13bfQ'
    timeout = 60
    timestamp = int(time.time())
    params['timeout'] = str(timeout);
    params['timestamp'] = str(timestamp);
    #url = 'http://test.12sleep.cn/lamp_api/index.php/thrid_api/' + method
    url = 'http://api.12sleep.cn/lamp_api/index.php/thrid_api/' + method
    sha1 = hashlib.sha1()
    params_str = ''
    for key in sorted(params.keys()):
        params_str += (key + '=' +params[key] + '&')
    params_str = params_str+'access_key_id='+access_key_id+'&access_key_secret='+access_key_secret
    sha1.update(params_str)
    signature = sha1.hexdigest()
    params['signature'] = signature;
    params['access_key_id'] = access_key_id
    response = requests.post(url, data=params)
    return response

'''
params = {'did':'Lunar-15G1005367','sleeptime':'2015-12'}
response = send('nuanxin/sleepmonth',params)
print response.content

print "***************"

params = {'did':'Lunar-15G1005367','sleeptime':'2015-11-19'}
response = send('nuanxin/sleepweek',params)
print response.content
print type(response.content)

print "***************"

params = {'did':'Lunar-15G1005367','sleeptime':'2015-11-19'}
response = send('nuanxin/sleepday',params)
print response.content

'''
params = {'did':'Lunar-15H2013559','sleeptime':'2015-12'}
response = send('nuanxin/sleepmonth',params)
print response.content
