from datetime import datetime

def sort_images_by_capture_date(images):
    def get_capture_time(image):
        capture_time = image.get('capture_time')
        if capture_time:
            try:
                return datetime.strptime(capture_time, '%Y:%m:%d %H:%M:%S')
            except ValueError:
                return datetime.min
        return datetime.min

    return sorted(images, key=get_capture_time)