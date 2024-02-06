from django.shortcuts import render
from .models import Satsangdata

# Create your views here.

def index(request):
    
    if request.method == 'POST':
        countySel = request.POST.get('countySel')
        stateSel = request.POST.get('stateSel')
        dateinput = request.POST.get('dateinput')
        oSatsangdata = Satsangdata.objects.filter(CountySel=countySel,StateSel=stateSel,Date=dateinput)

    return render(request, 'uifiles/index.html') 


def speakers(request):
    return render(request, 'uifiles/Speakers.html')
