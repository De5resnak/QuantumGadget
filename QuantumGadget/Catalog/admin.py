from django.contrib import admin

from .models import Product, Category, Review

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('description', 'price', 'discounted_price', 'quantity', 'category')
    search_fields = ('description',)
    list_filter = ('category',)
    ordering = ('-price',)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'quantity')
    search_fields = ('name',)

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('product', 'grade', 'title')
    search_fields = ('product__description', 'title')
    list_filter = ('grade',)