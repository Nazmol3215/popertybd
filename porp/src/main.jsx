import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTopButton from './Layouts/ScrollToTopButton.jsx';
import SocialMediaIcons from './Layouts/SocialMediaIcons.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
<SocialMediaIcons />
    <ScrollToTopButton />
    <App />
  </StrictMode>
)