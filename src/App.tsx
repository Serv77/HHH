/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Dining } from "./pages/Dining";
import { Hotel } from "./pages/Hotel";
import { Events } from "./pages/Events";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dining" element={<Dining />} />
        <Route path="hotel" element={<Hotel />} />
        <Route path="events" element={<Events />} />
      </Route>
    </Routes>
  );
}
