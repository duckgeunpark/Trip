import json
from PIL import Image

class CustomJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Image.Image):
            return f"<Image: {obj.format}, {obj.size}, {obj.mode}>"
        if hasattr(obj, 'numerator') and hasattr(obj, 'denominator'):
            return float(obj)
        if isinstance(obj, (bytes, bytearray)):
            try:
                return obj.decode('utf-8')
            except UnicodeDecodeError:
                return obj.decode('cp949', errors='replace')
        return str(obj)

def custom_json_serializer(obj):
    return json.dumps(obj, cls=CustomJSONEncoder, ensure_ascii=False)