from django.contrib import admin
from .models import Order, OrderItem

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1  # Показывать одну пустую строку для добавления нового элемента
    readonly_fields = ('product', 'quantity')  # Если нужно, сделайте поля только для чтения

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'customer_name',
        'email',
        'phone_number',
        'delivery_method',
        'payment_method',
        'confirmation_number',
        'created_at'
    )
    list_filter = ('delivery_method', 'payment_method', 'created_at')
    search_fields = ('customer_name', 'email', 'phone_number', 'confirmation_number')
    readonly_fields = ('confirmation_number', 'created_at')
    inlines = [OrderItemInline]  # Подключаем встраиваемую модель OrderItem

@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'product', 'quantity')
    list_filter = ('order',)
    search_fields = ('order__confirmation_number', 'product__name')
