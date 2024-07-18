from django.contrib import admin
from .views import TaskListCreateAPIView, TaskRetrieveUpdateDestroyAPIView, TaskViewSet
from django.urls import path, include # path is used to define URL patterns
from rest_framework.routers import DefaultRouter
from . import views # Import the views module from the current app

router = DefaultRouter()
router.register(r'tasks', TaskViewSet)

# Define the URL patterns
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),  # URL pattern for the home view
    path('add/', views.add_task, name='add_task'),  # URL pattern for the add_task view
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
