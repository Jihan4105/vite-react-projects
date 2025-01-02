export default function IndexApp() {
  return (
    <form className="login-form">
      <h2 className="login-title">Login</h2>
      <p className="email-label">Email</p>
      <div className="email-input-box">
        <ion-icon className="email-icon" name="mail-outline"></ion-icon>
        <input type="text" className="email-input" />
      </div>
      <p className="error-text email-error">something is wrong text</p>
      <p className="password-label">Password <span className="login-forgot">Forgot password?</span></p>
      <div className="password-input-box">
        <ion-icon className="password-icon" name="lock-closed-outline"></ion-icon>
        <input type="password" className="password-input" />
      </div>
      <p className="error-text password-error">something is wrong text</p>
      <button className="login-btn">Log in</button>
      <p>Or Sign Up Using</p>
      <div className="google-sign-up">
        <ion-icon className="google-icon" name="logo-google"></ion-icon>
      </div>
      <p>Or Sign Up Using</p>
      <span className="sign-up">SIGN UP</span>
    </form>
  )
}