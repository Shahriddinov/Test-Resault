import React, { useState } from 'react';
import "./settngs.scss"
const Settings = () => {
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('en');
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    const toggleNotifications = () => {
        setNotificationsEnabled(!notificationsEnabled);
    };

    return (
        <div className={`settings-page ${theme}`}>
            <h2>Settings</h2>

            {/* Profile Settings */}
            <section>
                <h3>Profile</h3>
                <button>Change Profile Picture</button>
                <button>Update Personal Info</button>
                <button>Change Password</button>
            </section>

            {/* App Preferences */}
            <section>
                <h3>App Preferences</h3>
                <label>
                    Language:
                    <select onChange={(e) => changeLanguage(e.target.value)} value={language}>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        {/* Add other languages here */}
                    </select>
                </label>
                <label>
                    Theme:
                    <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</button>
                </label>
            </section>

            {/* Notifications */}
            <section>
                <h3>Notifications</h3>
                <label>
                    Enable Notifications:
                    <input
                        type="checkbox"
                        checked={notificationsEnabled}
                        onChange={toggleNotifications}
                    />
                </label>
            </section>

            {/* Privacy & Security */}
            <section>
                <h3>Privacy & Security</h3>
                <button>Change Privacy Settings</button>
                <button>Enable Two-Factor Authentication</button>
                <button>Deactivate Account</button>
            </section>

            {/* Subscription */}
            <section>
                <h3>Subscription</h3>
                <p>Current Plan: Premium</p>
                <button>Change Plan</button>
            </section>
        </div>
    );
};

export default Settings;
