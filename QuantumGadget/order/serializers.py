from rest_framework import serializers
from .models import Order, OrderItem
from Catalog.models import Product

class OrderItemSerializer(serializers.ModelSerializer):
    product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(), source='product'
    )

    class Meta:
        model = OrderItem
        fields = ['product_id', 'quantity']



class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = [
            'customer_name', 'email', 'phone_number',
            'delivery_method', 'delivery_address',
            'payment_method', 'items'
        ]

    def create(self, validated_data):
        items_data = validated_data.pop('items')
        order = super().create(validated_data)   # Используем базовый метод создания
        for item_data in items_data:
            OrderItem.objects.create(order=order, **item_data)
        return order
