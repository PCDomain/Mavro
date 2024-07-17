"""
URL configuration for task_manager project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
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
from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from django.views.generic import TemplateView  # Add this import
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve

def home_view(request):
    return HttpResponse("Welcome to the Task Manager App!")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
    path('tasks/', include('tasks.urls')),
     path('api/', include('projects.urls')),
    path('', home_view, name='home'),
    path('api/', include('api.urls')),  # Add this line
    path('', TemplateView.as_view(template_name='home.html'), name='home'),
    # path('api/', include('tasks.urls')),  # Ensure this line exists
    path('static/<path:path>/', serve, {'document_root': settings.STATIC_ROOT}),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
