import {
    Box,
    Typography,
    OutlinedInput,
    Button
} from "@mui/material";
import { useForm } from "react-hook-form";
import {useApp}  from "../AppProvider"
import { useNavigate } from "react-router";

export default function Login(){
    const {setAuth} =useApp();
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors},} = useForm();

    const submitLogin=()=>{
        setAuth(true);
        navigate("/");
    };

    return (
        <Box>
            <Typography>Login</Typography>
            <form onSubmit={handleSubmit(submitLogin)}>
            <OutlinedInput {...register("username",{required:true})} fullWidth sx={{mt : 2}} placeholder="username" />
            {errors.username && <Typography color="error">user name is required</Typography>}
            <OutlinedInput {...register("password",{required:true})} fullWidth sx={{mt : 2}} type="password" placeholder="password" />
            {errors.password && <Typography color="error">password is required</Typography>}
            <Button sx={{mt : 2}} fullWidth type="submit" variant="contained" >Login</Button>
            </form>
        </Box>
    );
}