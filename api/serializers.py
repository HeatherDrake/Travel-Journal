from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from travel.models import Post


class DiarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'blog', 'date', 'image', 'caption')
        depth = 1
