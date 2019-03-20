from django.urls import path
from . import views
from travel.views import PublicTravelSite

urlpatterns = [
    path('blog/<int:pk>/', views.PublicTravelSite.as_view(), name="travelpublic_site")
]