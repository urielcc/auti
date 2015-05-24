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

class AlertType(Document):
	title = StringField(max_length=200)
	type_id = IntField()
	img = StringField(max_length=100)
	sound = StringField(max_length=100)
	def as_json(self):
	        return dict(
	        	statusCode = 0,
	        	title=self.title,
	            type_id=self.type_id, 
	            img=self.img,
	            sound=self.sound)

	def __unicode__(self):
    		return self.title

class Alert(Document):
	alert_id = IntField()
	type_id = IntField()
	is_active = BooleanField()
	is_received = BooleanField()
	is_responded = BooleanField()
	def __unicode__(self):
    		return unicode(self.alert_id)

