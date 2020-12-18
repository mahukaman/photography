import React from 'react';

import Layout from '../components/Layout';
import Gallery from '../components/GalleryChildren';

const img_set = [
  {
    src: require('../assets/images/full/night/06.jpg'),
    thumbnail: require('../assets/images/thumbnails/night/06.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/night/05.jpg'),
    thumbnail: require('../assets/images/thumbnails/night/05.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/night/04.jpg'),
    thumbnail: require('../assets/images/thumbnails/night/04.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/night/03.jpg'),
    thumbnail: require('../assets/images/thumbnails/night/03.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/night/02.jpg'),
    thumbnail: require('../assets/images/thumbnails/night/02.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/night/01.jpg'),
    thumbnail: require('../assets/images/thumbnails/night/01.jpg'),
    title: '',
    desc: '',
  },

];
const NightPage = () => (
  <Layout>
    <Gallery images={img_set} />
  </Layout>
);

export default NightPage;
