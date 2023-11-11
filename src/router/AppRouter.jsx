import { Navigate, Route, Routes } from 'react-router-dom'
import World from '../pages/World';


const Us = () => <h1>Unitet States Of America</h1>;
const Technology = () => <h1>Technology</h1>;
const NotFound = () => <h1>NotFound 404</h1>;

function AppRouter() {
    return (
        <>
        <Routes>
            <Route path="world" element={<World/>}/>
            <Route path="us" element={<Us/>}/>
            <Route path="technology" element={<Technology/>}/>
            <Route path="404" element={<NotFound/>}/>

            <Route path="/" element={<Navigate to= "/world"/>}/>
            <Route path="*" element={<Navigate to= "/404"/>}/>
        </Routes>
        </>
    );
}

export default AppRouter;