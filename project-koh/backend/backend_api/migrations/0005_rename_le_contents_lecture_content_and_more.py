# Generated by Django 4.1.3 on 2022-11-24 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("backend_api", "0004_user_is_public"),
    ]

    operations = [
        migrations.RenameField(
            model_name="lecture",
            old_name="le_contents",
            new_name="content",
        ),
        migrations.RemoveField(
            model_name="lecture",
            name="subhead",
        ),
        migrations.AddField(
            model_name="lecture",
            name="headcount",
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name="lecture",
            name="thumbnail",
            field=models.ImageField(blank=True, upload_to=""),
        ),
        migrations.AlterField(
            model_name="lecture",
            name="deleted_at",
            field=models.DateTimeField(blank=True),
        ),
        migrations.AlterField(
            model_name="lecture",
            name="updated_at",
            field=models.DateTimeField(blank=True),
        ),
    ]
