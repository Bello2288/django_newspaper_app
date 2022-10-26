# Generated by Django 4.1.2 on 2022-10-25 21:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0004_alter_article_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='is_highlighted',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='article',
            name='status',
            field=models.CharField(choices=[('Draft', 'Draft'), ('Submitted', 'Submitted'), ('Published', 'Published'), ('Rejected', 'Rejected')], default='Draft', max_length=10),
        ),
    ]
