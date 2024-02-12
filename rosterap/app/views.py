from django.shortcuts import render,redirect
from .models import Satsangdata
from datetime import datetime
from django.utils import timezone
# Create your views here.

def index(request):
    oSatsang = Satsangdata.objects.none() 
    if request.method == 'POST':
        countySel = request.POST.get('countySel')
        stateSel = request.POST.get('stateSel')
        dateinput = request.POST.get('dateinput')
        start_date = datetime.strptime(dateinput, "%Y-%m-%d")
       
        end_date = start_date + timezone.timedelta(days=1)
        oSatsang = Satsangdata.objects.filter(Area=countySel,Satsang=stateSel,Date__range=(start_date, end_date))
    return render(request, 'uifiles/index.html',{'oSatsangdata':oSatsang}) 


def speakers(request):
    oSpeakers = Satsangdata.objects.all()
    return render(request, 'uifiles/Speakers.html',{'oSpeakers':oSpeakers})
