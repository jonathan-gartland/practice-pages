import React from 'react';

export default function AboutForm() {
  return (
    <div
      id="aboutdiv"
      style={{
        borderRight: 'solid',
        marginRight: '5px',
        paddingRight: '15px',
      }}
    >
      <div style={{ textAlign: 'left' }} data-testid={'about-text-id'}>
        Some folks work in water testing facilities that
        <br />
        utilize the Idexx QuantiTray&reg; System for their
        <br />
        quantifying analysis on water samples.
        <br />
        <br />
        see link for more info:
        <br />
        <a
          style={{ color: 'teal' }}
          href="https://www.idexx.com/en/water/water-products-services/quanti-tray-system/"
        >
          https://www.idexx.com/en/water/water-products-services/quanti-tray-system/
        </a>
        <br />
        <br />
        To use the results of the incubator, a technician
        <br />
        will need to count the positive sample wells, and then
        <br />
        cross reference one of three PDF files with the
        <br />
        corresponding MPN and related 95% confidence range.
        <br />
        Here is a link to one of the files, the one for the <br />
        <a
          style={{ color: 'teal' }}
          href="https://www.idexx.com/files/qt97mpntable.pdf"
        >
          QuantiTray2000&reg;
        </a>
        , the largest one.
        <br />
        <br />
        To be helpful, the MPN Generator was created.
        <br />
        <a
          style={{ color: 'teal' }}
          href="https://www.idexx.com/en/water/resources/mpn-generator/"
        >
          https://www.idexx.com/en/water/resources/mpn-generator/
        </a>
        <br />
        A Desktop solution to be installed on your Windows machine...
        <br />
        well you can read about it at that link for the revised version,
        <br />
        but a tl;dr summary would be that this particular software was written
        <br />
        without any planning, research, or demand, so that one engineer
        <br />
        could practice with Delphi C back in the 1990s.
        <br />
        This has been referred to in the past as &quot;Deanware&quot; at this
        <br />
        particular sales and manufacturing organization.
        <br />
        <br />
        A decade after the buggy implementation was released to
        <br />
        the public - The confidence range values were coded in backwards,
        <br />
        the save drive was hardcoded as E: despite many people not having
        <br />
        an E: drive set up, etc...- the types of problems requirements
        <br />
        gathering, testing and debugging would have caught/prevented.
        <br />
        <br />
        Anyway this is getting way too long so to cut short my justification
        <br />
        for writing this app other than learning to use React. This is a usable
        <br />
        implementation of that prior desktop app that needlessly overcomplicates
        <br />
        the task it is supposed to be helping with.
        <br />
        <br />
        <div data-testid={'last-sentence-testid'}>
          Hope this is useful to the three of you that need it.
        </div>
      </div>
    </div>
  );
}
