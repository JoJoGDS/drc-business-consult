from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from reservations.models import Reservation
from reservations.serializers import ReservationSerializer

class ReservationListCreateView(APIView):
    def get_permissions(self):
        if self.request.method == 'POST':
            # Allow anyone to create reservations
            return [AllowAny()]
        elif self.request.method == 'GET':
            # Require authentication to view reservations
            return [IsAuthenticated()]
        return [AllowAny()]
        
    def get(self, request):
        try:
            if request.user.is_superuser:
                # Admin can see all reservations
                reservations = Reservation.objects.all().order_by('-created_at')
            else:
                # Regular users can only see their own reservations
                reservations = Reservation.objects.filter(user=request.user).order_by('-created_at')
            
            serializer = ReservationSerializer(reservations, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response(
                {'error': f'Error fetching reservations: {str(e)}'}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    def post(self, request):
        try:
            serializer = ReservationSerializer(data=request.data)
            if serializer.is_valid():
                # If user is authenticated, link the reservation to them
                if request.user.is_authenticated:
                    serializer.save(user=request.user)
                else:
                    # Allow anonymous reservations
                    serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(
                {'error': f'Error creating reservation: {str(e)}'}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class ReservationDetailView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get_object(self, pk, user):
        if user.is_superuser:
            return get_object_or_404(Reservation, pk=pk)
        else:
            return get_object_or_404(Reservation, pk=pk, user=user)
    
    def get(self, request, pk):
        try:
            reservation = self.get_object(pk, request.user)
            serializer = ReservationSerializer(reservation)
            return Response(serializer.data)
        except Exception as e:
            return Response(
                {'error': f'Error fetching reservation: {str(e)}'}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    def patch(self, request, pk):
        try:
            reservation = self.get_object(pk, request.user)
            
            # Only admins can change status
            if 'status' in request.data and not request.user.is_superuser:
                return Response(
                    {'error': 'Only admins can change reservation status'}, 
                    status=status.HTTP_403_FORBIDDEN
                )
            
            serializer = ReservationSerializer(reservation, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(
                {'error': f'Error updating reservation: {str(e)}'}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    def delete(self, request, pk):
        try:
            reservation = self.get_object(pk, request.user)
            reservation.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response(
                {'error': f'Error deleting reservation: {str(e)}'}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class UserReservationsView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        try:
            reservations = Reservation.objects.filter(user=request.user).order_by('-created_at')
            serializer = ReservationSerializer(reservations, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response(
                {'error': f'Error fetching user reservations: {str(e)}'}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
