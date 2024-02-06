from django.urls import path
from .views import index,speakers


urlpatterns = [
    path('', index, name='index'),
    path('speakers/', speakers, name='speakers'),
   
]
