from django.contrib.auth.views import LoginView, LogoutView
from . import views
from django.urls import path, include
from django.urls import path
from . import views
from accounts.views import AccountIndex

app_name = "users"
urlpatterns = [
    path('login/', LoginView.as_view(template_name='registration/login.html'), name="login"),
    path('logout/', LogoutView.as_view(template_name='registration/logout.html'), name='logout'),
    path('signup/', views.SignUp.as_view(), name='signup'),
    path('', views.AccountIndex.as_view(), name="account")
]