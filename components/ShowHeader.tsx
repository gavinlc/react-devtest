import Image from "next/image";
import styled from "styled-components";
import StarRating from "./StarRating";

type Props = {
  title: string;
  rating: number;
  description: string;
  imageSrc: string;
};

const PageTitle = styled.h1`
  margin-bottom: 3rem;
  font-size: 2rem;
`;

const ShowHeaderContainer = styled.div`
  background: #e6e6e6;
  padding: 4rem;
`;

const ShowInfo = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  width: 200px;
  margin-right: 4rem;
`;

const ContentContainer = styled.div`
  max-width: 70%;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export default function ShowHeader({
  title,
  rating,
  description,
  imageSrc,
}: Props) {
  const image = (
    <Image
      src={imageSrc || "http://via.placeholder.com/300"}
      alt={`Cover Image for ${title}`}
      layout="responsive"
      width="400"
      height="550"
    />
  );

  return (
    <ShowHeaderContainer>
      <PageTitle>TV Bland</PageTitle>
      <ShowInfo>
        <ImageContainer>{image}</ImageContainer>
        <ContentContainer>
          <StarRating rating={rating} showRating={true} />
          <Title>{title}</Title>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </ContentContainer>
      </ShowInfo>
    </ShowHeaderContainer>
  );
}
