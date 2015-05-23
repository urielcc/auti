from django.shortcuts import render, redirect, render_to_response
from django.http import JsonResponse
from game.models import *

def index(request):
    person = Person(name = "Uriel")
    person.save()
    print "Hola"
    return render(request, 'index.html')
