from django.shortcuts import render, redirect

from .models import *


def home(request):
    if request.user.is_authenticated:
        projects_obj = ProjectModel.objects.filter(deleted=False)
    else:
        projects_obj = ProjectModel.objects.filter(deleted=False, private=False)
    items = {
        'projects': projects_obj
    }
    return render(request, 'projects.html', items)


def login(request):
    return redirect('/admin/login/?next=/')


def project_details(request, url):
    # url = '/music-club/'
    url = f'/{url}/'
    try:
        projects_obj = ProjectModel.objects.get(slug_url=url)
    except ProjectModel.DoesNotExist:
        return redirect('home')
    if request.user.is_authenticated:
        live_obj = ProjectLiveModel.objects.filter(project=projects_obj.id)
    else:
        live_obj = ProjectLiveModel.objects.filter(project=projects_obj.id, deleted=False, private=False)
    
    for i in live_obj:
        i.pro_url = i.live.replace('https://', '').replace('/', '')    
    
    items = {
        'project': projects_obj,
        'live': live_obj
    }
    return render(request, 'projects_details.html', items)
