# -*- coding: utf-8 -*-
from django import forms
 
class UploadForm(forms.Form):
    title = forms.CharField(
    	widget=forms.TextInput(
    		attrs={
	    		'class':'form-control',
	    		'data-form':'title',
                'onblur':'validate(this)',
                'placeholder':'Introduzca descripción de la alerta',
                'maxlength':'60',
    		}
    	),
        label='Descripción de la alerta'
    )
    image = forms.FileField(
        widget=forms.FileInput(
    		attrs={
    		'class':'form-control',
    		'accept':'image/x-png, image/gif, image/jpeg',
            'data-form':'imagen'
    		}
    	),
        label='Imagén'
    )