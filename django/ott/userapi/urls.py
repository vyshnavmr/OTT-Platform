from django.urls import path
from . import views

urlpatterns = [
    path('signup', views.Signup, name='signup'),
    path('login', views.login, name='login'),
    path('list_movie', views.list_movie, name='list_movie'),
    path('watch/<int:movie_id>/', views.watch_movie),
    path('watchlist', views.get_watchlist, name='get_watchlist'),
    path('watchlist/add', views.add_watchlist, name='add_watchlist'),
    path('watchhistory', views.get_watchhistory, name='get_watchhistory'),
    # path('watchhistory/add', views.add_watchhistory, name='add_watchhistory'),
    path('changepassword', views.change_password, name='change_password'),

]