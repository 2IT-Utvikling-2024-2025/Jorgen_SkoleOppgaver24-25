import { BrowserRouter, Route, Routes,  } from "react-router-dom"
import Layout2 from './Layout2'
import home2 from './Home2'
import Classlist from './Classlist'



function app2() {

    return(
        <BrowserRouter>
            <layout></layout>
            <Routes>
                <Route path='/' />
                <route index element={<Home />} />
            </Routes>
        </BrowserRouter>

    )
}
 

