import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import classes from './Auth.module.css';
const Auth = forwardRef(function Auth({ children }, ref) {
    const modalRef = useRef();

    useImperativeHandle(ref, () => ({
        open: () => {
            modalRef.current.showModal();
        },
        close: () => {
            modalRef.current.close();
        },
    }));
    return createPortal(
        <dialog ref={modalRef} className={classes.modal}>
            <h2>Login / Sign Up</h2>
            <form className={classes.form}>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <span className={classes.cen}>Forget Password?</span>
        </dialog >,
        document.getElementById("modal")
    );
})

export default Auth;