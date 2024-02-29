'use client'
import {FC, useState} from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {Box, IconButton, Typography } from "@mui/material";
import {HomeOutlinedIcon, ArrowForwardIosIcon, ArrowBackIosIcon, PeopleOutlinedIcon, ReceiptOutlinedIcon, BarChartOutlinedIcon, MapOutlinedIcon, GroupsIcon, OndemandVideoIcon, VideoCallIcon, WebIcon, 
    QuizIcon, WysiwygIcon, ManageHistoryIcon, SettingsIcon, ExitToAppIcon,} from "./Icon"
import avatarDefault from "../../../../public/assests/avatar.png";
import { useSelector } from 'react-redux';
import Link from "next/link";
import Image from "next/image";
import { useTheme } from 'next-themes';


interface itemProps  {
    title: string;
    to: string;
    icon: JSX.Element;
    selected: string;
    setSelected: any;
}

const Item: FC<itemProps> = ({title, to, icon, selected, setSelected}) => {
    return (
        <MenuItem active={selected === title} onClick={() => setSelected(title)} icon={icon}>
            <Typography className='!text-[16px] !font-Poppins' >{title}</Typography>
        </MenuItem>
    );
};

const AdminSidebar= () => {
    return (
        <div>
            Admin Sidebar
        </div>
    );
}

export default AdminSidebar;
