import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import { useEffect } from "react"

import { useFormik } from "formik"
import TutorialHome from "./tutorial-home"
import TutorialLogin from "./tutorial-login"
import TutorialRegister from "./tutorial-register"
import TutorialVideos from "./tutorial-videos"
import TutorialError from "./tutorial-error"
import TutorialManage from "./tutorial-manage"
import TutorialDetails from "./tutorial-details"
import VideoDetails from "./tutorial-details"
import AddVideo from "./addVideo"
import VideoEdit from "./videoEdit"
import DeleteVideo from "./tutorial-delete"
export default function TutorialIndex() {
    useEffect(() => {
        document.title = "New MongoDB Project"
     }, []);

    return (<>
        <div className="container-fluid">
            <BrowserRouter>
                <header className="bg-dark text-white p-1 m-1 d-flex justify-content-start">
                    <h2>My Tutorial</h2>
                </header>
                <section>
                    <div className="mt-2 row">
                        <div className="col-3">
                            <div>
                                <Link to="/home">Home</Link>

                            </div>
                            <div>
                                <Link to="/register">Register</Link>

                            </div>
                            <div>
                                <Link to="/logIn">Login</Link>

                            </div>
                            <div>
                                <Link to="/videos">Videos</Link>

                            </div>
                            <div>
                                <Link to="/manage">Manage Videos</Link>

                            </div>
                        </div>
                        <div className="col-9">
                            <Routes>
                                <Route path="/" element={<TutorialHome></TutorialHome>} />
                                <Route path="/home" element={<TutorialHome></TutorialHome>} />
                                <Route path="/logIn" element={<TutorialLogin></TutorialLogin>} />
                                <Route path="/register" element={<TutorialRegister></TutorialRegister>} />
                                <Route path="/videos" element={<TutorialVideos></TutorialVideos>} />
                                <Route path="/invalid" element={<TutorialError></TutorialError>} />
                                <Route path="/manage" element={<TutorialManage></TutorialManage>}></Route>
                                <Route path="/videos/:id" element={<VideoDetails></VideoDetails>}> </Route>
                                <Route path="/addvideo" element={<AddVideo></AddVideo>}></Route>
                                <Route path="/updatevideo/:id" element={<VideoEdit></VideoEdit>}></Route>
                                <Route path="/deletevideo/:id" element={<DeleteVideo></DeleteVideo>}></Route>

                            </Routes>
                        </div>

                    </div>
                </section>
            </BrowserRouter>

        </div>
    </>)
}