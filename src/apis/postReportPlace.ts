import { ReportFormData } from '@/types/ReviewPage/ReviewFormData';
import { client } from '@/utils/axios';
import { transformReportData } from '@/utils/enumTransforms';

export const postReportPlace = async (postdata: ReportFormData, images?: File[]) => {
  const formData = new FormData();
  const transformedData = transformReportData(postdata);
  console.log(postdata);

  formData.append('reportData', JSON.stringify(transformedData));

  if (images && images.length > 0) {
    images.forEach((image) => {
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
