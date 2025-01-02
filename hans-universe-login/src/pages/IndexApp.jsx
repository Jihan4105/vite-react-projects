export default function IndexApp() {
  return (
    <form className="login-form">
      <h1 className="login-title">Login</h1>
      <p className="email-label">Email</p>
      <div className="email-input-box">
        <label htmlFor="login-email"><ion-icon className="email-icon" name="mail-outline" /></label>
        <input type="text" className="email-input" id="login-email" name="login-email" placeholder="Email" spellCheck="false"/>
      </div>
      <p className="error-text email-error">something is wrong text</p>
      <p className="password-label">Password <span className="login-forgot">Forgot password?</span></p>
      <div className="password-input-box">
        <label htmlFor="login-password"><ion-icon className="password-icon" name="lock-closed-outline" /></label>
        <input type="password" className="password-input" id="login-password" name="login-password" placeholder="PWD" spellCheck="false" />
      </div>
      <p className="error-text password-error">something is wrong text</p>
      <button className="login-btn">Log in</button>
      <p className="orsignup-text">Or Sign Up Using</p>
      <div className="google-sign-up">
        <ion-icon className="google-icon" name="logo-google"></ion-icon>
      </div>
      <p className="orsignup-text">Or Sign Up Using</p>
      <span className="sign-up">SIGN UP</span>
    </form>
  )
}