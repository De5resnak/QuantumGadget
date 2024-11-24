from django.contrib import admin
from .models import Product, ProductImage

# Настройка отображения связанных изображений в админке
class ProductImageInline(admin.TabularInline):  # Или admin.StackedInline для вертикального отображения
    model = ProductImage
    extra = 1  # Количество пустых полей для добавления новых изображений

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'brand', 'type', 'price', 'trending', 'in_stock')
    list_filter = ('type', 'brand', 'trending', 'in_stock')
    search_fields = ('name', 'brand', 'type')
    inlines = [ProductImageInline]  # Добавление инлайнов для изображений
    fieldsets = (
        ("Общие сведения", {
            'fields': ('type', 'trending', 'name', 'brand', 'short_description', 'price', 'in_stock', 'material', 'weight', 'full_description', 'size', 'warranty_period', 'power')
        }),
        ("Характеристики стиральных машин", {
            'fields': ('max_spin_speed', 'number_of_programs', 'voltage_protection'),
            'classes': ('collapse',),  # Скрываем секцию, можно раскрыть при необходимости
        }),
        ("Характеристики телевизоров", {
            'fields': ('energy_efficiency_class', 'screen_resolution', 'smart_tv_support', 'refresh_rate'),
            'classes': ('collapse',),
        }),
        ("Характеристики техники для уборки", {
            'fields': ('dustbin_capacity', 'dustbin_type', 'suction_power', 'overheat_protection'),
            'classes': ('collapse',),
        }),
        ("Характеристики посудомоечных машин", {
            'fields': ('water_consumption_per_cycle', 'leak_protection', 'max_water_temperature'),
            'classes': ('collapse',),
        }),
    )

@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ('product', 'image')
