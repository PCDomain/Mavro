# from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet
from . import views

router = DefaultRouter()
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('', views.project_list, name='project_list'),
    path('<int:pk>/', views.project_detail, name='project_detail'),
    path('create/', views.project_create, name='project_create'),
    path('<int:pk>/update/', views.project_update, name='project_update'),
    path('<int:pk>/delete/', views.project_delete, name='project_delete'),
    # path('', views.index, name='index'),  # Example view
    # path('admin/', admin.site.urls),
    # path('projects/', include('projects.urls')),
    path('', include(router.urls)),
    # path('articles/<slug:slug>/', views.article_detail, name='article_detail'),
]
