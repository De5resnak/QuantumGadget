from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Category(models.Model):
    name = models.CharField(max_length=255)
    quantity = models.IntegerField()

    def __str__(self):
        return self.name

class Product(models.Model):
    description = models.JSONField()
    guarantee = models.IntegerField()
    images = models.ImageField(upload_to='product_images/')
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discounted_price = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=True)
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)

    def __str__(self):
        return self.description.get('name', 'No Name')


class Review(models.Model):
    grade = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    title = models.CharField(max_length=255)
    text = models.TextField()
    product = models.ForeignKey(Product, related_name='reviews', on_delete=models.CASCADE)

    def __str__(self):
        return f"Review for {self.product.description.get('name', 'No Name')}: {self.title}"