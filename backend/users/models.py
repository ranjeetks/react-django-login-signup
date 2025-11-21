from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    # Extend if needed in future (e.g., full_name, is_verified, etc.)
    pass
