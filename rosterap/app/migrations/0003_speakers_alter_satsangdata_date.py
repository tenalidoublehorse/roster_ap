# Generated by Django 4.1 on 2024-02-07 11:12

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_satsangdata_delete_statedata'),
    ]

    operations = [
        migrations.CreateModel(
            name='Speakers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
                ('Phonenumber', models.CharField(max_length=10)),
                ('Place', models.CharField(max_length=100)),
                ('a_Date', models.DateTimeField(default=datetime.datetime(2024, 2, 7, 11, 12, 22, 727579))),
            ],
        ),
        migrations.AlterField(
            model_name='satsangdata',
            name='Date',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 7, 11, 12, 22, 727579)),
        ),
    ]
