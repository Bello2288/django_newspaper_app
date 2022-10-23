from django.db import models
from django.conf import settings


class Article(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    title = models.CharField(max_length=255)
    body = models.TextField()
    image = models.ImageField(upload_to="articles", null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=False)

    ALL = "All"
    FOOTBALL = "Football"
    HOCKEY = "Hockey"
    BASEBALL = "Baseball"
    BASKETBALL = "Basketball"
    DRAFTS = "Drafts"
    SUBMITTED = "Submitted"
    PUBLISHED = "Published"
    REJECTED = "Rejected"

    TABS = [
        (ALL, "All"),
        (FOOTBALL, "Football"),
        (HOCKEY, "Hockey"),
        (BASEBALL, "Baseball"),
        (BASKETBALL, "Basketball"),
    ]
    STATUS = [
        (DRAFTS, "Drafts"),
        (SUBMITTED, "Submitted"),
        (PUBLISHED, "Published"),
        (REJECTED, "Rejected"),
    ]

    catagory = models.CharField(
        max_length=10, 
        choices=TABS, 
        default=ALL,
    )


    def __str__(self):
        return self.title