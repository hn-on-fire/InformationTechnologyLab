from django.shortcuts import render
from datetime import date, datetime

def Q2(request):
    if request.method == 'POST':
        date_of_joining = datetime.strptime(request.POST.get('date_of_joining'), '%Y-%m-%d')
        today = datetime.today()
        diff = int((date_of_joining - today).days)
        return render(request, 'Q2/result.html', {'eligible': diff//365>5})
    else:
        return render(request, 'Q2/form.html')
