from django.db import models


class TechStackModel(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class ProjectModel(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    description_1 = models.TextField(blank=True, null=True, default='')
    logo = models.ImageField(upload_to='uploads/', blank=True, null=True)
    image = models.ImageField(upload_to='uploads/', blank=True, null=True)
    tech_stack = models.ManyToManyField(TechStackModel, blank=True)
    github = models.URLField(blank=True, null=True)
    live = models.URLField(blank=True, null=True)
    slug_url = models.CharField(max_length=10000)
    quick_view = models.URLField(blank=True, null=True)
    private = models.BooleanField(default=False)
    deleted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class CredentialsModel(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.username} - {self.password}'


class GithubModelModel(models.Model):
    url = models.URLField()

    def __str__(self):
        return self.url


class ProjectLiveModel(models.Model):
    project = models.ForeignKey(ProjectModel, on_delete=models.CASCADE)
    platform = models.CharField(max_length=100, blank=True, null=True)
    platform_url = models.URLField(blank=True, null=True)
    live = models.URLField(blank=True, null=True)
    credentials = models.ManyToManyField(CredentialsModel, blank=True)
    github = models.ForeignKey(GithubModelModel, on_delete=models.CASCADE, blank=True, null=True)
    private = models.BooleanField(default=False)
    deleted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.project.title} {self.platform}' 
