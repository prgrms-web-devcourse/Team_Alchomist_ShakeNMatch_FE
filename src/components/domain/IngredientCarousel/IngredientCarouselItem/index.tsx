import type { ReactElement } from 'react';

const IngredientCarouselItem = ({ text }: any): ReactElement => {
  return (
    <div
      style={{
        width: '130px',
        height: '130px',
        backgroundColor: 'yellow',
        borderRadius: '50%',
        textAlign: 'center',
        lineHeight: 8
      }}
    >
      {text}
    </div>
  );
};

export default IngredientCarouselItem;
