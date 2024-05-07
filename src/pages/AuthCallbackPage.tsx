import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
    const navigate = useNavigate();

    const {user} = useAuth0();
    const { createUser } = useCreateMyUser();

    //store a state value. if changes -> not trigger the component to re-render
    const hasCreatedUser = useRef(false);
    //diff useStatee -> every thing re-render

    useEffect(() => {
        if(user?.sub && user?.email && !hasCreatedUser.current) {
            //neu chua co (!hascreated) thi se tao moi
            createUser({auth0Id: user.sub, email: user.email});
            hasCreatedUser.current = true;
        }
        navigate("/");
    }, [createUser, navigate, user]);


    return <>Loading...</>
};

export default AuthCallbackPage;