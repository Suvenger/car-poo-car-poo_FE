import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Footer } from "./components/Footer"
import { GlobalStyle } from "./styles/GlobalStyle"
import { SHeader } from "./components/Header"
import { Home } from "./components/home/Home"
import { SignUp } from "./components/signup/SignUp"
import { Login } from "./components/login/Login"
import { MyCar } from "./components/mycar/MyCar"
import { Reservation } from "./components/reservation/Reservation"
import { ReservationInfo } from "./components/reservationInfo/ReservationInfo"
import { Admin } from "./components/admin/Admin"

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <SHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mycar" element={<MyCar />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/reservationInfo" element={<ReservationInfo />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
