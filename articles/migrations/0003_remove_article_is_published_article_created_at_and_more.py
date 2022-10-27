# Generated by Django 4.1.2 on 2022-10-25 03:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0002_remove_article_created_at_remove_article_updated_at_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='is_published',
        ),
        migrations.AddField(
            model_name='article',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='article',
            name='status',
            field=models.CharField(choices=[('Drafts', 'Drafts'), ('Submitted', 'Submitted'), ('Published', 'Published'), ('Rejected', 'Rejected')], default='Drafts', max_length=10),
        ),
        migrations.AddField(
            model_name='article',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AlterField(
            model_name='article',
            name='catagory',
            field=models.CharField(choices=[('All', 'All'), ('Football', 'Football'), ('Hockey', 'Hockey'), ('Baseball', 'Baseball'), ('Basketball', 'Basketball')], default='All', max_length=10),
        ),
        migrations.AlterField(
            model_name='article',
            name='image',
            field=models.ImageField(null=True, upload_to='articles/'),
        ),
        migrations.AlterField(
            model_name='article',
            name='title',
            field=models.CharField(max_length=225),
        ),
    ]