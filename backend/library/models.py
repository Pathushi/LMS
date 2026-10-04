from django.db import models

class Book(models.Model):
    accession_number = models.CharField(max_length=50, primary_key=True)  # Book ID
    entry_date = models.DateField(auto_now_add=True)
    author = models.CharField(max_length=255, db_index=True)
    title = models.CharField(max_length=255, db_index=True)
    place_of_publish = models.CharField(max_length=150, blank=True, null=True)
    publisher = models.CharField(max_length=150, blank=True, null=True)
    date_of_published = models.DateField(blank=True, null=True)
    pages = models.PositiveIntegerField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    source = models.CharField(max_length=100, blank=True, null=True)
    remarks = models.TextField(blank=True, null=True)
    category = models.CharField(max_length=100, db_index=True)

    def __str__(self):
        return f"{self.accession_number} - {self.title}"


class Member(models.Model):
    name = models.CharField(max_length=255, db_index=True)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    membership_date = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.id} - {self.name}"