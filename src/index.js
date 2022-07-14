import { createRoot } from 'react-dom/client';

import { HeroesApp } from './HeroesApp';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<HeroesApp tab="home" />);