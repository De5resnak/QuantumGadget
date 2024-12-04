from django.db import models
from Catalog.models import Product  # Подключение модели Product
from django.db.models.signals import post_save
from django.dispatch import receiver




class Order(models.Model):
    DELIVERY_METHOD_CHOICES = [
        ('pickup', 'Самовывоз'),
        ('delivery', 'Доставка'),
    ]

    PAYMENT_METHOD_CHOICES = [
        ('sbp', 'СБП'),
        ('sberpay', 'СберPay'),
        ('card', 'Картой'),
        ('on_receipt', 'При получении'),
    ]

    # Поля, связанные с пользователем
    customer_name = models.CharField(max_length=100, verbose_name="Имя клиента")
    email = models.EmailField(verbose_name="Email клиента")
    phone_number = models.CharField(max_length=20, verbose_name="Номер телефона клиента")

    # Поля, связанные с оформлением заказа
    delivery_method = models.CharField(
        max_length=10, choices=DELIVERY_METHOD_CHOICES, verbose_name="Способ получения"
    )
    delivery_address = models.CharField(
        max_length=255, blank=True, null=True, verbose_name="Адрес доставки"
    )
    payment_method = models.CharField(
        max_length=20, choices=PAYMENT_METHOD_CHOICES, verbose_name="Способ оплаты"
    )
    confirmation_number = models.CharField(max_length=20, unique=True, blank=True)

    # Поля, связанные с заказом
    items = models.ManyToManyField(Product, through='OrderItem', related_name='orders')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания заказа")


    def __str__(self):
        return f"Order {self.id} - {self.confirmation_number}"


@receiver(post_save, sender=Order)
def set_confirmation_number(sender, instance, created, **kwargs):
    if created and not instance.confirmation_number:
        instance.confirmation_number = f"E-{instance.id}"
        instance.save()  # Сохраняем объект после установки confirmation_number


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.quantity} x {self.product.name} (Order {self.order.id})"

