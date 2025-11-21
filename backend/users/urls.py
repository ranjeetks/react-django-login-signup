from django.urls import path
from .views import RegisterView, MeView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import get_user_profile

urlpatterns = [
    path("register/", RegisterView.as_view(), name="auth-register"),
    # path('me/', MeView.as_view(), name='auth-me'),
    path("token/", TokenObtainPairView.as_view(), name="token-obtain"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
    path("me/", get_user_profile),  # /api/auth/me/
]
