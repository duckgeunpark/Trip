from fastapi import FastAPI, File, UploadFile, HTTPException
from services.image_processor import process_image
from utils.sort_images_by_capture_date import sort_images_by_capture_date
from typing import List


app = FastAPI()
 
@app.post("/upload-images/")
async def upload_images(files: List[UploadFile] = File(...)):
    results = []
    for file in files:
        try:
            result = await process_image(file)
            results.append(result)
        except Exception as e:
            results.append({"filename": file.filename, "error": str(e)})
    
    # 결과를 촬영일 기준으로 정렬
    sorted_results = sort_images_by_capture_date(results)
    return {"results": sorted_results}