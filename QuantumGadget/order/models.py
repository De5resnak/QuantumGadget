from django.db import models
from Catalog.models import Product  # Подключение модели Product


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

    def save(self, *args, **kwargs):
        # Генерация уникального номера подтверждения формата "E-id"
        if not self.confirmation_number:
            super().save(*args, **kwargs)  # Сохранение объекта для получения id
            self.confirmation_number = f"E-{self.id}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Order {self.id} - {self.confirmation_number}"


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.quantity} x {self.product.name} (Order {self.order.id})"

