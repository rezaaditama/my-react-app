import Card from '../components/Card';

const data = [
  {
    id: 1,
    src: '/assets/image/shoes-1.jpg',
    alt: 'Sepatu Kasual Modern',
    title: 'Sepatu Kasual Modern',
    description:
      'Sepatu kasual yang nyaman dengan desain modern, cocok untuk kegiatan sehari-hari. Dibuat dari bahan berkualitas tinggi untuk durabilitas maksimal.',
    price: 350000,
  },
  {
    id: 2,
    src: '/assets/image/shoes-1.jpg',
    alt: 'Sepatu Kulit Klasik',
    title: 'Sepatu Kulit Klasik',
    description:
      'Sepatu kulit bergaya klasik yang memberikan tampilan elegan dan profesional. Ideal untuk acara formal dan pertemuan bisnis.',
    price: 750000,
  },
  {
    id: 3,
    src: '/assets/image/shoes-1.jpg',
    alt: 'Sneakers Sporty',
    title: 'Sneakers Sporty',
    description:
      'Sneakers sporty dengan bantalan nyaman dan desain trendi, sempurna untuk olahraga ringan dan gaya santai.',
    price: 550000,
  },
];

const CardProductsPage = () => {
  return (
    <div className='min-h-screen flex flex-wrap'>
      {data.map((product) => {
        return (
          <Card>
            <Card.Header
              src={product.src}
              alt={product.alt}
              title={product.title}
            />
            <Card.Body
              description={product.description}
              price={product.price}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default CardProductsPage;
