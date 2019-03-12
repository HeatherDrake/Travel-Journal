from django.shortcuts import render

from django.views.generic import TemplateView


class AccountIndex(TemplateView):
    template_name = 'travel/yourdiaries.html'
