import React from 'react';
import { Layout } from './components/Layout';
import { SearchBar } from './components/SearchBar';
import { Definitions } from './components/Definitions';
/* import DataFetch from './components/DataFetch'; */

export default function Home() {
  //TODO replace props, conditional rendering for definitions
  return (
    <React.Fragment>
      <Layout>
        <SearchBar/>
        {/* <Definitions word='hello'/>*/}
      </Layout>
    </React.Fragment>
  )
}
