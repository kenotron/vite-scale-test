// Comp_05_4137
import React from 'react';
import { incModCount } from '../modCount';


const Comp_05_4137: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_05_4137
      <div>
      
        </div>
      </div>;
};

export default Comp_05_4137;
