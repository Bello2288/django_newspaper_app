# Generated by Django 4.1.2 on 2022-10-28 03:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0007_remove_article_catagory_article_category_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='category',
            field=models.CharField(choices=[('FB', 'Football'), ('HK', 'Hockey'), ('BS', 'Baseball'), ('BK', 'Basketball')], default='FB', max_length=2),
        ),
        migrations.AlterField(
            model_name='article',
            name='status',
            field=models.CharField(choices=[('DRA', 'Draft'), ('PUB', 'Published'), ('SUB', 'Submitted'), ('REJ', 'Rejected'), ('ARC', 'Archived')], default='DRA', max_length=3),
        ),
    ]
