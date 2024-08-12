import { Routes, Route, Navigate } from "react-router-dom";
export const AppRoutes =()=>{
    return(
<Routes>
    <Route path="/pagina-iniical" element={<p>Pagina Inicial</p>} />

    <Route path="*"  element={ <Navigate to="/pagina-inicial" />} />
</Routes>
    );
}