import React from 'react';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';


const img_set = [
  {
    src: require('../assets/images/full/sakura/15.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/15.jpg'),
    title: 'Sakura',
    desc: 'Nakameguro Sakura',
    url: '/sakura',
  },
  {
    src: require('../assets/images/full/fuji/01.jpg'),
    thumbnail: require('../assets/images/thumbnails/fuji/01.jpg'),
    title: 'Mt Fuji',
    desc: '',
    url: '/fuji',
  },
  {
    src: require('../assets/images/full/night/02.jpg'),
    thumbnail: require('../assets/images/thumbnails/night/02.jpg'),
    title: 'Nightscape',
    desc: '',
    url: '/night',
  },

];
const IndexPage = () => (
  <Layout>
    <Gallery images={img_set} />
  </Layout>
);

export default IndexPage;
