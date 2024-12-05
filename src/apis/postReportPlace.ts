import imageCompression from 'browser-image-compression';

import { ReportFormData } from '@/types/ReviewPage/ReviewFormData';
import { client } from '@/utils/axios';
import { transformReportData } from '@/utils/enumTransforms';

export const postReportPlace = async (postdata: ReportFormData, images?: File[]) => {
  const formData = new FormData();
  const transformedData = transformReportData(postdata);

  formData.append('reportData', JSON.stringify(transformedData));

  if (images && images.length > 0) {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    const compressedImages = await Promise.all(
      images.map(async (image) => {
        try {
          return await imageCompression(image, options);
        } catch (error) {
          console.error('이미지 압축 실패:', error);
          return image;
        }
      })
    );

    compressedImages.forEach((image) => {
      formData.append('images', image);
    });
  }

  const { data } = await client.post<ReportFormData>(`/report-place`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};
