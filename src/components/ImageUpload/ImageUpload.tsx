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

export const ImageUpload = ({
  images,
  imagePreviews,
  onImagesChange,
  maxImages = 3,
}: ImageUploadProps) => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      const newFiles = [...images, ...fileArray].slice(0, maxImages);
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
          accept="image/*"
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
            <ImageContainer key={`${images[index].name}-${images[index].lastModified}`}>
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
