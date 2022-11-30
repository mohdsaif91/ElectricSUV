import React, { useEffect } from 'react';
import Head from 'next/head';
import {
  Placeholder,
  getPublicUrl,
  LayoutServiceData,
  Field,
} from '@sitecore-jss/sitecore-jss-nextjs';
// import Navigation from 'src/Navigation';
import Scripts from 'src/Scripts';
import Navigation from './Navigation';
import Aos from 'aos';

// Prefix public assets with a public URL to enable compatibility with Sitecore editors.
// If you're not supporting Sitecore editors, you can remove this.
const publicUrl = getPublicUrl();

interface LayoutProps {
  layoutData: LayoutServiceData;
}

interface RouteFields {
  [key: string]: unknown;
  pageTitle: Field;
}

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  useEffect(() => {
    
    Aos.init();    
  }, [])
  
  const { route } = layoutData.sitecore; // data-

  const fields = route?.fields as RouteFields;

  return (
    <>
      <Scripts />
      <Head>
        <title>{fields.pageTitle.value.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" cross-origin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" cross-origin="anonymous"></script>
      </Head>
      {/* <Navigation/> */}
      {/* root placeholder for the app, which we add components to using route data */}
      <div className="main-container" data-spy="scroll" data-target="#suv-navbar" data-offset="0">
        {route && <Placeholder name="jss-main" rendering={route} />}
        {/* <Slidebar /> */}
      </div>
    </>
  );
};

export default Layout;
