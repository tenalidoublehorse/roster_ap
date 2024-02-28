import csv
from django.contrib import admin
from django.http import HttpResponse
from .models import Satsangdata
from import_export.admin import ImportExportModelAdmin

# Register your models here.

class AdminSatsangdata(ImportExportModelAdmin):
    list_display = ['Name','Area','Satsang','Phonenumber','Date']
    list_filter = ['Date','Name','Phonenumber']
    actions = ['export_to_csv']
    def export_to_csv(self, request,queryset):
        meta = self.model._meta
        fieldnames = [field.name for field in meta.fields]
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment;filename=satsang.csv'
        writer = csv.writer(response)
        writer.writerow(fieldnames)
        for obj in queryset:
             writer.writerow([getattr(obj, field) for field in fieldnames])
        return response


admin.site.register(Satsangdata,AdminSatsangdata)

