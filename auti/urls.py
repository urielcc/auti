from django.conf.urls import patterns, include, url
from django.contrib import admin
from game.views import index, api, admin	

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'auti.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^api/(?P<opcion>\w+)/$', 'game.views.api', name='api'),
    url(r'^$', 'game.views.index', name='index'),
    url(r'^admin$', 'game.views.admin', name='admin'),
)
