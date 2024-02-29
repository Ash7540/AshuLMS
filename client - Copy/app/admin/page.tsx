'use client'
import React, { FC, useState } from 'react';
import Heading from '../utils/Heading';
import AdminSidebar from "../components/Admin/Sidebar/AdminSidebar"
import AdminProtected from '../hooks/adminProtected';

type Props = {

}

const Page: FC<Props> = (props) => {
    return (
        <div>
            <AdminProtected>
                <Heading
                    title="VinciExam Pro -Admin"
                    description="Elevate your exam performance with VinciExam Pro, the ultimate exam preparation app by VinciTech"
                    keywords='Programming, Technology, Education, Software, Data Science, Development'
                />
                <div className="flex h-[200vh]">
                    <div className="1500px:w-[16%] w-1/5">
                        <AdminSidebar />
                    </div>
                    <div className="w-[85%]">

                    </div>
                </div>
            </AdminProtected>
        </div>
    );
}

export default Page;
