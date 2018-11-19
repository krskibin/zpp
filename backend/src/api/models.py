from django.db import models
import datetime

RATING_SCALE = (
    (1, 'Awful'),
    (2, 'Not good'),
    (3, 'Average'),
    (4, 'Awesome'),
    (5, 'Best Place EVER')
)

FEATURES_CHOICES = (
    ('WiFi', 'WiFi'),
    ('Toliet', 'Toliet'),
    ('Dogs allowed', 'Dogs allowed'),
    ('Climatization', 'Climatization'),
    ('Outdoor tabkle', 'Outdoor tabkle')
)


class Feature(models.Model):
    name = ""


class Wifi(Feature):
    name = "WiFi"


class DogsAllowed(Feature):
    name = "Dogs Allowed"


class Toilet(Feature):
    name = "Toilet"


class ChangingRoom(Feature):
    name = "Changing Room"


class Address(models.Model):
    country = models.CharField(max_length=40, default='Poland')
    city = models.CharField(max_length=40, default='Wroclaw')
    street = models.CharField(max_length=70)
    local_number = models.CharField(max_length=5)
    postcode = models.CharField(max_length=6)


class Restaurant(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, default='Restaurant name')
    longitude = models.DecimalField(max_digits=9, decimal_places=6)  # Position of restaurant on the map
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    address = models.ForeignKey(Address, on_delete=models.CASCADE, related_name='address')
    food_type = models.CharField(max_length=40, default='Kuchnia polska')
    avg_rating = models.DecimalField(max_digits=3, decimal_places=2)
    price_rating = models.DecimalField(max_digits=3, decimal_places=2)
    vegan_option = models.BooleanField(default=False)
    vegetarian_option = models.BooleanField(default=False)
    features = models.CharField(max_length=40, choices=FEATURES_CHOICES)
    short_review = models.CharField(max_length=300, default='Short Review')



class Review(models.Model):
    id = models.AutoField(primary_key=True)
    rating = models.PositiveIntegerField(default=1, choices=RATING_SCALE)
    review = models.TextField()


class Opinion(models.Model):
    id = models.AutoField(primary_key=True)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='restaurant')
    # user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='%(class)s')
    date = models.DateField(default=datetime.date.today)
    food_review = models.ForeignKey(Review, on_delete=models.CASCADE, related_name='foodReview')
    climate_review = models.ForeignKey(Review, on_delete=models.CASCADE, related_name='climateReview')
    staff_review = models.ForeignKey(Review, on_delete=models.CASCADE, related_name='staffReview')
    price_review = models.ForeignKey(Review, on_delete=models.CASCADE, related_name='priceReview')
    receipt_number = models.CharField(max_length=30, default='#')
