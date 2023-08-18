from django.urls import path
from . import views
from rest_framework import routers

router=routers.DefaultRouter()

router.register('address',views.CustomerAddressViewSet)
router.register('productrating',views.ProductRatingViewSet)


urlpatterns = [
    #vendors
    path('vendors/',views.VendorList.as_view() ),
    path('vendor/<int:pk>/',views.VendorDetails.as_view() ),
    # products
    path('products/',views.ProductList.as_view() ),
    path('products/<str:tag>',views.TagProductList.as_view() ),
    path('product/<int:pk>/',views.ProductDetails.as_view() ),
    path('related-product/<int:pk>/',views.RelatedProductList.as_view() ),
    #categories
    path('categories/',views.CategoryList.as_view() ),
    path('category/<int:pk>/',views.CategoryDetails.as_view() ),
    #customer
    path('customers/',views.CustomerList.as_view() ),
    path('customer/<int:pk>/',views.CustomerDetails.as_view() ),
    # order
    path('orders/',views.OrderList.as_view() ),
    path('order-detail/<int:pk>/',views.OrderDetails.as_view() ),


]

urlpatterns+=router.urls