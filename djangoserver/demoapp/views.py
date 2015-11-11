#encoding=utf-8
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt 

import json
# Create your views here.
def index(request):
	return render(request, 'demoapp/index.html')
	#return HttpResponse("hello")

@csrf_exempt 
def serverload(request):
	list = [
		{"author":u"奥氮平", "whatsay":u"一日三次"},
		{"author":u"百忧解", "whatsay":u"隔日一次"}
	]
	if request.method == 'POST' and request.is_ajax():
		author = request.POST['author']
		whatsay = request.POST['whatsay']
		dict = {'author':author, 'whatsay':whatsay}
		list.append(dict)
	print list
	return HttpResponse(json.dumps(list), content_type='application/json')
