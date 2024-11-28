from rest_framework import serializers
from .models import Product, ProductImage


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['image']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        request = self.context.get('request')
        if request and instance.image:
            # Генерация полного URL изображения
            representation['image'] = request.build_absolute_uri(instance.image.url)
        return representation


class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = [
            'id', 'type', 'trending', 'name', 'brand', 'short_description', 'price',
            'in_stock', 'material', 'weight', 'full_description', 'power', 'size',
            'diagonal', 'warranty_period', 'max_spin_speed', 'number_of_programs',
            'voltage_protection', 'energy_efficiency_class', 'screen_resolution',
            'smart_tv_support', 'refresh_rate', 'dustbin_capacity', 'dustbin_type',
            'suction_power', 'overheat_protection', 'water_consumption_per_cycle',
            'leak_protection', 'max_water_temperature', 'images'
        ]

    def to_representation(self, instance):
        """
        This method is used to adjust how we serialize the product fields depending on the type of product.
        """
        representation = super().to_representation(instance)

        # Filter out fields that are not relevant based on the product type
        if instance.type == 'washing_machine':
            # Show only washing machine specific fields
            washing_machine_fields = [
                'max_spin_speed', 'number_of_programs', 'voltage_protection'
            ]
            for field in washing_machine_fields:
                if representation.get(field) is None:
                    representation.pop(field, None)

        elif instance.type == 'tv':
            # Show only TV specific fields
            tv_fields = [
                'energy_efficiency_class', 'screen_resolution', 'smart_tv_support',
                'refresh_rate'
            ]
            for field in tv_fields:
                if representation.get(field) is None:
                    representation.pop(field, None)

        elif instance.type == 'cleaning_equipment':
            # Show only cleaning equipment specific fields
            cleaning_equipment_fields = [
                'dustbin_capacity', 'dustbin_type', 'suction_power', 'overheat_protection'
            ]
            for field in cleaning_equipment_fields:
                if representation.get(field) is None:
                    representation.pop(field, None)

        elif instance.type == 'dishwasher':
            # Show only dishwasher specific fields
            dishwasher_fields = [
                'water_consumption_per_cycle', 'leak_protection', 'max_water_temperature'
            ]
            for field in dishwasher_fields:
                if representation.get(field) is None:
                    representation.pop(field, None)

        return representation
