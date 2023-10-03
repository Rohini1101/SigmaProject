import axios from "axios"
import { useEffect, useState } from "react"
import { addMethod } from "yup"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"


export default function TutorialManage() {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        axios({ method: "GET", url: "http://127.0.0.1:5050/videos" }).then((res) => {
            console.log(res.data)
            setVideos(res.data)
        })
    }, [])
    return (
        <>
            <h2>VIdeo Manage</h2>
            <div><Link to="/addvideo" className="btn btn-info" >+ Add New Video</Link></div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Preview</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {videos.map((vid) => (
                        <tr key={vid.id}>
                            <td>{vid.title}</td>
                            <td>
                                <iframe width="100" height="100" src={vid.url}></iframe>
                            </td>
                            <td>
                                <Link to={`/videos/${vid.id}`} className="btn btn-primary me-2"><span className="bi bi-eye">&nbsp; View Details</span></Link>
                                <Link to={`/updatevideo/${vid.id}`} className="btn btn-info me-2"><span className="bi bi-pen">&nbsp; Edit</span></Link>
                                <Link to={`/deletevideo/${vid.id}`} className="btn btn-warning"><span className="bi bi-trash">&nbsp; Delete</span></Link>

                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}