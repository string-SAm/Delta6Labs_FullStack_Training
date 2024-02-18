import React, { useState } from 'react';
 
// Toggle component that uses the render props pattern

 const RenderProps = ({ render }) => {

  const [isToggled, setIsToggled] = useState(false);
 
  const toggle = () => {

    setIsToggled(prevToggle => !prevToggle);

  };
 
  // Call the render function and pass the toggle state and toggle function
  <div>

  <RenderProps
  
    render={(isToggled, toggle) => (
  
      <div>
  
        <button onClick={toggle}>
  
          {isToggled ? 'ON' : 'OFF'}
  
        </button>
  
        <p>{isToggled ? 'The button is ON' : 'The button is OFF'}</p>
  
      </div>
  
    )}
  
  />
  
  <RenderProps
  
    render={(isToggled, toggle) => (
  
      <div>
  
        <label>
  
          <input type="checkbox" checked={isToggled} onChange={toggle} />
  
          {isToggled ? 'Enabled' : 'Disabled'}
  
        </label>
  
      </div>
    )}
      />
      </div>

  return render(isToggled, toggle);


  

};
export default RenderProps
// Example usage of the Toggle component with custom rendering logic


