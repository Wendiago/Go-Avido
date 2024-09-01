import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { EventsPage } from "./pages/EventsPage/EventsPage";
import {
  Background,
  Connections,
  Recommendations,
  Following,
  Followers,
} from "./components/ProfileComponents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}>
            <Route index element={<Navigate to="background" />} />
            <Route path="background" element={<Background />}></Route>
            <Route path="recommendations" element={<Recommendations />}></Route>
            <Route path="connections" element={<Connections />}></Route>
            <Route path="following" element={<Following />}></Route>
            <Route path="followers" element={<Followers />}></Route>
          </Route>
          <Route path="/events" element={<EventsPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
