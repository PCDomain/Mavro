#to handle task creation and editing

from django import forms # forms module allows creating and handling forms
from .models import Task # Import the Task model from the current app's models

# Define the TaskForm class
class TaskForm(forms.ModelForm):
    """
    Form for creating and updating tasks.

    This form is based on the Task model and includes all its fields.
    """

    # Meta class to define the form's settings
    class Meta:
        model = Task # Specifies the model to base the form on
        fields = ['name', 'description', 'completed']  # Specifies the fields to include in the form
        # Adding custom widgets and labels if needed
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Task Name'}),
            'description': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Task Description'}),
            'completed': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
        }
        labels = {
            'name': 'Task Name',
            'description': 'Task Description',
            'completed': 'Completed',
        }
