import React from 'react'
import { createContext, useState, useEffect } from 'react'
import Profile from '../component/sidebar'
import Sidebar from '../component/sidebar'
import Timeline from '../component/timeline'
import {getUser} from '../services/auth'

export const reloadContext = createContext()

const HomePage = () => {

    const [listPost, setListPost] = useState([])
    const [profile, setProfile] = useState("")

    const getprofile = async () => {
        let response = await getUser()
        setProfile(response)

    }


    useEffect(() => {
        getprofile()
    },[])

    return (
        <div>

            <reloadContext.Provider></reloadContext.Provider>
            <Sidebar/>
            <h1>TIMELINE</h1>
            <h1>WIDGET</h1>
        </div>
    )
}

export default HomePage