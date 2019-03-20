from django.shortcuts import render

# Create your views here.


from rest_framework import viewsets
from .serializers import DiarySerializer
from travel.models import Blog, Post
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
            blog = Blog.objects.get(user=self.request.user)
            return Post.objects.filter(blog=blog)

        def perform_create(self, serializer):
            blog = Blog.objects.get(user=self.request.user)
            serializer.save(blog=blog)
