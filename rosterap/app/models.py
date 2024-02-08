from django.db import models
from datetime import datetime

# Create your models here.

class Satsangdata(models.Model):
    Name = models.CharField(max_length=100)
    Area = models.CharField(max_length=50)
    Satsang = models.CharField(max_length=50)
    Date = models.DateTimeField(default= datetime.now()) 


    def __str__(self):
        return self.Name
    

class Speakers(models.Model):
    Name = models.CharField(max_length=100)
    Phonenumber = models.CharField(max_length=10)
    Place = models.CharField(max_length=100)
    a_Date = models.DateTimeField(default=datetime.now())

    def __str__(self):
        return self.Name