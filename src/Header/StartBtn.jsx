import './StartBtn.css';

function StartBtn() {
    return (
        <div className="startmenu">
            <h3 className="start-title">Get started with Picsart</h3>

            <div className="piscart-start-btn">
                <div className='piscard-link-block'>
                <ul className="piscard-link">

                    {/* Google */}
                    <li>
                        <a
                            href="https://accounts.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="auth-btn google"
                        >
                            <svg viewBox="0 0 48 48">
                                <path fill="#EA4335" d="M24 9.5c3.1 0 5.7 1.1 7.8 3.1l5.8-5.8C34 3.6 29.4 1.5 24 1.5 14.9 1.5 7.2 6.7 3.4 14.3l6.7 5.2C12 13.3 17.6 9.5 24 9.5z" />
                                <path fill="#4285F4" d="M46.5 24c0-1.6-.1-2.8-.4-4.1H24v8.1h12.7c-.5 3-2.2 5.6-4.8 7.3l7.4 5.7C43.5 37.2 46.5 31.2 46.5 24z" />
                                <path fill="#FBBC05" d="M10.1 28.6c-.5-1.4-.8-2.9-.8-4.6s.3-3.2.8-4.6l-6.7-5.2C1.3 17.2.5 20.5.5 24s.8 6.8 2.9 9.8l6.7-5.2z" />
                                <path fill="#34A853" d="M24 46.5c5.4 0 10-1.8 13.3-4.9l-7.4-5.7c-2 1.4-4.6 2.2-5.9 2.2-6.4 0-12-3.8-13.9-9.3l-6.7 5.2C7.2 41.3 14.9 46.5 24 46.5z" />
                            </svg>
                            Continue with Google
                        </a>
                    </li>

                    {/* Apple */}
                    <li>
                        <a
                            href="https://appleid.apple.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="auth-btn apple"
                        >
                            <svg viewBox="0 0 24 24">
                                <path d="M16.365 1.43c0 1.14-.425 2.08-1.26 2.83-.99.89-2.23 1.41-3.57 1.3-.09-1.08.44-2.1 1.23-2.8.85-.77 2.2-1.36 3.6-1.33z" />
                                <path d="M21.09 17.03c-.46 1.04-.68 1.5-1.27 2.43-.83 1.31-2 2.95-3.46 2.96-1.3.01-1.63-.86-3.39-.86-1.77 0-2.13.84-3.4.88-1.44.06-2.54-1.45-3.37-2.76-2.3-3.63-2.54-7.9-1.12-10.14 1-1.6 2.6-2.55 4.1-2.55 1.6 0 2.6.88 3.9.88 1.26 0 2.03-.88 3.88-.88 1.35 0 2.78.74 3.78 2.01-3.32 1.82-2.78 6.55.35 8.03z" />
                            </svg>
                            Continue with Apple
                        </a>
                    </li>

                    {/* Facebook */}
                    <li>
                        <a
                            href="https://www.facebook.com/login/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="auth-btn facebook"
                        >
                            <svg viewBox="0 0 24 24">
                                <path d="M24 12a12 12 0 10-13.88 11.87v-8.4H7.08V12h3.04V9.36c0-3 1.79-4.66 4.53-4.66 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.96.92-1.96 1.87V12h3.33l-.53 3.47h-2.8v8.4A12 12 0 0024 12z" />
                            </svg>
                            Continue with Facebook
                        </a>
                    </li>

                    {/* Twitter */}
                    <li>
                        <a
                            href="https://twitter.com/i/flow/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="auth-btn twitter"
                        >
                            <svg viewBox="0 0 24 24">
                                <path d="M23.64 4.94c-.83.37-1.72.62-2.65.73a4.6 4.6 0 002.02-2.53c-.9.53-1.9.9-2.96 1.1A4.58 4.58 0 0016.62 3c-2.54 0-4.6 2.06-4.6 4.6 0 .36.04.71.12 1.04-3.82-.19-7.21-2.02-9.48-4.8a4.6 4.6 0 00-.62 2.32c0 1.6.81 3.01 2.04 3.84-.75-.02-1.46-.23-2.08-.57v.06c0 2.23 1.59 4.09 3.7 4.51-.39.1-.8.16-1.22.16-.3 0-.59-.03-.87-.08.59 1.84 2.3 3.18 4.33 3.22A9.2 9.2 0 012 19.54a13 13 0 007.04 2.06c8.45 0 13.08-7 13.08-13.08v-.6c.9-.64 1.68-1.44 2.3-2.35z" />
                            </svg>
                            Continue with Twitter
                        </a>
                    </li>

                </ul>

                <p className="start-btn-descri">
                    By continuing, you agree to our Terms of Use and Privacy Policy
                </p>
                </div>
                
                <div className='start-img-block'>
                    <img className="start-img" src="/images/start-btn.webp" alt="start" />
                </div>
            </div>
        </div>
    );
}

export default StartBtn;
