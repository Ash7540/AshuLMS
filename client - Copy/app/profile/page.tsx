/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { FC, useState } from 'react';
import Protected from '../hooks/useProtected';
import Heading from '../utils/Heading';
import Header from '../components/Header'
import Profile from "../components/Profile/Profile"
import { useSelector } from 'react-redux';

type Props = {}

const page: FC<Props> = (props) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const [route, setRoute] = useState("Login");
    const {user} = useSelector((state:any) => state.auth)
    return (
        <div>
            <Protected>
                <Heading
                    title={`${user?.name} profile - VinciExam Pro`}
                    description="Elevate your exam performance with VinciExam Pro, the ultimate exam preparation app by VinciTech"
                    keywords='Programming, Technology, Education, Software, Data Science, Development'
                />
                <Header open={open} setOpen={setOpen} activeItem={activeItem} setRoute={setRoute} route={route} />
                <Profile user={user} />
            </Protected>
        </div>
    )
}

export default page;