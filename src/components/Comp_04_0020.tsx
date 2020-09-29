// Comp_04_0020
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0100 from './Comp_05_0100';
import Comp_05_0101 from './Comp_05_0101';
import Comp_05_0102 from './Comp_05_0102';
import Comp_05_0103 from './Comp_05_0103';
import Comp_05_0104 from './Comp_05_0104';

const Comp_04_0020: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0020
      <div>
      <Comp_05_0100></Comp_05_0100>';
<Comp_05_0101></Comp_05_0101>';
<Comp_05_0102></Comp_05_0102>';
<Comp_05_0103></Comp_05_0103>';
<Comp_05_0104></Comp_05_0104>';
        </div>
      </div>;
};

export default Comp_04_0020;
