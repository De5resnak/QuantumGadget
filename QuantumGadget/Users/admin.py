from django.contrib import admin
from .models import UserProfile

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'first_name', 'second_name', 'phone_number', 'address')
    search_fields = ('first_name', 'second_name', 'user__username')
