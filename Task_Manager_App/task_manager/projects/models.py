from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(default='2024-12-31')
    # Add other fields as necessary

    def __str__(self):
        return self.title
