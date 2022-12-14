# Generated by Django 4.1.2 on 2022-10-25 03:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0003_remove_article_is_published_article_created_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='status',
            field=models.CharField(choices=[('Drafts', 'Draft'), ('Submitted', 'Submitted'), ('Published', 'Published'), ('Rejected', 'Rejected')], default='Drafts', max_length=10),
        ),
    ]
