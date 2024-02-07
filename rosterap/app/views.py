from django.shortcuts import render,redirect
from .models import Satsangdata,Speakers
from datetime import datetime
from django.utils import timezone
# Create your views here.

def index(request):
    oSatsang = Satsangdata.objects.none() 
    if request.method == 'POST':
        countySel = request.POST.get('countySel')
        stateSel = request.POST.get('stateSel')
        dateinput = request.POST.get('dateinput')
      
        # datetime_object = datetime.combine(datetime.strptime(dateinput, "%Y-%m-%d").date(), datetime.min.time())
        start_date = datetime.strptime(dateinput, "%Y-%m-%d")
        end_date = start_date + timezone.timedelta(days=1)
        oSatsang = Satsangdata.objects.filter(CountySel=countySel,StateSel=stateSel,Date__range=(start_date, end_date))
    return render(request, 'uifiles/index.html',{'oSatsangdata':oSatsang}) 


def speakers(request):
    oSpeakers = Speakers.objects.all()
    return render(request, 'uifiles/Speakers.html',{'oSpeakers':oSpeakers})
