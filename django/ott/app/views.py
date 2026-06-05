from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect

def Adminlogin(request):

    if request.method == "POST":
        return redirect('home')
    return render(request, 'login.html')


def home(request):
    return render(request, 'home.html')

def changepassword(request):
    return render(request, 'changepassword.html')

def addmovie(request):
    return render(request, 'addmovie.html')

def userlist(request):
    return render(request, 'userlist.html')
