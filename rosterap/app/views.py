from django.shortcuts import render,redirect
from .models import Satsangdata
from datetime import datetime
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
@csrf_exempt
def index(request):
    oSatsang = Satsangdata.objects.none() 
    if request.method == 'POST':
        a_countySel = request.POST.get('countySel')
        s_stateSel = request.POST.get('stateSel')
        a_dateinput = request.POST.get('dateinput')
        start_date = datetime.strptime(a_dateinput, "%Y-%m-%d")
        end_date = start_date + timezone.timedelta(days=1)
        oSatsang = Satsangdata.objects.filter(Area=a_countySel,Satsang=s_stateSel,Date__range=(start_date, end_date))
    return render(request, 'uifiles/index.html',{'oSatsangdata':oSatsang}) 


def speakers(request):
    oSpeakers = Satsangdata.objects.all()
    return render(request, 'uifiles/Speakers.html',{'oSpeakers':oSpeakers})
