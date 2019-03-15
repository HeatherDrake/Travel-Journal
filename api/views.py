from django.shortcuts import render

# Create your views here.


from rest_framework import viewsets
from .serializers import DiarySerializer
from travel.models import DiaryUser
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User


class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening


class DiaryView(viewsets.ModelViewSet):
        authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)
        serializer_class = DiarySerializer

        def get_queryset(self):
            return DiaryUser.objects.filter(user=self.request.user)

        def perform_create(self, serializer):
            serializer.save(user=self.request.user)
