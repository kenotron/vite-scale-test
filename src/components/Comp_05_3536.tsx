// Comp_05_3536
import React from 'react';
import { incModCount } from '../modCount';


const Comp_05_3536: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_05_3536
      <div>
      
        </div>
      </div>;
};

export default Comp_05_3536;
