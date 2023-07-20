
#  http post http://127.0.0.1:8000/api/token/ username=admin password=1234

# http post http://127.0.0.1:8000/api/vendors/ "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg5ODczMjM2LCJpYXQiOjE2ODk4NzI5MzYsImp0aSI6IjQ2YjMxYmE0YWVlMzRhNGZhYjZlMGJiMDZmMjRjOWU1IiwidXNlcl9pZCI6MX0.TbE-C7T_bxFQOwrns36_i0rsYbB1roVuaYZVLE2cSy4"

# http  http://127.0.0.1:8000/api/token/refresh/ refresh=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4OTk1OTMzNiwiaWF0IjoxNjg5ODcyOTM2LCJqdGkiOiIyOWFjM2FlYjEwODE0ZjA3YThlMGZjMDFlMGZkMTBjZCIsInVzZXJfaWQiOjF9.ID0QA2dAPWVTUmIqI7miRotAOo9LFdmUwgsE-mQnfFA


from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt import views as jwt_views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('main.urls')),
    path('api-auth/',include('rest_framework.urls')),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh')
]
