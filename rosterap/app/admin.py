from django.contrib import admin
from .models import Satsangdata

# Register your models here.

class AdminSatsangdata(admin.ModelAdmin):
    list_display = ['Name','CountySel','StateSel','Date']


admin.site.register(Satsangdata,AdminSatsangdata)
