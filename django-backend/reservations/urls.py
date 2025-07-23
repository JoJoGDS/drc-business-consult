from django.urls import path
from .views import ReservationListCreateView
from . import views

urlpatterns = [
    path('', ReservationListCreateView.as_view(), name='reservation-list-create'),
    path('', views.ReservationListCreateView.as_view(), name='reservation-list-create'),
    path('<int:pk>/', views.ReservationDetailView.as_view(), name='reservation-detail'),
]
