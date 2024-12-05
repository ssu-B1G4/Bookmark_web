import heic2any from 'heic2any';

import Pic from '@/assets/image.svg';
import XIcon from '@/assets/x.svg';

import {
  DeleteButton,
  ImageContainer,
  ImageSlider,
  Placeholder,
  PreviewImage,
  UploadArea,
  UploadContainer,
  UploadLabel,
} from './ImageUpload.style';

interface ImageUploadProps {
  images: File[];
  imagePreviews: string[];
  onImagesChange: (files: File[]) => void;
  maxImages?: number;
}

const convertHeicToJpeg = async (file: File): Promise<File> => {
  try {
    if (file.name.toLowerCase().endsWith('.heic') || file.type === 'image/heic') {
      console.log('HEIC 파일 변환 시작:', file.name);
      const convertedBlob = await heic2any({
        blob: file,
        toType: 'image/jpeg',
        quality: 0.8,
      });

      const processedBlob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;

      return new File([processedBlob], file.name.replace(/\.heic$/i, '.jpg'), {
        type: 'image/jpeg',
      });
    }
    return file;
  } catch (error) {
    console.error('HEIC 변환 실패:', error, file);
    return file;
  }
};

export const ImageUpload = ({
  images,
  imagePreviews,
  onImagesChange,
  maxImages = 3,
}: ImageUploadProps) => {
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);

      // HEIC 파일 변환 처리
      const processedFiles = await Promise.all(
        fileArray.map(async (file) => {
          return await convertHeicToJpeg(file);
        })
      );

      const newFiles = [...images, ...processedFiles].slice(0, maxImages);
      onImagesChange(newFiles);
    }
  };

  const handleImageDelete = (index: number) => {
    const newFiles = images.filter((_, i) => i !== index);
    onImagesChange(newFiles);
  };

  return (
    <UploadArea>
      <UploadContainer>
        <input
          type="file"
          accept="image/*,.heic,.HEIC,.heif,.HEIF"
          multiple
          onChange={handleImageUpload}
          disabled={images.length >= maxImages}
        />
        <Placeholder>
          <img src={Pic} alt="Pic Icon" />
          <br />
          <UploadLabel>
            사진 추가 ({images.length}/{maxImages})
          </UploadLabel>
        </Placeholder>
      </UploadContainer>

      {imagePreviews.length > 0 && (
        <ImageSlider>
          {imagePreviews.map((preview, index) => (
            <ImageContainer key={`${preview}-${index}`}>
              <PreviewImage src={preview} alt={`Uploaded ${index + 1}`} />
              <DeleteButton onClick={() => handleImageDelete(index)}>
                <img src={XIcon} alt="Delete" />
              </DeleteButton>
            </ImageContainer>
          ))}
        </ImageSlider>
      )}
    </UploadArea>
  );
};
