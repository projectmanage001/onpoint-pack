import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import BlogImg1 from '../../assets/images/blog/blog-page-1-1.jpg';
import BlogImg2 from '../../assets/images/blog/blog-page-1-2.jpg';
import BlogImg3 from '../../assets/images/blog/blog-page-1-3.jpg';

const BlogMain = () => {
  // Tüm bloglar
  const allBlogs = [
    {
      id: 1,
      imageUrl: BlogImg1,
      date: '29 Jan 2024',
      title: 'Creating Lasting Impressions',
      excerpt: 'MöbelTaxi Berlin – Ihr professioneller Umzugsservice für stressfreie Umzüge, Möbeltransporte und Entsorgungen in Berlin & Brandenburg.',
    },
    {
      id: 2,
      imageUrl: BlogImg2,
      date: '12 Feb 2024',
      title: 'Efficiently moving your goods',
      excerpt: 'Mit unseren flexiblen Transportlösungen bringen wir Ihre Möbel sicher und pünktlich ans Ziel – vom Kleintransport bis zum Komplettumzug.',
    },
    {
      id: 3,
      imageUrl: BlogImg3,
      date: '20 Mar 2024',
      title: 'Cultivate Success with Service',
      excerpt: 'Unser Team steht für Zuverlässigkeit, Sorgfalt und faire Preise – entdecken Sie, warum Kunden immer wieder auf MöbelTaxi vertrauen.',
    },
  ];

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;
  const totalPages = Math.ceil(allBlogs.length / postsPerPage);

  const currentBlogs = allBlogs.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <React.Fragment>
      <section className="blog-page">
        <div className="container">
          <div className="row">
            {currentBlogs.map((post) => (
              <div className="col-xl-6 col-lg-6" key={post.id}>
                <div className="blog-card">
                  <Link to={`/blog/${post.id}`}>
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="img-fluid rounded mb-3"
                    />
                  </Link>
                  <div>
                    <p className="text-muted mb-1">{post.date}</p>
                    <h4>
                      <Link to={`/blog/${post.id}`} className="text-dark">
                        {post.title}
                      </Link>
                    </h4>
                    <p>{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`} className="btn btn-link p-0">
                      Weiterlesen →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="blog-page__pagination text-center mt-4">
            <ul className="pg-pagination list-unstyled d-inline-flex">
              {[...Array(totalPages)].map((_, index) => (
                <li
                  key={index}
                  className={`count mx-2 ${currentPage === index + 1 ? 'active' : ''}`}
                >
                  <button
                    onClick={() => setCurrentPage(index + 1)}
                    className="btn btn-outline-dark btn-sm"
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default BlogMain;