import React from 'react';

import Layout from '../components/Layout';
import Gallery from '../components/GalleryChildren';

const img_set = [
  {
    src: require('../assets/images/full/fuji/06.jpg'),
    thumbnail: require('../assets/images/thumbnails/fuji/06.jpg'),
    title: 'Temple',
    desc: 'Patrons gaze at the majesty',
  },
  {
    src: require('../assets/images/full/fuji/05.jpg'),
    thumbnail: require('../assets/images/thumbnails/fuji/05.jpg'),
    title: 'Mt Fuji',
    desc: '',
  },
  {
    src: require('../assets/images/full/fuji/04.jpg'),
    thumbnail: require('../assets/images/thumbnails/fuji/04.jpg'),
    title: 'Mt Fuji at Dusk',
    desc: '',
  },
  {
    src: require('../assets/images/full/fuji/03.jpg'),
    thumbnail: require('../assets/images/thumbnails/fuji/03.jpg'),
    title: 'Temple Dragon',
    desc: '',
  },
  {
    src: require('../assets/images/full/fuji/02.jpg'),
    thumbnail: require('../assets/images/thumbnails/fuji/02.jpg'),
    title: 'Tree Engulfed by Mt Fuji',
    desc: '',
  },
  {
    src: require('../assets/images/full/fuji/01.jpg'),
    thumbnail: require('../assets/images/thumbnails/fuji/01.jpg'),
    title: 'Mt Fuji',
    desc: '',
  },

];
const FujiPage = () => (
  <Layout>
    <Gallery images={img_set} />
  </Layout>
);

export default FujiPage;
