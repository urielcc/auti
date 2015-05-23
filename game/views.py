from django.shortcuts import render
from django.http import JsonResponse
from game.models import *

def index(request):
    person = Person(name = "Uriel")
    person.save()
    print "Hola"
    return JsonResponse({'statusCode':0, 'message':'Datos guardados correctamente'})
