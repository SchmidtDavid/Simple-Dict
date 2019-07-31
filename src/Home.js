import React from 'react';
import { Layout } from './components/Layout';
import { SearchWidget } from './components/SearchWidget';

export default function Home() {
  //TODO replace props, conditional rendering for definitions
  return (
    <React.Fragment>
      <Layout>
        <SearchWidget/>
      </Layout>
    </React.Fragment>
  )
}
