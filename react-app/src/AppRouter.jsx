import { BrowserRouter,Routes,Route } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

export default function AppRouter(){
    return <>
        <BrowserRouter>
        <Routes>
            <Route element={<App/>}>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/profile" element={<Profile/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    </>
}