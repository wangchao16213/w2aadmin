import Grid from '@mui/material/Unstable_Grid2';
import {Alert, Button, Card, CardContent, Fade, TextField, Typography} from "@mui/material";
import classes from './Login.module.css';
import {useState} from "react";
import Title from "@/Components/base/Title/Title.jsx";

export default function Register() {

    const [formData,setFormData] = useState({'email':'','password':'','repassword':''});
    const [showAlert, setShowAlert] = useState(false);
    const [msg, setMsg] = useState({type: 'success', text: ''});

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        if (formData.email == '' || formData.password == ''){
            setMsg({type: 'error', text: '用户名或者密码不能为空'});
            setShowAlert(true);
            return;
        }

        if (formData.password !== formData.repassword){
            setMsg({type: 'error', text: '两次密码输入不一致'});
            setShowAlert(true);
            return;
        }


        axios.post('/doRegister', formData).then(function (res) {
            var data = res.data;
            setMsg({type: 'error', text: data.msg});
            setShowAlert(true);
        });


    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <Grid container>
            <Grid display="flex" style={{position: 'absolute', width: '100%'}} justifyContent="center"
                  alignItems="center">
                <Fade in={showAlert}>
                    <Alert severity={msg.type}>{msg.text}</Alert>
                </Fade>
            </Grid>

            <Grid display="flex" style={{width: '100%', height: '100vh'}} justifyContent="center" alignItems="center">
                <Card style={{width: 500, minHeight: 400}}>
                    <CardContent style={{marginTop: '10%'}}>
                        <form onSubmit={handleSubmit}>

                            <Grid display={"flex"} justifyContent="center" alignItems="center" flexDirection={"column"}>
                                <Title text={"注册"}></Title>
                                <TextField className={classes.loginItem} name={"email"} type="email" label="邮箱"
                                           variant="outlined" value={formData.email} onChange={handleChange} required/>
                                <TextField className={classes.loginItem} name={"password"} type="password"
                                           label="密码" value={formData.password} variant="outlined" onChange={handleChange} required />
                                <TextField className={classes.loginItem} name={"repassword"} type="password"
                                           label="重复密码" value={formData.repassword} variant="outlined" onChange={handleChange} required/>
                            </Grid>
                            <Grid display={"flex"} style={{paddingLeft: 0, marginTop: 30}} justifyContent="space-evenly"
                                  alignItems="center">
                                <Button className={classes.loginBtn} type={"submit"} variant="contained">注册</Button>
                                <Button className={classes.loginBtn} href={"/login"}>登录</Button>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
