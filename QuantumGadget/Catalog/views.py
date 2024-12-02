from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Product
from .serializers import ProductSerializer
from rest_framework.generics import RetrieveAPIView



class ProductListView(APIView):
    """
    Представление для получения всех продуктов.
    """

    def get(self, request):
        # Получаем все продукты
        products = Product.objects.all()

        # Сериализуем продукты
        serializer = ProductSerializer(products, many=True, context={'request': request})

        # Возвращаем ответ с сериализованными данными
        return Response(serializer.data, status=status.HTTP_200_OK)


class TrendingProductListView(APIView):
    """
    Представление для получения всех популярных товаров.
    """

    def get(self, request):
        # Фильтруем продукты, где поле 'trending' равно True
        trending_products = Product.objects.filter(trending=True)

        # Сериализуем отфильтрованные продукты
        serializer = ProductSerializer(trending_products, many=True, context={'request': request})

        # Возвращаем ответ с сериализованными данными
        return Response(serializer.data, status=status.HTTP_200_OK)


class TVProductListView(APIView):
    """
    Представление для получения всех товаров категории 'Телевизор'.
    """

    def get(self, request):
        # Фильтруем продукты, где поле 'type' равно 'tv'
        tv_products = Product.objects.filter(type='tv')

        # Сериализуем отфильтрованные телевизоры
        serializer = ProductSerializer(tv_products, many=True, context={'request': request})

        # Возвращаем ответ с сериализованными данными
        return Response(serializer.data, status=status.HTTP_200_OK)


class WashingMachineProductListView(APIView):
    """
    Представление для получения всех товаров категории 'Стиральные машины'.
    """

    def get(self, request):
        # Фильтруем продукты, где поле 'type' равно 'washing_machine'
        washing_machine_products = Product.objects.filter(type='washing_machine')

        # Сериализуем отфильтрованные стиральные машины
        serializer = ProductSerializer(washing_machine_products, many=True, context={'request': request})

        # Возвращаем ответ с сериализованными данными
        return Response(serializer.data, status=status.HTTP_200_OK)


class CleaningEquipmentProductListView(APIView):
    """
    Представление для получения всех товаров категории 'Техника для уборки'.
    """

    def get(self, request):
        # Фильтруем продукты, где поле 'type' равно 'cleaning_equipment'
        cleaning_equipment_products = Product.objects.filter(type='cleaning_equipment')

        # Сериализуем отфильтрованные товары
        serializer = ProductSerializer(cleaning_equipment_products, many=True, context={'request': request})

        # Возвращаем ответ с сериализованными данными
        return Response(serializer.data, status=status.HTTP_200_OK)


class DishwasherProductListView(APIView):
    """
    Представление для получения всех товаров категории 'Посудомоечная машина'.
    """

    def get(self, request):
        # Фильтруем продукты, где поле 'type' равно 'dishwasher'
        dishwasher_products = Product.objects.filter(type='dishwasher')

        # Сериализуем отфильтрованные товары
        serializer = ProductSerializer(dishwasher_products, many=True, context={'request': request})

        # Возвращаем ответ с сериализованными данными
        return Response(serializer.data, status=status.HTTP_200_OK)

class ProductDetailView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
