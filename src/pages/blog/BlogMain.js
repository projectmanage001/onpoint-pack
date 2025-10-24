// src/pages/blog/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import ContactFormSection from '../../components/Common/ContactFormSection'; // ✅ form eklendi

import Img1 from '../../assets/images/blog/blog-1.jpg';
import Img2 from '../../assets/images/blog/blog-2.jpg';
import Img3 from '../../assets/images/blog/blog-3.jpg';
import Img4 from '../../assets/images/blog/blog-4.jpg';
import Img5 from '../../assets/images/blog/blog-5.jpg';
import Img6 from '../../assets/images/blog/blog-6.jpg';
import Img7 from '../../assets/images/blog/blog-7.jpg';
import Img8 from '../../assets/images/blog/blog-8.jpg';
import Img9 from '../../assets/images/blog/blog-9.jpg';

const ALL_POSTS = [
  {
    id: 1,
    imageUrl: Img1,
    date: '2024-01-29',
    title: '🇩🇪 Umzug in Berlin – 10 Tipps für einen stressfreien Umzug',
    excerpt:
      'Mit guter Planung und einem zuverlässigen Partner wird Ihr Umzug in Berlin stressfrei. Möbel Taxi & Umzug Berlin zeigt, wie es gelingt.',
  },
  {
    id: 2,
    imageUrl: Img2,
    date: '2024-02-12',
    title: '🇩🇪 Möbeltransport Berlin – So finden Sie den richtigen Anbieter',
    excerpt:
      'Erfahren Sie, wie Sie den passenden Möbeltransport in Berlin auswählen – sicher, günstig und professionell mit Möbel Taxi & Umzug Berlin.',
  },
  {
    id: 3,
    imageUrl: Img3,
    date: '2024-03-15',
    title: '🇩🇪 Möbeltaxi Berlin – Wann lohnt sich der Service wirklich?',
    excerpt:
      'Ein Möbeltaxi ist ideal für kleine bis mittlere Transporte in Berlin. Sparen Sie Zeit und vermeiden Sie Stress mit Möbel Taxi & Umzug Berlin.',
  },
  {
    id: 4,
    imageUrl: Img4,
    date: '2024-04-02',
    title: '🇩🇪 Entrümpelung leicht gemacht – So sparen Sie Zeit & Geld in Berlin',
    excerpt:
      'Entrümpelungen in Berlin müssen nicht stressig sein – Möbel Taxi & Umzug Berlin zeigt, wie es effizient und kostengünstig funktioniert.',
  },
  {
    id: 5,
    imageUrl: Img5,
    date: '2024-04-18',
    title: '🇩🇪 Sperrmüll richtig entsorgen – Bußgelder in Berlin erklärt',
    excerpt:
      'Falsch entsorgter Sperrmüll kann teuer werden. Möbel Taxi & Umzug Berlin erklärt, wie Sie legal und einfach entsorgen.',
  },
  {
    id: 6,
    imageUrl: Img6,
    date: '2024-05-10',
    title: '🇩🇪 Seniorenumzug in Berlin – Mit Herz und Erfahrung',
    excerpt:
      'Einfühlsame Umzugsservices für Senioren in Berlin. Möbel Taxi & Umzug Berlin begleitet Sie sicher und stressfrei beim Umzug.',
  },
  {
    id: 7,
    imageUrl: Img7,
    date: '2024-06-02',
    title: '🇩🇪 Möbelmontage in Berlin – Warum Sie Profis beauftragen sollten',
    excerpt:
      'Schnell, sicher, fachgerecht: Möbelmontage in Berlin vom Profi spart Zeit und schützt Ihre Einrichtung.',
  },
  {
    id: 8,
    imageUrl: Img8,
    date: '2024-06-20',
    title: '🇩🇪 Gartenabfälle richtig entsorgen – Ihre Möglichkeiten in Berlin',
    excerpt:
      'Grünschnitt, Laub und Äste richtig entsorgen – Möbel Taxi & Umzug Berlin übernimmt Abholung und Entsorgung.',
  },
  {
    id: 9,
    imageUrl: Img9,
    date: '2024-07-01',
    title: '🇩🇪 Nachhaltig umziehen – So funktioniert ein umweltfreundlicher Umzug',
    excerpt:
      'Mit umweltfreundlichen Verpackungen und effizienten Routen nachhaltig umziehen – Möbel Taxi & Umzug Berlin zeigt wie.',
  },
];

const BlogMain = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Blog | Möbel Taxi & Umzug Berlin</title>
        <meta
          name="description"
          content="Lesen Sie Tipps & Ratgeber zu Umzug, Möbeltransport, Entrümpelung, Sperrmüll & Möbelmontage in Berlin – vom erfahrenen Team Möbel Taxi & Umzug Berlin."
        />
        <meta
          name="keywords"
          content="Umzug Berlin, Möbeltransport Berlin, Möbeltaxi Berlin, Entrümpelung Berlin, Sperrmüll Berlin, Möbelmontage Berlin"
        />
      </Helmet>

      <section className="blog-page py-5">
        <div className="container">
          <div className="row">
            {ALL_POSTS.map((post) => (
              <article className="col-xl-4 col-lg-4 mb-4" key={post.id}>
                <div className="blog-card">
                  <Link to={`/blog/${post.id}`} aria-label={post.title}>
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="img-fluid rounded mb-3"
                      loading="lazy"
                    />
                  </Link>
                  <p className="text-muted mb-1">
                    {new Date(post.date).toLocaleDateString('de-DE')}
                  </p>
                  <h3 className="h5">
                    <Link to={`/blog/${post.id}`} className="text-dark">
                      {post.title}
                    </Link>
                  </h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="btn btn-link p-0">
                    Weiterlesen →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* ❌ Sayfalama kaldırıldı — tüm yazılar tek sayfada */}
        </div>
      </section>

      {/* ✅ Footer’dan hemen önce global iletişim formu */}
      <ContactFormSection />
    </React.Fragment>
  );
};

export default BlogMain;