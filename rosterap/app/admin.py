import csv
from django.contrib import admin
from django.http import HttpResponse
from .models import Satsangdata
from import_export.admin import ImportExportModelAdmin

# Register your models here.

class AdminSatsangdata(ImportExportModelAdmin):
    list_display = ['Name','Area','Satsang','Phonenumber','Place','Date']
    list_filter = ['Date']
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


# class AdminSpeakers(ImportExportModelAdmin):
#     list_display = ['Name','Phonenumber','Place','a_Date']
#     list_filter = ['a_Date']
#     actions = ['export_to_csv']
#     def export_to_csv(self, request,queryset):
#         meta = self.model._meta
#         fieldnames = [field.name for field in meta.fields]
#         response = HttpResponse(content_type='text/csv')
#         response['Content-Disposition'] = 'attachment;filename=speakers.csv'
#         writer = csv.writer(response)
#         writer.writerow(fieldnames)
#         for obj in queryset:
#              writer.writerow([getattr(obj, field) for field in fieldnames])
#         return response
#     export_to_csv.short_description = "Download selected as csv"



admin.site.register(Satsangdata,AdminSatsangdata)
# admin.site.register(Speakers,AdminSpeakers)
