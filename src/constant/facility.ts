import InfoIcon1 from '@/assets/SpacePage/concentIcon.svg';
import InfoIcon4 from '@/assets/SpacePage/noiseIcon.svg';
import InfoIcon2 from '@/assets/SpacePage/spaceSizeIcon.svg';
import InfoIcon3 from '@/assets/SpacePage/wifiIcon.svg';

export const FACILITY_ICONS = [
  {
    id: 1,
    icon: InfoIcon1,
    name: '콘센트',
  },
  {
    id: 2,
    icon: InfoIcon2,
    name: '공간크기',
  },
  {
    id: 3,
    icon: InfoIcon3,
    name: '와이파이',
  },
  {
    id: 4,
    icon: InfoIcon4,
    name: '소음',
  },
] as const;
