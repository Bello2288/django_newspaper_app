# Generated by Django 4.1.2 on 2022-10-28 02:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0006_alter_article_status'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='catagory',
        ),
        migrations.AddField(
            model_name='article',
            name='category',
            field=models.CharField(choices=[('GR', 'General'), ('SP', 'Sports'), ('GM', 'Gaming'), ('FD', 'Food')], default='GR', max_length=2),
        ),
        migrations.AlterField(
            model_name='article',
            name='status',
            field=models.CharField(choices=[('DR', 'Draft'), ('PB', 'Published'), ('SM', 'Submitted'), ('RJ', 'Rejected'), ('AR', 'Archived')], default='DR', max_length=2),
        ),
    ]