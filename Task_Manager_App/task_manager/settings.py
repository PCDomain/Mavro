# settings.py

# Static files (CSS, JavaScript, Images)
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

# Ensure BASE_DIR is correctly set
import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

