from rest_framework import status
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from app.models import User, Movie, WatchList, WatchHistory
from django.http import JsonResponse
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from .serializers import MovieSerializer, WatchListSerializer, WatchHistorySerializer
from django.contrib.auth.hashers import check_password
from django.shortcuts import get_object_or_404
# from django.db.models import F


# 65ef6f3eca0d8900933fafab8e21acc9694aa61e

@api_view(['POST'])
@permission_classes((AllowAny,))
def Signup(request):
        email  = request.data.get("email")
        password = request.data.get("password")

        name = request.data.get("name")

        if not name or not email or not password:
            return Response({'message':'All fields are required'})
        
        if User.objects.filter(email=email).exists():
            return  JsonResponse({'message':'Email already exist'})
        
        user = User.objects.create_user(email=email,password=password)
        user.name = name
        user.save()

        return JsonResponse({'message':'user created successsfully'} ,status = 200)

@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
    email = request.data.get("email")
    password = request.data.get("password")
    if email is None or password is None:
        return Response({'error': 'Please provide both username and password'},
                        status=HTTP_400_BAD_REQUEST)
    
    user = authenticate(email=email, password=password)

    if not user:
        return Response({'error': 'Invalid Credentials'},
                        status=HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key},status=HTTP_200_OK)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def list_movie(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def movie_detail(request, movie_id):
    movie = get_object_or_404(Movie, id=movie_id)
    serializer = MovieSerializer(movie)
    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def watch_movie(request, movie_id):

    movie = get_object_or_404(Movie, id=movie_id)

    # Increment movie views
    movie.views += 1
    movie.save()

    # Add movie to watch history
    WatchHistory.objects.create(
        user=request.user,
        movie=movie
    )
    movie.refresh_from_db()

    return Response({
        "message": "Movie started",
        "movie": movie.name,
        "views": movie.views
    })


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def add_watchlist(request):
    serializer = WatchListSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_watchlist(request):
    watchlist = WatchList.objects.all()
    serializer = WatchListSerializer(watchlist, many=True)
    return Response(serializer.data)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_from_watchlist(request, movie_id):
    watchlist_item = WatchList.objects.filter(
        user=request.user,
        movie_id=movie_id
    ).first()

    if not watchlist_item:
        return Response(
            {"error": "Movie not found in watchlist"},
            status=status.HTTP_404_NOT_FOUND
        )
    watchlist_item.delete()
    return Response(
        {"message": "Movie removed from watchlist"},
        status=status.HTTP_200_OK
    )


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_watchhistory(request):
    watchhistory = WatchHistory.objects.all()
    serializer = WatchHistorySerializer(watchhistory, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def search_movie(request):
    query = request.GET.get("q")

    if not query:
        return Response({"error": "Search query is required"}, status=400)
    
    movies = Movie.objects.filter(name__icontains=query)
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_password(request):

    old_password = request.data.get('old_password')
    new_password = request.data.get('new_password')

    user = request.user

    if not check_password(old_password, user.password):
        return Response(
            {"error": "Current password is incorrect"},
            status=400
        )

    user.set_password(new_password)
    user.save()

    return Response(
        {"message": "Password changed successfully"},
        status=200
    )