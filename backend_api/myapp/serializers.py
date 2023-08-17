from rest_framework import serializers
from . import models
class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Vendor
        fields=['id','user','address']

    def __init__(self,*args,**kwargs):
        super(VendorSerializer,self).__init__(*args,**kwargs)
        # request=self.context.get('request')
        # self.Meta.depth=1



class VendorDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Vendor
        fields=['id','user','address']

    def __init__(self,*args,**kwargs):
        super(VendorDetailsSerializer,self).__init__(*args,**kwargs)
        
        # self.Meta.depth=1  


class ProductListSerializer(serializers.ModelSerializer):
    product_ratings=serializers.StringRelatedField(many=True,read_only=True)
    
    class Meta:
        model=models.Product
        fields=['id','category','vendor','title','tag_list','detail','price','product_ratings','image']

    def __init__(self,*args,**kwargs):
        super(ProductListSerializer,self).__init__(*args,**kwargs)
        
        # self.Meta.depth=1  

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.ProductImage
        fields=['id','product','image']

class ProductDetailsSerializer(serializers.ModelSerializer):
    product_ratings=serializers.StringRelatedField(many=True,read_only=True)
    product_imgs=ProductImageSerializer(many=True,read_only=True)
    class Meta:
        model=models.Product
        fields=['id','category','vendor','title','detail','price','product_ratings','product_imgs','tag_list']

    def __init__(self,*args,**kwargs):
        super(ProductDetailsSerializer,self).__init__(*args,**kwargs)
        
        self.Meta.depth=1  


#Customer


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Customer
        fields=['id','user','mobile']

    def __init__(self,*args,**kwargs):
        super(CustomerSerializer,self).__init__(*args,**kwargs)
        # request=self.context.get('request')
        # self.Meta.depth=1



class CustomerDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Customer
        fields=['id','user','mobile']

    def __init__(self,*args,**kwargs):
        super(CustomerDetailsSerializer,self).__init__(*args,**kwargs)



class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Order
        fields=['id','customer',]

    def __init__(self,*args,**kwargs):
        super(OrderSerializer,self).__init__(*args,**kwargs)
        self.Meta.depth=1


class OrderDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.OrderItems
        fields=['id','order','product']

    def __init__(self,*args,**kwargs):
        super(OrderDetailsSerializer,self).__init__(*args,**kwargs)
        self.Meta.depth=1
        

class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.CustomerAddress
        fields=['id','customer','address','default_address']

    def __init__(self,*args,**kwargs):
        super(CustomerAddressSerializer,self).__init__(*args,**kwargs)
        self.Meta.depth=1


class ProductRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.ProductReting
        fields=['id','customer','product','rating','reviews']

    def __init__(self,*args,**kwargs):
        super(ProductRatingSerializer,self).__init__(*args,**kwargs)
        self.Meta.depth=1
        


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.ProductCategory
        fields=['id','title','detail']

    def __init__(self,*args,**kwargs):
        super(CategorySerializer,self).__init__(*args,**kwargs)
       
        # self.Meta.depth=1



class CategoryDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.ProductCategory
        fields=['id','title','detail']

    def __init__(self,*args,**kwargs):
        super(CategoryDetailsSerializer,self).__init__(*args,**kwargs)
        
        # self.Meta.depth=1  