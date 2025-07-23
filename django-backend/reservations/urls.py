from django.urls import path
from . import views

urlpatterns = [
    path('', views.ReservationListCreateView.as_view(), name='reservation-list-create'),
    path('<int:pk>/', views.ReservationDetailView.as_view(), name='reservation-detail'),
    path('my-reservations/', views.UserReservationsView.as_view(), name='user-reservations'),
]
