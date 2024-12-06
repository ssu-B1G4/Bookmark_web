import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const StyledBottomSheet = styled(motion.div)<{ height: number; $zIndex: number }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${({ height }) => height}px;
  background-color: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: visible;
  z-index: ${({ $zIndex }) => $zIndex || 0};
`;

export const ContentContainer = styled.div`
  flex: 1;
  padding-top: 24px;
  overflow: hidden;
`;
