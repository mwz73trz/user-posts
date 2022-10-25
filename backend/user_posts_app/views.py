from rest_framework import viewsets, filters
from .serializers import PostSerializer
from .models import Post

class PostViewSet(viewsets.ModelViewSet):
    search_fields = ['title', 'content', 'created_date']
    filter_backends = (filters.SearchFilter,)
    queryset = Post.objects.all()
    serializer_class = PostSerializer
