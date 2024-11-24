from django.db import models

class Product(models.Model):
    # Общие поля
    TYPE_CHOICES = [
        ('washing_machine', 'Стиральная машина'),
        ('tv', 'Телевизор'),
        ('cleaning_equipment', 'Техника для уборки'),
        ('dishwasher', 'Посудомоечная машина'),
    ]
    type = models.CharField(
        max_length=50,
        choices=TYPE_CHOICES,
        verbose_name="Тип техники"
    )
    trending = models.BooleanField(
        default=False,
        verbose_name="Популярное"
    )
    name = models.CharField(
        max_length=255,
        verbose_name="Название"
    )
    brand = models.CharField(
        max_length=255,
        verbose_name="Бренд"
    )
    short_description = models.TextField(
        verbose_name="Короткое описание"
    )
    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        verbose_name="Стоимость"
    )
    in_stock = models.BooleanField(
        default=True,
        verbose_name="В наличии на складе"
    )
    material = models.CharField(
        max_length=255,
        verbose_name="Материал"
    )
    weight = models.FloatField(
        verbose_name="Вес (кг)"
    )
    full_description = models.TextField(
        verbose_name="Полное описание"
    )
    power = models.CharField(
        max_length=50,
        verbose_name="Мощность"
    )
    size = models.CharField(
        max_length=50,
        verbose_name="Размер"
    )
    diagonal = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name="Диагональ"
    )
    warranty_period = models.CharField(
        max_length=50,
        verbose_name="Время гарантии"
    )

    # Поля для стиральной машины
    max_spin_speed = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name="Максимальная скорость отжима"
    )
    number_of_programs = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name="Количество программ"
    )
    voltage_protection = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name="Защита от скачков напряжения"
    )

    # Поля для телевизоров
    energy_efficiency_class = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name="Класс энергопотребления"
    )
    screen_resolution = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name="Разрешение экрана"
    )
    smart_tv_support = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name="Поддержка SmartTV"
    )
    refresh_rate = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name="Частота обновления экрана"
    )

    # Поля для техники для уборки
    dustbin_capacity = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name="Ёмкость пылесборника"
    )
    dustbin_type = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name="Тип пылесборника"
    )
    suction_power = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name="Мощность всасывания"
    )
    overheat_protection = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name="Защита от перегрева"
    )

    # Поля для посудомоечных машин
    water_consumption_per_cycle = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name="Расход воды за цикл"
    )
    leak_protection = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name="Защита от протечек"
    )
    max_water_temperature = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name="Максимальная температура воды"
    )

    def __str__(self):
        return f"{self.name} ({self.brand})"

class ProductImage(models.Model):
    product = models.ForeignKey(
        Product,
        related_name="images",
        on_delete=models.CASCADE,
        verbose_name="Продукт"
    )
    image = models.ImageField(upload_to="products/images/", verbose_name="Изображение")

    def __str__(self):
        return f"Image for {self.product.name}"