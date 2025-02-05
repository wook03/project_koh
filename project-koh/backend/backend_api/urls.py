from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'api/test',views.LectureViewSet)
router.register(r'user',views.UserViewSet)

app_name = 'backend_api'
urlpatterns = [
    path('get/category/', views.titleShow.as_view()), # 카테고리 목록
    path('',include(router.urls)),  
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # 이미지 접근 http://localhost:8000/image/leaf_detaction.jpeg