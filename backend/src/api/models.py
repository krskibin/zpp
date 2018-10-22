from django.db import models
import datetime

RATING_SCALE = (
    (1, 'Awful'),
    (2, 'Not good'),
    (3, 'Average'),
    (4, 'Awesome'),
    (5, 'Best Place EVER')
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
    localNumber = models.CharField(max_length=5)
    postcode = models.CharField(max_length=6)


class Restaurant(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, default='Restaurant name')
    longitude = models.DecimalField(max_digits=9, decimal_places=6)   # Position of restaurant on the map
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    address = models.ForeignKey(Address, on_delete=models.CASCADE, related_name='address')
    foodType = models.CharField(max_length=40, default='Kuchnia polska')
    avgRating = models.DecimalField(max_digits=3, decimal_places=2)
    priceRating = models.DecimalField(max_digits=3, decimal_places=2)
    veganOption = models.BooleanField(default=False)
    vegetarianOption = models.BooleanField(default=False)
    features = models.ForeignKey(Feature, on_delete=models.CASCADE, related_name='features')
    shortReview = models.CharField(max_length=300, default='Short Review')


class Review(models.Model):
    id = models.AutoField(primary_key=True)
    rating = models.PositiveIntegerField(default=1, choices=RATING_SCALE)
    review = models.TextField()


class Opinion(models.Model):
    id = models.AutoField(primary_key=True)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='restaurant')
    # user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='%(class)s')
    date = models.DateField(default=datetime.date.today)
    foodReview = models.ForeignKey(Review, on_delete=models.CASCADE, related_name='foodReview')
    climateReview = models.ForeignKey(Review, on_delete=models.CASCADE, related_name='climateReview')
    staffReview = models.ForeignKey(Review, on_delete=models.CASCADE, related_name='staffReview')
    priceReview = models.ForeignKey(Review, on_delete=models.CASCADE, related_name='priceReview')
    receiptNumber = models.CharField(max_length=30, default='#')
