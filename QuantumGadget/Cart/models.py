from django.db import models
from Users.models import UserProfile
from Catalog.models import Product

class Cart(models.Model):
    user = models.OneToOneField(UserProfile, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product)

    def __str__(self):
        return f"Cart of {self.user}"
