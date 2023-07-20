from django.db import models
from django.contrib.auth.models import User
# Vendor Models.

class Vendor(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    address=models.TextField(null=True)
    def __str__(self):
        return self.user.username
#Product Category
class ProductCategory(models.Model):
    title=models.CharField(max_length=220)
    detail=models.TextField(null=True)

    def __str__(self):
        return self.title

#Product

class Product(models.Model):
    category=models.ForeignKey(ProductCategory,on_delete=models.SET_NULL,null=True)
    vendor=models.ForeignKey(Vendor,on_delete=models.SET_NULL,null=True)
    title=models.CharField(max_length=220)
    detail=models.TextField(null=True)
    price=models.FloatField()

    def __str__(self):
        return self.title


#Customer Model
class Customer(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    mobile=models.PositiveBigIntegerField()
    def __str__(self):
        return self.user.username


#Order Model

class Order(models.Model):
    customer=models.ForeignKey(Customer,on_delete=models.SET_NULL,null=True)
    order_time=models.DateTimeField(auto_now_add=True)

#Order Items Model
    
class OrderItems(models.Model):
    order=models.ForeignKey(Order,on_delete=models.CASCADE)
    product=models.ForeignKey(Product,on_delete=models.CASCADE)
    def __str__(self):
        return self.product.title






    