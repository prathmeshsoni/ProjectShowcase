from django.contrib import messages
from django.contrib.auth.models import User, Permission
from django.db.models import Q, Case, When, Value, BooleanField
from django.shortcuts import render, redirect

from .models import *


def home(request):
    if request.user.is_authenticated:
        if request.user.is_superuser:
            projects_obj = ProjectModel.objects.all()
        else:
            projects_obj = ProjectModel.objects.filter(
                Q(user=request.user) | Q(private=False, deleted=False)
            ).annotate(
                is_user_project=Case(
                    When(user=request.user, then=Value(True)),
                    default=Value(False),
                    output_field=BooleanField()
                )
            ).order_by(
                '-is_user_project',
                'id'
            )
    else:
        projects_obj = ProjectModel.objects.filter(deleted=False, private=False)
    items = {
        'projects': projects_obj
    }
    return render(request, 'projects.html', items)


def login(request):
    if request.user.is_authenticated:
        return redirect('/admin/')
    return redirect('/admin/login/?next=/admin/')


def generate_password():
    import random
    import string
    password = ''.join(random.choices(string.ascii_letters + string.digits, k=10))
    return password


def update_username(username):
    username = username.split('@')[0]
    if User.objects.filter(username=username).exists():
        username = username + str(User.objects.count())
    return username


def send_email(username, email, password):
    pass


def register(request):
    if request.user.is_authenticated:
        return redirect('/admin/')

    if request.method == 'POST':
        email = request.POST.get('username')
        email = email.strip().lower()

        if User.objects.filter(email=email).exists():
            return redirect('/register/')

        username = update_username(email)
        password = generate_password()

        try:
            user = User.objects.create_user(username=username, password=password, email=email, is_staff=True)
            user.save()

            user.user_permissions.add(*Permission.objects.filter(content_type__app_label='FrontEndSide').exclude(
                content_type__model='techstackmodel'))
            add_ = Permission.objects.get(codename='view_techstackmodel')
            view_ = Permission.objects.get(codename='add_techstackmodel')
            user.user_permissions.add(add_, view_)
            user.save()

            send_email(username, email, password)

            messages.success(request, 'User Created Successfully')
            messages.success(request, f'Your Username is {username} {password}')
            messages.success(request, f'We have sent your password to your email {email}')

            return redirect('/admin/login/?next=/admin/')
        except:
            return redirect('/register/')

    return render(request, 'register.html')


def forgot_password(request):
    if request.user.is_authenticated:
        return redirect('/admin/')
    return render(request, 'forgot-password.html')


def project_details(request, url):
    url = f'/{url}/'
    try:
        projects_obj = ProjectModel.objects.get(slug_url=url)
    except ProjectModel.DoesNotExist:
        return redirect('home')

    if projects_obj.private:
        if not projects_obj.user == request.user:
            return redirect('home')
    
    if request.user.is_authenticated:
        if request.user.is_superuser:
            live_obj = ProjectLiveModel.objects.filter(project=projects_obj.id)
        else:
            if projects_obj.user == request.user:
                live_obj = ProjectLiveModel.objects.filter(project=projects_obj.id)

            else:
                live_obj = ProjectLiveModel.objects.filter(project=projects_obj.id, deleted=False, private=False)
    else:
        live_obj = ProjectLiveModel.objects.filter(project=projects_obj.id, deleted=False, private=False)

    for i in live_obj:
        i.pro_url = i.live.replace('https://', '').replace('/', '')

    items = {
        'project': projects_obj,
        'live': live_obj
    }
    return render(request, 'projects_details.html', items)
