from django.contrib import admin

from .models import *

admin.site.register(ProjectModel)
admin.site.register(ProjectLiveModel)
admin.site.register(TechStackModel)
admin.site.register(CredentialsModel)
admin.site.register(GithubModelModel)
