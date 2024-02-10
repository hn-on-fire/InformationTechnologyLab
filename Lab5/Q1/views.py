from django.shortcuts import render

def Q1(request):
    if request.method == 'POST':
        english_marks = float(request.POST.get('english'))
        physics_marks = float(request.POST.get('physics'))
        chemistry_marks = float(request.POST.get('chemistry'))

        total_marks = english_marks + physics_marks + chemistry_marks
        percentage = (total_marks / 300) * 100

        return render(request, 'result.html', {'percentage': percentage})
    else:
        return render(request, 'form.html')
