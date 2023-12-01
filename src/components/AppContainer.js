import AboutForm from './AboutForm';
import QTForm from './QTForm';
import QT2KForm from './QT2KForm';
import QTLForm from './QTLForm';
import React from 'react';
import '../styles/App.css';

export default function AppContainer() {
  return (
    <div className="App">
      <header>
        <h3 data-testid={'mpn-lookup-title'}>
          MPN Lookup For QuantiTray&reg; Product Suite
        </h3>
      </header>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridGap: 20,
        }}
      >
        <div>
          <h5>Why does this even exist?</h5>
          <AboutForm />
        </div>
        <div style={{ paddingLeft: '5px' }}>
          <QTForm />
          <hr />
          <QT2KForm />
          <hr />
          <QTLForm />
        </div>
      </div>
    </div>
  );
}
