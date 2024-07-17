from django.contrib import admin
from .views import TaskListCreateAPIView, TaskRetrieveUpdateDestroyAPIView, TaskViewSet
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('', views.task_list, name='task_list'),
    path('<int:pk>/', views.task_detail, name='task_detail'),
    path('create/', views.task_create, name='task_create'),
    path('<int:pk>/update/', views.task_update, name='task_update'),
    path('<int:pk>/delete/', views.task_delete, name='task_delete'),
    path('', TaskListCreateAPIView.as_view(), name='task-list-create'),
    path('<int:pk>/', TaskRetrieveUpdateDestroyAPIView.as_view(), name='task-detail'),
    #  path('tasks/', views.TaskListView.as_view(), name='task-list'),
    path('api/', include(router.urls)),
]
