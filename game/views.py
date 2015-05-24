from django.shortcuts import render, redirect, render_to_response
from django.http import JsonResponse, Http404, HttpResponse
from django.template import Template, RequestContext
from game.models import *
import sys
import json

def index(request):
    #person = Person(name = "Uriel")
    #person.save()
    #alert = AlertType(
    #	title = "Hola Como estas",
    #	type_id = 1,
    #	img = "foot.png",
    #	sound = "hola"
    #)
    #alert.save()
    return render_to_response('index.html', RequestContext(request, {}))

def checkAlert(request):
	
	print "Va a buscar"
	alertData = Alert.objects(is_active = True).first()
	if(alertData):
		alert = AlertType.objects(type_id = alertData.type_id).first()
		alertData.is_active = False
		alertData.save()
		return HttpResponse(json.dumps(alert.as_json()))
	else:
		return JsonResponse({'statusCode':1, 'message':'No hay alertas'})

def api(request, opcion=None):
    
    options = { 
    	'checkalert' : checkAlert
    }
    #if request.method == 'POST':
    return options[opcion](request)
    #try:
    #    return options[opcion](request)
    #except:
    #        raise Http404
    #else:
    #    raise Http404