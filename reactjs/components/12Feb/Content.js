import React from 'react';
import { useTheme } from './ThemeContext';
 
function Content() {
  const { theme } = useTheme();
 
  return (
<div className={`content ${theme}`}>
<p>This is some content with the current theme: {theme}</p>
</div>
  );
}
 
export default Content;