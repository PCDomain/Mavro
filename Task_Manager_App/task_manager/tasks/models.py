from django.db import models # models module allows defining database schema
from django.contrib.auth.models import User
from projects.models import Project  # assuming projects are in a separate app

# Define the Task model
class Task(models.Model):
    """
    Model representing a task in the Task Manager application.

    Attributes:
        name (CharField): The name of the task.
        description (TextField): A detailed description of the task.
        completed (BooleanField): Indicates whether the task is completed.
        created_at (DateTimeField): The date and time when the task was created.
        updated_at (DateTimeField): The date and time when the task was last updated.
    """
    name = models.CharField(max_length=255) # CharField is used for short strings
    description = models.TextField(null=True, blank=True) # TextField is used for longer text, can be blank or null
    assigned_to = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    project = models.CharField(max_length=255, null=True, blank=True)
    completed = models.BooleanField(default=False) # BooleanField is used for true/false values, default is False
    due_date = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True) # DateTimeField auto-populates with the current date and time when the object is created
    updated_at = models.DateTimeField(auto_now=True) # DateTimeField auto-populates with the current date and time when the object is updated

     # Meta class to define additional model settings
    class Meta:
        ordering = ['-created_at']  # Orders tasks by creation date in descending order

    # String representation of the Task object
    def __str__(self):
        """
        String representation of the Task model.

        Returns:
            str: The name of the task.
        """
        return self.name
