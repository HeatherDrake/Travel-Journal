from django.shortcuts import render

from django.views.generic import DetailView
from .models import Blog

class PublicTravelSite(DetailView):
    template_name = 'travel/public.html'
    model = Blog