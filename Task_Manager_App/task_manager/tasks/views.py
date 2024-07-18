#Add views to handle task creation, viewing, editing, and deletion

from django.shortcuts import render, get_object_or_404, redirect # render is used to render HTML templates, redirect is used to redirect to another view
from django.contrib.auth.decorators import login_required 
from rest_framework import generics, viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .forms import TaskForm # Import the TaskForm form from the current app's forms
from .models import Task  # Import the Task model from the current app's models
from .serializers import TaskSerializer

@api_view(['GET', 'POST'])
def task_list(request):
    
    if request.method == 'GET':
        tasks = Task.objects.all() 
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TaskListCreateAPIView(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

@login_required
# Define the task_list view function which will handle requests to the task list page
def task_list(request):
    """
    View function to list all tasks.

    This function retrieves all tasks from the database and renders them
    in the 'task_list.html' template. It is responsible for handling the 
    request to the task list page and returning the appropriate response.
    """
    # Query the database to get all Task objects
    tasks = Task.objects.all() # The all() method returns a QuerySet of all Task objects

    # Render the 'task_list.html' template with the tasks context
    # The render function takes the request, the template name, and a context dictionary
    return render(request, 'tasks/task_list.html', {'tasks': tasks})

@login_required
def task_detail(request, pk):
    task = get_object_or_404(Task, pk=pk)
    return render(request, 'tasks/task_detail.html', {'task': task})

@login_required
# Define the create_task view function which will handle requests to create a new task
def task_create(request):
    """
    View function to create a new task.

    This function handles both GET and POST requests. For GET requests, it
    renders an empty task form. For POST requests, it processes the submitted
    form data and saves a new task to the database if the form is valid.
    """
    if request.method == 'POST': # Check if the request method is POST
        form = TaskForm(request.POST) # Bind form with POST data
        if form.is_valid(): # Validate the form
            form.save()  # Save the new task to the database
            return redirect('task_list') # Redirect to the task list view
    else:
        form = TaskForm() # Create an empty form instance

    # Render the 'create_task.html' template with the form context
    return render(request, 'tasks/task_form.html', {'form': form})

@login_required
def task_update(request, pk):
    task = get_object_or_404(Task, pk=pk)
    if request.method == 'POST':
        form = TaskForm(request.POST, instance=task)
        if form.is_valid():
            form.save()
            return redirect('task_list')
    else:
        form = TaskForm(instance=task)
    return render(request, 'tasks/task_form.html', {'form': form})

# Define the add_task view
def add_task(request):
    """
    Handle the request to add a new task.

    Args:
        request (HttpRequest): The request object.

    Returns:
        HttpResponse: The response object containing the rendered template or redirect.
    """
    if request.method == 'POST':  # Check if the request method is POST
        form = TaskForm(request.POST)  # Create a form instance with the POST data
        if form.is_valid():  # Check if the form is valid
            form.save()  # Save the new task to the database
            return redirect('home')  # Redirect to the home page
    else:
        form = TaskForm()  # Create an empty form instance

    return render(request, 'add_task.html', {'form': form})  # Render the add_task template with the form

@login_required
def task_delete(request, pk):
    task = get_object_or_404(Task, pk=pk)
    if request.method == 'POST':
        task.delete()
        return redirect('task_list')
    return render(request, 'tasks/task_confirm_delete.html', {'task': task})
