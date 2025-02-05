import React, {useEffect} from 'react';
import UIX from './Works/Mobileapp';

const UIUX = ({ language, setClick }) => {
  useEffect(() => {
     setClick("apps");
  }, [setClick]); // Ensure it's added to the dependency array
  return <div><UIX language={language} /></div>;
};


export default UIUX
