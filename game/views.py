from django.shortcuts import render, redirect, render_to_response
from django.http import JsonResponse, Http404
from django.template import Template, RequestContext
from game.models import *
import sys

def index(request):
    #person = Person(name = "Uriel")
    #person.save()
    #alert = Alert(
    #	title = "Hola Como estas",
    #	type = 1,
    #	img = "foot.png",
    #	sound = "hola"
    #)
    #alert.save()
    return render_to_response('index.html', RequestContext(request, {}))

def checkAlert(request):
	
	register = Alert.objects(type = 1).first()
	print >>sys.stderr, register
	print str(register.__class__)
	return JsonResponse({'statusCode':0, 'message':'Datos guardados correctamente'})

def api(request, opcion=None):
    
    options = { 
    	'checkalert' : checkAlert
    }
    if request.method == 'POST':
        return options[opcion](request)
    try:
        return options[opcion](request)
    except:
            raise Http404
    else:
        raise Http404