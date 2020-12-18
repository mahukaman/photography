import React from 'react';

import Layout from '../components/Layout';
import Gallery from '../components/GalleryChildren';

const img_set = [
  {
    src: require('../assets/images/full/sakura/15.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/15.jpg'),
    title: 'Reflection of Hanami',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/14.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/15.jpg'),
    title: 'Sakura over the River',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/13.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/13.jpg'),
    title: 'Stop',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/12.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/12.jpg'),
    title: 'Enjoying Spring',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/11.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/11.jpg'),
    title: 'Lonely Sakura',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/10.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/10.jpg'),
    title: 'Reaching for Sunlight',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/09.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/09.jpg'),
    title: 'Full Bloom',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/08.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/08.jpg'),
    title: 'Basking in the Sun',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/07.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/07.jpg'),
    title: 'Draping Sakura',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/06.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/06.jpg'),
    title: 'Near the End',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/05.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/05.jpg'),
    title: 'The Sakura',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/04.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/04.jpg'),
    title: 'Stetched out Hand',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/03.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/03.jpg'),
    title: 'Pink',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/02.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/02.jpg'),
    title: 'Meguro River',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/01.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/01.jpg'),
    title: 'Hanami',
    desc: '',
  },
];
const SakuraPage = () => (
  <Layout>
    <Gallery images={img_set} />
  </Layout>
);

export default SakuraPage;
