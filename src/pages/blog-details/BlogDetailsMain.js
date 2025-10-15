import React from 'react';
import { useParams } from 'react-router-dom';

import BlogImg1 from '../../assets/images/blog/blog-page-1-1.jpg';
import BlogImg2 from '../../assets/images/blog/blog-page-1-2.jpg';
import BlogImg3 from '../../assets/images/blog/blog-page-1-3.jpg';

const BlogDetailsMain = () => {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      imageUrl: BlogImg1,
      title: 'Creating Lasting Impressions',
      content:
        'MöbelTaxi Berlin bietet individuelle Umzugslösungen – von der Planung bis zur sicheren Lieferung Ihrer Möbel. Vertrauen Sie auf unsere Erfahrung und faire Preise.',
    },
    {
      id: 2,
      imageUrl: BlogImg2,
      title: 'Efficiently moving your goods',
      content:
        'Unser erfahrenes Team sorgt für reibungslose Umzüge in Berlin & Umgebung. Egal ob privat oder geschäftlich – wir liefern schnell, sicher und zuverlässig.',
    },
    {
      id: 3,
      imageUrl: BlogImg3,
      title: 'Cultivate Success with Service',
      content:
        'Mit Leidenschaft und Präzision – MöbelTaxi bringt Ihre Einrichtung ans Ziel. Wir garantieren besten Service, faire Konditionen und zufriedene Kunden.',
    },
  ];

  const post = blogs.find((b) => b.id === Number(id));

  if (!post) {
    return (
      <div className="text-center py-5">
        <h2>Blogpost nicht gefunden</h2>
      </div>
    );
  }

  return (
    <React.Fragment>
      <section className="blog-details py-5">
        <div className="container">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="img-fluid rounded mb-4"
          />
          <h2 className="mb-3">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default BlogDetailsMain;