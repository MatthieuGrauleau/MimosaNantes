import Home from '../pages/Home';
import MentionsLegales from '../pages/MentionsLegales';
import PolitiqueConfidentialite from '../pages/PolitiqueConfidentialite';

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mentions-legales",
    element: <MentionsLegales />,
  },
  {
    path: "/politique-confidentialite",
    element: <PolitiqueConfidentialite />,
  },
]);