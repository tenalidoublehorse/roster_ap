from django.db import models
from datetime import datetime

# Create your models here.

class Satsangdata(models.Model):
    Name = models.CharField(max_length=100)
    CountySel = models.CharField(max_length=50)
    StateSel = models.CharField(max_length=50)
    Date = models.DateTimeField(default= datetime.now()) 


    def __str__(self):
        return self.Name