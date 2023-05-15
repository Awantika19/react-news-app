import ButtonComponent from '../../atoms/Button/Button';
import './Category.styles.css';
const categoryTokens = [
  {category: 'business', color: '#FCC1B0'},
  {category: 'entertainment', color: '#B2D2E8'},
  {category: 'general', color: '#CFB7ED'},
  {category: 'health', color: '#F4D1A6'},
  {category: 'science', color: '#C5AE88'},
  {category: 'sports', color: '#C1E0C8'},
  {category: 'technology', color: '#D7C2D7'},
];

const CategoryComponent = () => {
  const handleCategoryClick = (category: string) => {
    console.log(`Category ${category} clicked!`);
  };

  return (
    <section className='category-wrapper'>
      {categoryTokens.map(({category, color}) => (
        <ButtonComponent
          key={category}
          onClick={() => handleCategoryClick(category)}
          style={{backgroundColor: color}}>
          {category}
        </ButtonComponent>
      ))}
    </section>
  );
};

export default CategoryComponent;
