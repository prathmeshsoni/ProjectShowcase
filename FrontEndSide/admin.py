from django.contrib import admin

from .forms import *

admin.site.register(TechStackModel)


class ProjectModelAdmin(admin.ModelAdmin):
    form = ProjectModelForm

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        if request.user:
            form.base_fields['author'].widget.attrs['placeholder'] = f'By {request.user.username.title()}'
        return form

    def save_model(self, request, obj, form, change):
        if not obj.pk:
            obj.user = request.user  # Set the 'user' field to the logged-in user
        obj.save()

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        if request.user.is_superuser:
            return queryset
        return queryset.filter(user=request.user)


admin.site.register(ProjectModel, ProjectModelAdmin)


class ProjectLiveModelAdmin(admin.ModelAdmin):
    form = ProjectLiveModelForm

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['project'].queryset = ProjectModel.objects.filter(user=request.user)
        return form

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        if request.user.is_superuser:
            return queryset
        return queryset.filter(project__user=request.user)


admin.site.register(ProjectLiveModel, ProjectLiveModelAdmin)


class CredentialsModelAdmin(admin.ModelAdmin):
    form = CredentialsModelForm

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['project_live'].queryset = ProjectLiveModel.objects.filter(project__user=request.user)
        return form

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        if request.user.is_superuser:
            return queryset
        return queryset.filter(project_live__project__user=request.user)


admin.site.register(CredentialsModel, CredentialsModelAdmin)
