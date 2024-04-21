from django import forms

from .models import *


class ProjectModelForm(forms.ModelForm):
    tech_stack = forms.ModelMultipleChoiceField(
        queryset=TechStackModel.objects.all(),
        widget=forms.CheckboxSelectMultiple(attrs={'id': 'id_tech_stack', 'class': 'ruby-display'}),
        required=False,
    )
    slug_url = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'vURLField', 'placeholder': '/example/'})
    )
    live = forms.URLField(
        widget=forms.TextInput(attrs={'class': 'vURLField', 'placeholder': 'https://example.com'}),
        required=False
    )
    github = forms.URLField(
        widget=forms.TextInput(attrs={'class': 'vURLField', 'placeholder': 'https://github.com/PrathmeshSoni'}),
        required=False
    )
    quick_view = forms.URLField(
        widget=forms.TextInput(attrs={
            'class': 'vURLField', 'placeholder': 'https://private-app.prathmeshsoni.works/view/113'
        }),
        required=False
    )
    author = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'vURLField', 'placeholder': ''}),
        required=False
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    class Meta:
        model = ProjectModel
        exclude = ['user']


class ProjectLiveModelForm(forms.ModelForm):
    platform = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'vURLField', 'placeholder': 'Like Vercel, Pythonanywhere'}),
        required=False,
    )
    live = forms.URLField(
        widget=forms.TextInput(attrs={'class': 'vURLField', 'placeholder': 'https://example.com'}),
        required=False
    )
    github = forms.URLField(
        widget=forms.TextInput(attrs={'class': 'vURLField', 'placeholder': 'https://github.com/PrathmeshSoni'}),
        required=False
    )
    platform_url = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'vURLField', 'placeholder': 'https://vercel.com/Prathmesh-Soni'}),
        required=False
    )

    def __init__(self, *args, **kwargs):
        user = kwargs.pop('user', None)  # Get the logged-in user from the kwargs
        super().__init__(*args, **kwargs)
        if user:
            # Filter the project queryset to only include projects created by the logged-in user
            self.fields['project'].queryset = ProjectModel.objects.filter(user=user)

    class Meta:
        model = ProjectLiveModel
        fields = '__all__'


class CredentialsModelForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        user = kwargs.pop('user', None)  # Get the logged-in user from the kwargs
        super().__init__(*args, **kwargs)
        if user:
            # Filter the project queryset to only include projects created by the logged-in user
            self.fields['project_live'].queryset = ProjectModel.objects.filter(user=user)

    class Meta:
        model = CredentialsModel
        fields = '__all__'
