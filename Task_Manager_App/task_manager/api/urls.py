# api/urls.py
from django.urls import path
from .views import TaskListView, TaskCreateView

urlpatterns = [
    path('tasks/', TaskListView.as_view(), name='task-list'),
    path('tasks/create/', TaskCreateView.as_view(), name='task-create'),
    # path('tasks/<int:pk>/', TaskDetailView.as_view(), name='task-detail'),
]
