from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class DiaryUser (models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    date = models.DateField(auto_now=True)
    image = models.ImageField(blank=True, upload_to='')
    blog = models.TextField(null=True, max_length=700)

