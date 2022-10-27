from email.policy import default
# from unittest.util import _MAX_LENGTH
from django.db import models
from django.conf import settings


class Article(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    title = models.CharField(max_length=225)
    body = models.TextField()
    image = models.ImageField(upload_to='articles/', null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    is_highlighted = models.BooleanField(default=False)
    # phase = models.CharField(max_length=3, choices=PHASE_CHOICES, default=DRAFT)

    ALL = "All"
    FOOTBALL = "Football"
    HOCKEY = "Hockey"
    BASEBALL = "Baseball"
    BASKETBALL = "Basketball"
    DRAFT = "Draft"
    SUBMITTED = "Submitted"
    PUBLISHED = "Published"
    REJECTED = "Rejected"
    ARCHIVED = "Archived"

    TABS = [
        (ALL, "All"),
        (FOOTBALL, "Football"),
        (HOCKEY, "Hockey"),
        (BASEBALL, "Baseball"),
        (BASKETBALL, "Basketball"),
    ]
    STATUS = [
        (DRAFT, "Draft"),
        (SUBMITTED, "Submitted"),
        (PUBLISHED, "Published"),
        (REJECTED, "Rejected"),
        (ARCHIVED, "Archived"),
    ]

    catagory = models.CharField(
        max_length=10, 
        choices=TABS, 
        default=ALL,
    )
    status = models.CharField(
        max_length=10,
        choices=STATUS,
        default=DRAFT,
    )
    
    def __str__(self):
        return self.title