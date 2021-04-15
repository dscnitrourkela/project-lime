import * as React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import axios from 'axios';

import Layout from '../components/layout';
import SEO from '../components/seo';

import useFirebase from '../hooks/useFirebase';

const IndexPage = () => {
  const firebase = useFirebase();
  const [data, setData] = React.useState('Loading...');
  const [newData, setNewData] = React.useState('Loading......');

  React.useEffect(() => {
    if (firebase) {
      const fetchData = async () => {
        const firestoreData = await firebase
          .firestore()
          .collection('trial')
          .doc('trialDoc')
          .get();

        const {data: axiosData} = await axios.get(
          'https://hacktoberfest.dscnitrourkela.org/',
        );

        setNewData(axiosData);
        setData(firestoreData.data().message);
      };

      fetchData();
    }
  }, [firebase]);

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>{data}</p>
      <p>{newData}</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt="A Gatsby astronaut"
        style={{marginBottom: `1.45rem`}}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to &quotUsing TypeScript&quot</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
