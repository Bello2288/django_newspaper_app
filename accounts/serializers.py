from dataclasses import field
from rest_framework import serializers

from . import models


class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.name')

    class Meta:
        model = models.Profile
        fields = '__all__'


class TokenSerializer(serializers.ModelSerializer):
    pass