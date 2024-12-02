from tkinter.font import names

from django.urls import path
from .views import ProductListView, TrendingProductListView, TVProductListView, WashingMachineProductListView, \
    CleaningEquipmentProductListView, DishwasherProductListView, ProductDetailView

urlpatterns = [
    path('all/', ProductListView.as_view(), name='product-list'),
    path('trending/', TrendingProductListView.as_view(), name='trending-product-list'),
    path('tv/', TVProductListView.as_view(), name='tv-product-list'),
    path('washing-machines/', WashingMachineProductListView.as_view(), name='washing-machine-product-list'),
    path('cleaning-equipment/', CleaningEquipmentProductListView.as_view(), name='cleaning-equipment-product-list'),
    path('dishwashers/', DishwasherProductListView.as_view(), name='dishwasher-product-list'),
    path('<int:pk>/', ProductDetailView.as_view(), name='product-detail'),

]