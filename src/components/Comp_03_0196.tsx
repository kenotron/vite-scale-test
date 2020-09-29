// Comp_03_0196
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0980 from './Comp_04_0980';
import Comp_04_0981 from './Comp_04_0981';
import Comp_04_0982 from './Comp_04_0982';
import Comp_04_0983 from './Comp_04_0983';
import Comp_04_0984 from './Comp_04_0984';

const Comp_03_0196: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0196
      <div>
      <Comp_04_0980></Comp_04_0980>';
<Comp_04_0981></Comp_04_0981>';
<Comp_04_0982></Comp_04_0982>';
<Comp_04_0983></Comp_04_0983>';
<Comp_04_0984></Comp_04_0984>';
        </div>
      </div>;
};

export default Comp_03_0196;
