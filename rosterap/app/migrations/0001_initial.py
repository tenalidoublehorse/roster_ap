# Generated by Django 4.1 on 2024-02-06 07:52

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Statedata',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
                ('CountySel', models.CharField(max_length=50)),
                ('StateSel', models.CharField(max_length=50)),
                ('Date', models.DateTimeField(default=datetime.datetime(2024, 2, 6, 13, 22, 15, 387558))),
            ],
        ),
    ]
