# Generated by Django 4.2.3 on 2023-07-22 08:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_customeraddress_default_address'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductReting',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField()),
                ('reviews', models.TextField()),
                ('add_Time', models.DateTimeField(auto_now_add=True)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='rating_customer', to='main.customer')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product_ratings', to='main.product')),
            ],
        ),
    ]
