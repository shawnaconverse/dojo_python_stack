# Generated by Django 2.2.4 on 2021-03-19 18:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='catgories',
            new_name='categories',
        ),
    ]
