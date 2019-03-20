from django.urls import path
from . import views


from travelviews import PublicTravelSite

urlpatterns = [
    path('blog/<int:pk>/', views.PublicTravelSite.as_view(), name="TravelPublicSite")
]