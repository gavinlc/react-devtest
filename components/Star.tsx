type Props = {
  marked: boolean;
  starId: number
};

const Star = ({ marked, starId }: Props) => {
  return (
    <span data-star-id={starId} className="star" role="button">
      {marked ? '\u2605' : '\u2606'}
    </span>
  );
};

export default Star