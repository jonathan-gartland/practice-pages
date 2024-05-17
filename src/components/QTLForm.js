import React, { useState } from 'react';
import { getQtLegio } from 'mpn-lookup/mpn.lookup';

/**
 * QuantiTray 2K Form
 * @return {JSX.Element}
 */
export default function QT2KForm() {
  const [inLarge, setInLarge] = useState(0);
  const [inSmall, setInSmall] = useState(0);

  /**
   * @param {number} inSmall
   * @param {number} inLarge
   * @return {Element}
   */
  function mpnL(inSmall, inLarge) {
    let mpnLList = [];

    if (inLarge >= 0 && inSmall >= 0 && inLarge <= 6 && inSmall <= 90) {
      mpnLList = getQtLegio(inSmall, inLarge);
    }
    if (mpnLList.length === 0) {
      return <h3>Enter valid value please!</h3>;
    }

    return (
      <div>
        <h5> MPN: {mpnLList}</h5>
      </div>
    );
  }

  return (
    <label>
      <label id={'qtl-title-label'} style={{ color: '#61dafb' }}>
        QuantiTray&reg; Legiolert
      </label>
      <br />
      <br />
      Enter Large Well Count:{' '}
      <input
        value={inLarge}
        onChange={(e) => setInLarge(parseInt(e.target.value))}
        type="number"
        min="0"
        max="6"
        style={{ marginLeft: '10px' }}
        width={'34px'}
      />
      <br />
      Enter Small Well Count:{' '}
      <input
        value={inSmall}
        onChange={(e) => setInSmall(parseInt(e.target.value))}
        type="number"
        min="0"
        max="90"
        style={{ marginLeft: '10px' }}
      />
      <br />
      {<div>{mpnL(inSmall, inLarge)}</div>}
    </label>
  );
}
