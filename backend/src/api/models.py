from django.db import models
import datetime
from django.utils.safestring import mark_safe
import datetime

RATING_SCALE = (
    (1, 'Awful'),
    (2, 'Not good'),
    (3, 'Average'),
    (4, 'Awesome'),
    (5, 'Best EVER')
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
            avgRating += ((opinion.food_review+opinion.climate_review+opinion.staff_review+opinion.price_review)/4)
        return avgRating/opinions.count() if opinions.count() > 0 else 0


class Address(models.Model):
    restaurant = models.OneToOneField(Restaurant, on_delete=models.CASCADE, related_name='address')
    country = models.CharField(max_length=40, default='Poland')
    city = models.CharField(max_length=40, default='Wroclaw')
    street = models.CharField(max_length=70)
    local_number = models.CharField(max_length=5)
    postcode = models.CharField(max_length=6)


class Opinion(models.Model):
    id = models.AutoField(primary_key=True)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='restaurant')
    # user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='%(class)s')
    date = models.DateTimeField(auto_now_add=True)
    food_review = models.PositiveIntegerField(default=1, choices=RATING_SCALE)
    climate_review = models.PositiveIntegerField(default=1, choices=RATING_SCALE)
    staff_review = models.PositiveIntegerField(default=1, choices=RATING_SCALE)
    price_review = models.PositiveIntegerField(default=1, choices=RATING_SCALE)
    short_review = models.CharField(max_length=300, default='Short Review')
    receipt_number = models.CharField(max_length=30, default='#')

class Features(models.Model):
    features = models.CharField(max_length=40, choices=FEATURES_CHOICES)
    option = models.ForeignKey(Opinion, on_delete=models.CASCADE)

class Image(models.Model):
    name = models.CharField(max_length=100, default=str(datetime.datetime.now()), blank=True, null=True, editable=False)
    imagefile = models.FileField(upload_to='images/', null=True, verbose_name="")
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, blank=True, null=True, related_name='image')
    option = models.ForeignKey(Opinion, on_delete=models.CASCADE, blank=True, null=True)


    def __str__(self):
        return self.name + ": " + str(self.imagefile)

    def image_tag(self):
        if(self.imagefile == None): return mark_safe('<img src="/media/placeholders/placeholder.png" width="300" />')#HARDCODED PLACEHOLDER!!!
        return mark_safe('<img src="/media/%s" width="300" />' % (self.imagefile));
    image_tag.short_description = 'Image'
    image_tag.allow_tags = True
