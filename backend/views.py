from django.http import JsonResponse
from django.views import View

class HelloWorldView(View):
    def get(self, request, *args, **kwargs):
        return JsonResponse({'message': 'k k k Shopping mall'})
