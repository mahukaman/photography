import React from 'react';

import Layout from '../components/Layout';
import Gallery from '../components/GalleryChildren';

const img_set = [
  {
    src: require('../assets/images/full/sakura/15.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/15.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/14.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/15.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/13.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/13.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/12.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/12.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/11.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/11.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/10.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/10.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/09.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/09.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/08.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/08.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/07.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/07.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/06.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/06.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/05.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/05.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/04.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/04.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/03.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/03.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/02.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/02.jpg'),
    title: '',
    desc: '',
  },
  {
    src: require('../assets/images/full/sakura/01.jpg'),
    thumbnail: require('../assets/images/thumbnails/sakura/01.jpg'),
    title: '',
    desc: '',
  },
];
const SakuraPage = () => (
  <Layout>
    <Gallery images={img_set} />
  </Layout>
);

export default SakuraPage;
