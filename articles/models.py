from unittest.util import _MAX_LENGTH
from django.db import models
from django.conf import settings



class Article(models.Model):
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    title = models.CharField(max_length=225)
    body = models.TextField()
    image = models.ImageField(upload_to='articles/', null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    is_highlighted = models.BooleanField(default=False)
   

    FOOTBALL = 'FB'
    HOCKEY = 'HK'
    BASEBALL = 'BS'
    BASKETBALL = 'BK'
    CATEGORY_CHOICES = [
        (FOOTBALL, 'Football'),
        (HOCKEY, 'Hockey'),
        (BASEBALL, 'Baseball'),
        (BASKETBALL, 'Basketball'),
    ]
    category = models.CharField(
        max_length=2,
        choices=CATEGORY_CHOICES,
        default=FOOTBALL,
    )

    DRAFT = 'DRA'
    PUBLISHED = 'PUB'
    SUBMITTED = 'SUB'
    REJECTED = 'REJ'
    ARCHIVED = 'ARC'
    STATUS_OF_ARTICLE = [
        (DRAFT, 'Draft'),
        (PUBLISHED, 'Published'),
        (SUBMITTED, 'Submitted'),
        (REJECTED, 'Rejected'),
        (ARCHIVED, 'Archived'),
    ]
    status = models.CharField(
        max_length=3,
        choices=STATUS_OF_ARTICLE,
        default=DRAFT,
    )

    def __str__(self):
        return self.title