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



class Restaurant(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, default='Restaurant name')
    longitude = models.DecimalField(max_digits=9, decimal_places=6)  # Position of restaurant on the map
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    food_type = models.CharField(max_length=40, default='Kuchnia polska')
    #avg_rating = models.DecimalField(max_digits=3, decimal_places=2)
    price_rating = models.DecimalField(max_digits=3, decimal_places=2)
    vegan_option = models.BooleanField(default=False)
    vegetarian_option = models.BooleanField(default=False)
    short_review = models.CharField(max_length=300, default='Short Review')

    @property
    def avg_rating(self):
        opinions = Opinion.objects.filter(restaurant=self)
        avgRating = 0
        for opinion in opinions:
            avgRating += ((opinion.food_review.rating+opinion.climate_review.rating+opinion.staff_review.rating+opinion.price_review.rating)/4)
        return avgRating/opinions.size if opinion.size > 0 else 0


class Address(models.Model):
    restaurant = models.OneToOneField(Restaurant, on_delete=models.CASCADE, related_name='address')
    country = models.CharField(max_length=40, default='Poland')
    city = models.CharField(max_length=40, default='Wroclaw')
    street = models.CharField(max_length=70)
    local_number = models.CharField(max_length=5)
    postcode = models.CharField(max_length=6)


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

class Features(models.Model):
    features = models.CharField(max_length=40, choices=FEATURES_CHOICES)
    option = models.ForeignKey(Opinion, on_delete=models.CASCADE)

