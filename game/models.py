#encoding:utf-8
from django.db import models
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes import generic
from django.conf import settings
from mongoengine import *

# Create your models here.
class Person(Document):
	name = StringField(max_length=100)
	def __unicode__(self):
    		return self.name
