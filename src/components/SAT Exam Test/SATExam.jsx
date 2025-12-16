import React, { useState, useEffect } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
import Component6 from './Component6';
import Component7 from './Component7';
import Component8 from './Component8';
import Component9 from './Component9';
import Component10 from './Component10';
import Component11 from './Component11';
import Component12 from './Component12';
import Component13 from './Component13';
import Component14 from './Component14';
import Component15 from './Component15';

export default function SATExam() {
  const [Component, setComponent] = useState('component1');

  useEffect(() => {
    const saved = localStorage.getItem('component');
    if (saved) {
      setComponent(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('component', Component);
  }, [Component]);

  return (
    <div>
      {Component === 'component1' && <Component1 setComponent={setComponent} />}
      {Component === 'component2' && <Component2 setComponent={setComponent} />}
      {Component === 'component3' && <Component3 setComponent={setComponent} />}
      {Component === 'component4' && <Component4 setComponent={setComponent} />}
      {Component === 'component5' && <Component5 setComponent={setComponent} />}
      {Component === 'component6' && <Component6 setComponent={setComponent} />}
      {Component === 'component7' && <Component7 setComponent={setComponent} />}
      {Component === 'component8' && <Component8 setComponent={setComponent} />}
      {Component === 'component9' && <Component9 setComponent={setComponent} />}
      {Component === 'component10' && <Component10 setComponent={setComponent} />}
      {Component === 'component11' && <Component11 setComponent={setComponent} />}
      {Component === 'component12' && <Component12 setComponent={setComponent} />}
      {Component === 'component13' && <Component13 setComponent={setComponent} />}
      {Component === 'component14' && <Component14 setComponent={setComponent} />}
      {Component === 'component15' && <Component15 setComponent={setComponent} />}
    </div>
  );
}
