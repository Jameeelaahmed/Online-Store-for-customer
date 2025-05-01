import classes from './Home.module.css'
export default function Home() {
    return (
        <div className={classes.home}>
            <div className={classes.triangle}></div>
            {/* <div style={{ position: "relative", width: "100%", height: "300px", overflow: "hidden" }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    style={{
                        position: "absolute",
                        top: "0",
                        left: 0,
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <path
                        d="
        M 0 100
        L 50 10
        L 100 100
        Z
      "
                        fill="#ccc"
                    />
                </svg>
            </div> */}


        </div>
    )
}