import React from 'react';
import BaseLayout from './components/layouts/BaseLayout/BaseLayout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageBody from './components/PageBody/PageBody';

function App() {
  return (
    <BaseLayout>
      <BaseLayout.Header>
        <Header />
      </BaseLayout.Header>
      <BaseLayout.Main>
        <PageBody />
      </BaseLayout.Main>
      <BaseLayout.Footer>
        <Footer />
      </BaseLayout.Footer>
    </BaseLayout>
  );
}

export default App;
