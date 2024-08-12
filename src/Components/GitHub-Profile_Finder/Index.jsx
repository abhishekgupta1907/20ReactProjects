import { useEffect, useState } from "react";
import User from "./User";
import "./Style.css";

export default function GithubProfileFinder() {
    const [userName, SetUserName] = useState("abhishekgupta1907");
    const [userData, SetUserData] = useState(null);
    const [loading, SetLoading] = useState(true);

    const fetchGithubUserData = async () => {
        SetLoading(true);
        const res = await fetch(`https://api.github.com/users/${userName}`);

        const data = await res.json();
        if (data) {
            SetUserData(data);
            SetLoading(false);
            SetUserName("");
        }
    };

    const handleSubmit = () => {
        fetchGithubUserData();
    };

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    if (loading) {
        return <h1>Loading data ! Please wait</h1>;
    }

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input
                    name="search-by-username"
                    type="text"
                    placeholder="Search Github Username..."
                    value={userName}
                    onChange={(event) => SetUserName(event.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {userData !== null ? <User user={userData} /> : null}
        </div>
    );
}
