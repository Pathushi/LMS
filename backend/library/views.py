from rest_framework import viewsets, filters, permissions
from django.contrib.auth.models import User
from .models import Book, Member
from .serializers import BookSerializer, MemberSerializer, UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    CRUD for system users/librarians.
    """
    queryset = User.objects.all().order_by('id')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class BookViewSet(viewsets.ModelViewSet):
    """
    CRUD for Books.
    Search by title (name), author, accession_number (ID), and category.
    """
    queryset = Book.objects.all().order_by('-entry_date')
    serializer_class = BookSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'author', 'accession_number', 'category']


class MemberViewSet(viewsets.ModelViewSet):
    """
    CRUD for Library Members.
    Search by name and ID.
    """
    queryset = Member.objects.all().order_by('-membership_date')
    serializer_class = MemberSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', '=id']