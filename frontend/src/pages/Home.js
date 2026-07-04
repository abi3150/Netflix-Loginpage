import "./Home.css";

function Home() {

    return (

        <div className="home">

            <h1>🎉 Login Successful</h1>

            <h2>Welcome to Netflix Clone</h2>

            <button onClick={() => window.location.href = "/"}>
                Logout
            </button>

        </div>

    );

}

export default Home;