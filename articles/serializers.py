from rest_framework import serializers
from . import models
from dataclasses import fields


class ArticleSerializer(serializers.ModelSerializer):
    author_name = serializers.ReadOnlyField(source='author.username')
    
    class Meta:
        model = models.Article
        fields = '__all__'