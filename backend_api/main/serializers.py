from rest_framework import serializers
from . import models
class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Vendor
        fields=['user','address']

    def __init__(self,*args,**kwargs):
        super(VendorSerializer,self).__init__(*args,**kwargs)
        # request=self.context.get('request')
        self.Meta.depth=1



class VendorDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Vendor
        fields=['id','user','address']

    def __init__(self,*args,**kwargs):
        super(VendorDetailsSerializer,self).__init__(*args,**kwargs)
        
        self.Meta.depth=1  


class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Product
        fields=['id','category','vendor','title','detail','price']

    def __init__(self,*args,**kwargs):
        super(ProductListSerializer,self).__init__(*args,**kwargs)
        
        self.Meta.depth=1  


class ProductDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Product
        fields=['id','category','vendor','title','detail','price']

    def __init__(self,*args,**kwargs):
        super(ProductDetailsSerializer,self).__init__(*args,**kwargs)
        
        self.Meta.depth=1  