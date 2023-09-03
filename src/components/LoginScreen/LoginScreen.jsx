const LoginScreen = () => {

    return(
        <div class="container text-center login-back-img"style={{ 
        backgroundImage: `url("https://images.hdqwalls.com/download/ultimate-freedom-4k-5n-1920x1080.jpg")`
        }}>
            <div class="row align-items-end">
                <button type="button" class="btn btn-outline-info">Log In</button>
            </div>

            <div class="row align-items-end">
                <button type="button" class="btn btn-outline-info">Sign Up</button>
            </div>

            <div class="row align-items-end">
                <button type="button" class="btn btn-outline-info">Skip</button>
            </div>
        </div>   
    )
}

export default LoginScreen;
