from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class Blog(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    bitly = models.CharField( max_length=255)


class Post(models.Model):
    blog = models.ForeignKey(Blog, related_name='posts', on_delete=models.CASCADE)
    date = models.DateField(auto_now=True)
    image = models.ImageField(blank=True, upload_to='media/')
    caption = models.TextField(null=True, max_length=700)

