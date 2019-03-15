from django.urls import path
from api.views import DiaryView
#


app_name = "api"


urlpatterns = [

  path('images/', DiaryView.as_view({'get': 'list', 'post': 'create'})),


]