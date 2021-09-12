import styled from 'styled-components';
import { device } from '../lib/media';
import Star from './Star';

type Props = {
  rating: number;
};

const StarRatingContainer = styled.div`
  @media ${device.mobile} {
    display: none;
  }
`;


export default function StarRating({rating}: Props) {
  return (
    <StarRatingContainer>
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={rating >= i + 1}
        />
      ))}
    </StarRatingContainer>
  );
}