from rest_framework import permissions


class IsAuthorOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.author == request.user or request.user.is_staff




# class ArticleListPermissions(permissions.BasePermissions):
#
#   def has_permission(self, request, view):
#       if request.method in permissions.SAFE_METHODS:
#           return True
#       elif requests.method == 'POST' and request.data.get('phase') is not None:
#           if request.user.is_staff:
#               return request.data.get('phase') in ('DFR', 'SUB', 'PUB',)
#           else :
#               return request.data.get('phase') in ('DFR', 'SUB',)
#
#       return not request.user.is_annoymous
#
#   def has_object_permission(self, request, view, obj):
#       if request.method = 'DELETE':
#           if obj.phase == 'DRF' and obj.authir == request.user:
#               return True
#
#       return False
#
#   ('DFR',) --- is a tuple
#   ('DFR') --- not a tuple