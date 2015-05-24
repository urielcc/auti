from django.shortcuts import render, redirect, render_to_response
from django.http import JsonResponse, Http404, HttpResponse
from django.template import Template, RequestContext
from django.conf import settings
from game.models import *
from game.forms import *
from game.tts_service import audio_extract
from PIL import Image, ImageOps
import sys
import json
import time

def index(request):
    #person = Person(name = "Uriel")
    #person.save()
    #alert = AlertType(
    #	title = "Hola, Como estas?",
    #	type_id = 1,
    #	img = "foot.png",
    #	sound = "saludo.mp3"
    #)
    #alert.save()
    #path = settings.MEDIA_ROOT
    #audio_extract(input_text=alert.title, args = {'language':'es','output':path+'/audio/saludo.mp3'})
    return render_to_response('index.html', RequestContext(request, {}))

def admin(request):
	form = UploadForm()
    	return render(request, 'admin.html', {'form': form})

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

def alertsAvailables(request):
	alerts = AlertType.objects()
	results = [ob.as_json() for ob in alerts]
	return HttpResponse(json.dumps(results))

def deleteAlert(request):
	data = json.loads(request.body)
	alert = AlertType.objects(type_id = data["alert_id"]).first()
	alert.delete()
	return JsonResponse({'statusCode':0, 'message':'Alerta eliminada'})

def newAlert(request):
	form = UploadForm(request.POST, request.FILES)
	appData = AplicationData.objects().first()
	temp_id = appData.alert_type_count
	appData.alert_type_count += 1
	appData.save()
	print request.POST['title']
	print temp_id
	if 'image' in request.FILES:
		fileSaveName  = handle_uploaded_image(request.FILES['image'], temp_id)
	path = settings.MEDIA_ROOT
	audio_extract(input_text = request.POST['title'], args = {'language':'es','output':path+'/audio/saludo.mp3'})
	
	alert = AlertType(
    	title = request.POST['title'],
    	type_id = temp_id,
    	img = fileSaveName,
    	sound = "saludo.mp3"
    )

	alert.save()
	return JsonResponse({'statusCode':0, 'message':'Alerta cargada'})	

def api(request, opcion=None):
    options = { 
    	'checkalert' : checkAlert,
    	'alertsAvailables': alertsAvailables,
    	'deleteAlert' : deleteAlert,
    	'newAlert' : newAlert
    }
    #if request.method == 'POST':
    return options[opcion](request)
    #try:
    #    return options[opcion](request)
    #except:
    #        raise Http404
    #else:
    #    raise Http404
def handle_uploaded_image(fileData, id):
    dateUploadFile = time.strftime("%Y-%m-%d")
    fileName = str(fileData)
    fileNameSplit = fileName.split('.')
    fileFormat = fileNameSplit[len(fileNameSplit) - 1]
    path = settings.MEDIA_ROOT
    fileSaveName = dateUploadFile+'_'+str(id)+'.'+fileFormat
    dest_file = open(path+'/img/original/'+fileSaveName, 'wb+')
    for chunk in fileData.chunks():
        dest_file.write(chunk)
    dest_file.close()
    
    print >>sys.stderr, "Iniciando copia mini" 
    image = Image.open(path+'/img/original/'+fileSaveName)
    print >>sys.stderr, "Abriendo copia mini"
    image = image.convert("RGB")
    print >>sys.stderr, "Covirtiendo copia mini"
    image.thumbnail((200,200), Image.ANTIALIAS)
    image.save(path+'/img/thumbnail/'+fileSaveName, 'JPEG', quality=75)

    imagefit = ImageOps.fit(image, (75, 75), Image.ANTIALIAS)
    imagefit.save(path+'/img/75x75/'+fileSaveName, 'JPEG', quality=75)

    return fileSaveName