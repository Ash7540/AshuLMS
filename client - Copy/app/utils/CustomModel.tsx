import React, {FC} from 'react';
import {Modal, Box} from "@mui/material"

type CustomModelProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: any;
  component: any
  setRoute?: (route: string) => void;
};

const CustomModel: FC<CustomModelProps> = ({open, setOpen, setRoute, component:Component }) => {
    return (
        <Modal 
        open={open}
        onClose = {() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            {/* <Box
            className="absolute top-[50%] left-[50%] -translate-x-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none"
            > */}
            <Box
             className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white dark:bg-slate-900 rounded-8 shadow p-4 outline-none" >


                <Component  setOpen={setOpen} setRoute={setRoute} />
            </Box>
        </Modal>
    );
}

export default CustomModel;
