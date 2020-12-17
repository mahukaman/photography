import React from 'react';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const img_set = [
  {
    src: require('../assets/images/full/01.jpg'),
    thumbnail: require('../assets/images/thumbnails/01.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/02.jpg'),
    thumbnail: require('../assets/images/thumbnails/02.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/03.jpg'),
    thumbnail: require('../assets/images/thumbnails/03.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/04.jpg'),
    thumbnail: require('../assets/images/thumbnails/04.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/05.jpg'),
    thumbnail: require('../assets/images/thumbnails/05.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/06.jpg'),
    thumbnail: require('../assets/images/thumbnails/06.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/07.jpg'),
    thumbnail: require('../assets/images/thumbnails/07.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/08.jpg'),
    thumbnail: require('../assets/images/thumbnails/08.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/09.jpg'),
    thumbnail: require('../assets/images/thumbnails/09.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/10.jpg'),
    thumbnail: require('../assets/images/thumbnails/10.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/11.jpg'),
    thumbnail: require('../assets/images/thumbnails/11.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/12.jpg'),
    thumbnail: require('../assets/images/thumbnails/12.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/13.jpg'),
    thumbnail: require('../assets/images/thumbnails/13.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/14.jpg'),
    thumbnail: require('../assets/images/thumbnails/14.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/15.jpg'),
    thumbnail: require('../assets/images/thumbnails/15.jpg'),
    title: '',
    desc: '',
  },
];
const IndexPage = () => (
  <Layout>
    <Gallery images={img_set} />
  </Layout>
);

export default IndexPage;
