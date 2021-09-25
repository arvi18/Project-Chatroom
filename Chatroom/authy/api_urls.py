from django import urls
from django.urls import path
import knox
from authy.api import SignupAPI, LoginAPI, UserAPI
from knox import views as knox_views

urlpatterns=[
    path('authy/signup', SignupAPI, name='api-authy-signup'),
    path('authy/login', LoginAPI.as_view(), name='knox_login'),
    path('authy/whoami', UserAPI, name='api-who-am-i'),
    path('authy/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('authy/logoutall', knox_views.LogoutAllView.as_view(), name='knox_logout_all'),
]