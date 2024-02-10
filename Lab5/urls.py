"""
Lab5 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/

Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

# Uncomment next two lines to enable admin:
#from django.contrib import admin
#from django.urls import path

from modulefinder import packagePathMap
from django.urls import include, re_path
import Q1.views
import Q2.views

urlpatterns = [
    # Uncomment the next line to enable the admin:
    #path('admin/', admin.site.urls)
    re_path(r'^Q1$',Q1.views.Q1, name="Q1" ),
    re_path(r'^Q2$',Q2.views.Q2, name="Q2" )
]
