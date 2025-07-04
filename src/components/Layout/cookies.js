
import { useState, useEffect } from "react";

const Cookies = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const handleConsent = (type) => {
        localStorage.setItem("cookie-consent", type);
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="cookie-banner">
            <p className="cookie-text">
                We use cookies to provide a better experience.{" "}
                <a href="/" className="cookie-link">
                    Learn more.
                </a>
            </p>
            <div className="cookie-buttons">
                <button onClick={() => handleConsent("accepted")} className="cookie-btn">
                    Accept
                </button>
                <button onClick={() => handleConsent("rejected")} className="cookie-btn">
                    Reject
                </button>
            </div>
        </div>
    );
};

export default Cookies;

