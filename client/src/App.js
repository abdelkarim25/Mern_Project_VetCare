import {RouterProvider, createBrowserRouter, Outlet} from "react-router-dom";
import Layout from "./Layout.jsx";
import Welcome from"./components/Welcom.jsx";
import Owners from "./components/pages/owners/Owners.jsx";
import CreateOwner from "./components/pages/owners/components/CreateOwner.jsx";
import EditOwner from "./components/pages/owners/components/EditOwner.jsx";
import CreatePet from "./components/pages/owners/components/CreatePet.jsx";
import EditPet from "./components/pages/owners/components/EditPet.jsx";
import Info from "./components/pages/owners/components/Info.jsx";
import CreateVisit from "./components/pages/owners/components/CreateVisit.jsx";
import EditVisit from "./components/pages/owners/components/EditVisit.jsx";

import Verter from "./components/Veter.jsx";



function App() {
    // const router = createBrowserRouter([
    //     {
    //         path:"/",
    //         element:<Welcome/>
    //     },
    //     {
    //         path:"/home",
    //         element:<Welcome/>
    //     },
    //     {
    //         path:"/owners",
    //         element:<Owners/>
    //     },
    //     {
    //         path:"/VETERINARIANS",
    //         element:<Verter/>
    //     },
    //     {
    //         path:"/owner/create",
    //         element:<Create />
    //     },
    //     {
    //         path:"/FindOwner",
    //         element:<OwnerInfo/>
    //     },
    //     {
    //         path:"/UpdateOwner",
    //         element:<UpdateOwner/>
    //     },
    //     {
    //         path:"/AddPet",
    //         element:<AddPet/>
    //     },
    //     {
    //         path:"/AddVisit",
    //         element:<VisitPet/>
    //     },
    //     {
    //         path:"/UpdatePet",
    //         element:<UpDatePet/>
    //     },
    //     {
    //         path:"/OwnerInfo",
    //         element:<OwnerInfo/>
    //     },
    //     {
    //         path:"/owner/:id",
    //         element:<Result/>
    //     },
    // ])

    const router_ = createBrowserRouter([
        {
            path:"/",
            element: <Layout />,
            children: [
                { index: true, element: <Welcome /> },
                { path: "home", element: <Welcome /> },
                { path: "VETERINARIANS", element: <Verter /> },
                { path: "owners", element: <Owners /> },
                { path: "owners/create", element: <CreateOwner /> },
                { path: "owners/:id", element: <Info /> },
                { path: "owners/:id/update", element: <EditOwner /> }, /////////
                { path: "owners/:id/pets/create", element: <CreatePet /> },
                { path: "UpdatePet", element: <EditPet /> },
                { path: "owners/:id/pets/:petId/edit", element: <EditPet /> },
                { path: "owners/:id/pets/:petId/visits/create", element: <CreateVisit /> },
                { path: "owners/:id/pets/:petId/visits/:visitId/edit", element: <EditVisit /> },
            ]
        }
    ])


    return (
        
    // <div className="App">
    //     <Navbar />
    //         <RouterProvider router={router}></RouterProvider>
    //     <Footer />
    // </div>

        <div className="App">
            <RouterProvider router={router_} />
        </div>
    );
}

export default App
