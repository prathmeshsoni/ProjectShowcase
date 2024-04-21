from django.contrib.auth.models import User
from django.db import models


class TechStackModel(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class ProjectModel(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    description_1 = models.TextField(blank=True, null=True, default='')
    slug_url = models.CharField(max_length=1500, unique=True)
    logo = models.ImageField(upload_to='uploads/', blank=True, null=True)
    image = models.ImageField(upload_to='uploads/', blank=True, null=True)
    live = models.URLField(blank=True, null=True)
    github = models.URLField(blank=True, null=True)
    quick_view = models.URLField(blank=True, null=True)
    tech_stack = models.ManyToManyField(TechStackModel, blank=True)
    author = models.CharField(max_length=100, blank=True, null=True)
    private = models.BooleanField(default=False)
    deleted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        if not self.description_1:
            self.description_1 = self.description

        if self.user and not self.author:
            self.author = self.user.username

        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.title.title()} By {self.user.username.title()}'


class ProjectLiveModel(models.Model):
    project = models.ForeignKey(ProjectModel, on_delete=models.CASCADE)
    platform = models.CharField(max_length=100, blank=True, null=True)
    live = models.URLField(blank=True, null=True)
    github = models.CharField(max_length=1000, blank=True, null=True)
    platform_url = models.URLField(blank=True, null=True)
    private = models.BooleanField(default=False)
    deleted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.project.title.title()} {self.platform} {self.live.replace("https://", "").replace("/", "")}'


class CredentialsModel(models.Model):
    project_live = models.ForeignKey(ProjectLiveModel, on_delete=models.CASCADE, related_name='credentials')
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.project_live} | {self.username} - {self.password}'
