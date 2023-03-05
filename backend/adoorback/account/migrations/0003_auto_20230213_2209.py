# Generated by Django 3.2.13 on 2023-02-13 13:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_auto_20221203_2239'),
    ]

    operations = [
        migrations.RemoveConstraint(
            model_name='friendrequest',
            name='unique_friend_request',
        ),
        migrations.AddConstraint(
            model_name='friendrequest',
            constraint=models.UniqueConstraint(condition=models.Q(('deleted__isnull', True)), fields=('requester', 'requestee'), name='unique_friend_request'),
        ),
    ]
