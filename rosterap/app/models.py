from django.db import models
import datetime

# Create your models here.

class Satsangdata(models.Model):
    Name = models.CharField(max_length=100)
    Area = models.CharField(max_length=50)
    Satsang = models.CharField(max_length=50)
    Phonenumber = models.CharField(max_length=10,null=True, default="")
    # Place = models.CharField(max_length=100,null=True, default="")
    Date = models.DateField() 


    def __str__(self):
        return self.Name
    