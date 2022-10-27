from rest_framework import serializers
from . import models
from dj_rest_auth.models import TokenModel

# User = get_user_model()



class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = models.Profile
        fields = '__all__'
        # fields = ('id', 'avatar', 'username', 'alias')

    # class Meta:
        # model = models.Profile
        # fields = ('id', 'avatar', 'username', 'alias') 
        # read_only_fields = ('user',)
        # depth = 1

# ========================================================
# class UserSerializer(serializers.ModelSerializer):
#     profile = serializers.PrimaryKeyRelatedField(many=False, read_only=True,)

#     class Meta:
#         model = models
#         fields = ('id', 'username', 'email', 'profile')


# class UserSerializer(serializers.ModelSerializer):
#     profile = ProfileSerializer(many=False, read_only=True,)

#     class Meta:
#         model = User
#         fields = ('id', 'username', 'email', 'profile')




class TokenSerializer(serializers.ModelSerializer):
    is_superuser = serializers.ReadOnlyField(source='user.is_superuser')
    id = serializers.ReadOnlyField(source='user.id')
    avatar = serializers.ImageField(source='user.profile.avatar')

    class Meta:
        model = TokenModel
        fields = ('key', 'is_superuser', 'id', 'avatar',)


# ----what package is using the TokenSerializer     dj_rest_auth

# class TokenSerializer(serializers.ModelSerializer):
#     username = serializers.ReadOnlyField(source='user.username')

#     class Meta:
#         model = TokenModel
#         fields = ('key', 'username',)



# class UserDetailSerializer(UserDetailSerializer):
#     #dj-rest-auth/user/
#     class Meta(UserDetailSerializer.Meta):
#         fields = UserDetailSerializer.Meta.fields + ('is_staff')


# class UserArticleListSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'username', 'email', 'profile', 'article_set')
#         depth = 1