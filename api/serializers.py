from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from travel.models import DiaryUser


class DiarySerializer(serializers.ModelSerializer):
    class Meta:
        model = DiaryUser
        fields = '__all__'
        depth = 1
