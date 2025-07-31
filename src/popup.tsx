import React from 'react';
import ReactDOM from 'react-dom/client';
// import { confirmationForm } from '../UIComponents/confirmationForm.tsx';
import { ConfirmationForm } from '../UIComponents/ConfirmationForm';

// ReactDOM.render(
//   <React.StrictMode>
//     <ConfirmationForm />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ConfirmationForm />
    </React.StrictMode>
  );
} else {
  console.error('No #root element found');
}