import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Catalog } from "./pages/Catalog";
import { Cart } from "./pages/Cart";

export function AppRoutes(){
    return(
        <Router>
            <Routes>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            </Routes>
        </Router>
    )
}