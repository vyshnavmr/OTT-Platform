from rest_framework import serializers
from app.models import Movie, WatchList, WatchHistory

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'

class WatchListSerializer(serializers.ModelSerializer):
    movie= MovieSerializer(read_only=True)
    class Meta:
        model = WatchList
        fields = '__all__'
        
class WatchHistorySerializer(serializers.ModelSerializer):
    movie = MovieSerializer(read_only=True)
    class Meta:
        model = WatchHistory
        fields = '__all__'
