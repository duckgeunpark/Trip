from fastapi import UploadFile
from PIL import Image
import json
from utils.json_utils import custom_json_serializer
from PIL.ExifTags import TAGS, GPSTAGS
import io
import logging

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

#PIL Image 객체에서 EXIF 메타데이터를 추출
def get_image_metadata(image):
    metadata = {}
    exif = image._getexif()
    if exif:
        metadata = {TAGS.get(key, key): value for key, value in exif.items()}
    return metadata

#메타데이터에서 GPS 정보를 추출
def get_gps_data(metadata):
    """메타데이터에서 GPS 데이터를 추출하는 함수"""
    gps_info = metadata.get('GPSInfo', {})
    if gps_info:
        return {GPSTAGS.get(key, key): value for key, value in gps_info.items()}
    return None

#메타데이터에서 이미지 촬영 시간을 추출
def get_capture_time(metadata):
    return metadata.get('DateTimeOriginal') or metadata.get('DateTime')


# GPS 좌표를 도(degree) 단위로 변환합니다.
def convert_to_degrees(value):
    """GPS 좌표를 도(degree) 단위로 변환하는 함수"""
    d, m, s = value
    return d + (m / 60.0) + (s / 3600.0)


async def process_image(file: UploadFile):
    try:
        contents = await file.read()
        image = Image.open(io.BytesIO(contents))
        logger.debug(f"Processing image: {file.filename}")

        metadata = get_image_metadata(image)
        gps_data = get_gps_data(metadata)
        
        result = {
            "filename": file.filename,
            "size": len(contents),
            "format": image.format,
            "mode": image.mode,
            "width": image.width,
            "height": image.height,
        }
        
        capture_time = get_capture_time(metadata)
        if capture_time:
            result["capture_time"] = capture_time
        
        if gps_data:
            lat = convert_to_degrees(gps_data['GPSLatitude'])
            lon = convert_to_degrees(gps_data['GPSLongitude'])
            
            if gps_data['GPSLatitudeRef'] != 'N':
                lat = -lat
            if gps_data['GPSLongitudeRef'] != 'E':
                lon = -lon
            
            result["gps"] = {
                "latitude": lat,
                "longitude": lon
            }
        
        return json.loads(custom_json_serializer(result))
    except Exception as e:
        logger.error(f"Error processing image {file.filename}: {str(e)}")
        raise