from django.db import models
from django.conf import settings


class Article(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    title = models.CharField(max_length=255)
    body = models.TextField()
    image = models.ImageField(upload_to="articles", null=True)
    is_published = models.BooleanField(default=False)

    ALL = "All"
    FOOTBALL = "Football"
    HOCKEY = "Hockey"
    BASEBALL = "Baseball"
    BASKETBALL = "Basketball"
    TABS = [
        (ALL, "All"),
        (FOOTBALL, "Football"),
        (HOCKEY, "Hockey"),
        (BASEBALL, "Baseball"),
        (BASKETBALL, "Basketball"),
    ]
    catagory = models.CharField(
        max_length=10, 
        choices=TABS, 
        default=ALL,
    )


    def __str__(self):
        return self.title