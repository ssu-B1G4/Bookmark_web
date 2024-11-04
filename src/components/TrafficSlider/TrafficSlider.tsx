import MarkerPin from '@/assets/marker-pin.svg';

import {
  MarkerContainer,
  MarkerLabel,
  SliderContainer,
  SliderProgress,
  SliderThumb,
  SliderTrack,
} from './TrafficSlicer.style';

interface SliderProps {
  progress: number;
  onProgressChange: (value: number) => void;
  progressColor?: string;
  labelColor?: string;
  thumbImage?: string;
}

const Slider = ({
  progress,
  onProgressChange,
  progressColor,
  labelColor,
  thumbImage = MarkerPin,
}: SliderProps) => {
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    const stepValue = Math.round(newValue / 10) * 10;
    onProgressChange(stepValue);
  };

  return (
    <div>
      <SliderContainer>
        <SliderTrack>
          <SliderProgress $progress={progress} $progressColor={progressColor} />
          <SliderThumb src={thumbImage} $progress={progress} />
        </SliderTrack>
        <input
          type="range"
          min="0"
          max="100"
          step="10"
          value={progress}
          onChange={handleSliderChange}
          style={{
            position: 'absolute',
            width: '100%',
            height: '12px',
            opacity: 0,
          }}
        />
      </SliderContainer>
      <MarkerContainer>
        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((value) => (
          <MarkerLabel key={value} $labelColor={labelColor}>
            {value}%
          </MarkerLabel>
        ))}
      </MarkerContainer>
    </div>
  );
};

export default Slider;
