from django.db import models
from django.contrib.auth.models import User
from projects.models import Project  # assuming projects are in a separate app

class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    assigned_to = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    due_date = models.DateField()
    completed = models.BooleanField(default=False) # New field for task completion status

    def __str__(self):
        return self.title
