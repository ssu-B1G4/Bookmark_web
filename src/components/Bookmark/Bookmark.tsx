import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { deletePlaceBookmark } from '@/apis/detetePlaceBookmark';
import { getPlaceBookmark } from '@/apis/getPlaceBookmark';
import { postPlaceBookmark } from '@/apis/postPlaceBookmark';
import bookmarkActive from '@/assets/SpacePage/activeBookmarkIcon.svg';
import bookmarkDefault from '@/assets/SpacePage/bookmarkIcon.svg';

import { IconButton } from './Bookmark.style';

interface BookmarkButtonProps {
  placeId: number;
}

export const Bookmark = ({ placeId }: BookmarkButtonProps) => {
  const queryClient = useQueryClient();

  const { data: bookmarkStatus } = useQuery({
    queryKey: ['bookmark', placeId],
    queryFn: () => getPlaceBookmark(placeId),
  });

  const { mutate: toggleBookmark } = useMutation({
    mutationFn: async () => {
      if (bookmarkStatus?.result.isSaved) {
        return await deletePlaceBookmark(placeId);
      }
      return await postPlaceBookmark(placeId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmark', placeId] });
    },
  });

  const handleClick = () => {
    toggleBookmark();
  };

  return (
    <IconButton onClick={handleClick}>
      <img src={bookmarkStatus?.result.isSaved ? bookmarkActive : bookmarkDefault} alt="북마크" />
    </IconButton>
  );
};
