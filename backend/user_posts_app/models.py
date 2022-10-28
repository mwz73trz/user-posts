from operator import mod
from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()
    created_date = models.DateField(auto_now_add=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts', null=True, default=None)

    def __str__(self):
        return f'{self.title}'
