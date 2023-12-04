import React, { useState } from 'react';
import { getQt2KMpn } from 'mpn-lookup/mpn.lookup';

export default function QTLForm() {
  const [in2KL, setIn2KL] = useState(0);
  const [in2KS, setIn2KS] = useState(0);

  function mpn2K(in2KL, in2KS) {
    let mpn2KList = [];
    if (in2KL >= 0 && in2KL <= 49 && in2KS >= 0 && in2KS <= 48) {
      mpn2KList = getQt2KMpn(in2KL, in2KS);
    }

    return (
      <div>
        <h5 data-testid={'qt2k-mpn-val'}>MPN: {mpn2KList[1]}</h5>
        <label data-testid={'qt2k-conf-label'} style={{ color: '#61dafb' }}>
          95% Confidence Range
        </label>
        <br />
        <span>
          Low: {mpn2KList[0]} -- High: {mpn2KList[2]}
        </span>
      </div>
    );
  }

  return (
    <div>
      <label>
        <label id={'qt2k-title-label'} style={{ color: '#61dafb' }}>
          QuantiTray2000&reg;
        </label>
        <br />
        <br />
        {/* eslint-disable-next-line max-len */}
        Enter Large Well Count:{' '}
        <input
          name={'QT2KLinput'}
          id={'qt2klinput'}
          value={in2KL}
          onChange={(e) => setIn2KL(parseInt(e.target.value))}
          type="number"
          min="0"
          max="49"
          size="5"
        />
        <br />
        {/* eslint-disable-next-line max-len */}
        Enter Small Well Count:{' '}
        <input
          name={'QT2KSinput'}
          id={'qt2ksinput'}
          value={in2KS}
          onChange={(e) => setIn2KS(parseInt(e.target.value))}
          type="number"
          min="0"
          max="48"
          size="5"
        />
        <br />
        {<div>{mpn2K(in2KL, in2KS)}</div>}
      </label>
    </div>
  );
}
