import styled from "styled-components";
import { device } from "../lib/media";
import Star from "./Star";

type Props = {
  rating: number;
  showRating: boolean;
};

const RatingText = styled.p`
  margin: 0;
  display: inline;
  margin-left: 0.5rem;
`;

const StarRatingContainer = styled.div`
  @media ${device.mobile} {
    display: none;
  }
`;

export default function StarRating({ rating, showRating = false }: Props) {
  return (
    <StarRatingContainer>
      {Array.from({ length: 5 }, (v, i) => (
        <Star starId={i + 1} key={`star_${i + 1}`} marked={rating >= i + 1} />
      ))}
      {showRating && <RatingText>{rating}/5</RatingText>}
    </StarRatingContainer>
  );
}
