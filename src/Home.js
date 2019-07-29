import React from 'react';
import { Layout } from './components/Layout';
import { SearchBar } from './components/SearchBar'
export default function Home() {
  return (
    <React.Fragment>
      <Layout>
        <SearchBar/>
      </Layout>
    </React.Fragment>
  )
}
