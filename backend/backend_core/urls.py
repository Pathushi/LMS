from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    # Auth endpoints
    path('api/auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Library API endpoints
    path('api/', include('library.urls')),
    
    # <-- ADD THIS LINE to enable the browser login button -->
    path('api-auth/', include('rest_framework.urls')), 
]