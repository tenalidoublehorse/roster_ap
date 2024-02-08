import csv
from django.contrib import admin
from django.http import HttpResponse
from .models import Satsangdata,Speakers

# Register your models here.

class AdminSatsangdata(admin.ModelAdmin):
    list_display = ['Name','Area','Satsang','Date']


class AdminSpeakers(admin.ModelAdmin):
    list_display = ['Name','Phonenumber','Place','a_Date']
    list_filter = ['a_Date']
    actions = ['export_to_csv']
    def export_to_csv(self, request,queryset):
        meta = self.model._meta
        fieldnames = [field.name for field in meta.fields]
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment;filename=speakers.csv'
        writer = csv.writer(response)
        writer.writerow(fieldnames)
        for obj in queryset:
             writer.writerow([getattr(obj, field) for field in fieldnames])
        return response
    export_to_csv.short_description = "Download selected as csv"



admin.site.register(Satsangdata,AdminSatsangdata)
admin.site.register(Speakers,AdminSpeakers)
