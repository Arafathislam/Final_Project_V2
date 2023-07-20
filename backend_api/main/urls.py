from django.urls import path
from . import views
urlpatterns = [
    path('vendors/',views.VendorList.as_view() ),
    path('vendor/<int:pk>/',views.VendorDetails.as_view() ),
    path('products/',views.ProductList.as_view() ),
    path('product/<int:pk>/',views.ProductDetails.as_view() ),
    path('customers/',views.CustomerList.as_view() ),
    path('customer/<int:pk>/',views.CustomerDetails.as_view() ),
]