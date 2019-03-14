from django.urls import path
# from api.views import
#


app_name="api"


urlpatterns = [

  path('images/', ClientImageViewSet.as_view({'get': 'list', 'post': 'create'})),


]