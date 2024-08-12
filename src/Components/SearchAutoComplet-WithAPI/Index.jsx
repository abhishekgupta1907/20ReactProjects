import { useEffect, useState } from "react";
import Suggestions from "./Suggestion";

const SearchAutocomplete = () => {
    const [loading, SetLoading] = useState(false);
    const [users, SetUsers] = useState([]);
    const [error, SetError] = useState(null);
    const [searchParam, SetSearchParam] = useState("");
    const [showDropdown, SetShowDropdown] = useState(false);
    const [filteredUsers, SetFilteredUsers] = useState([]);

    const handleChange = (event) => {
        const query = event.target.value.toLowerCase();
        SetSearchParam(query);
        if (query.length > 1) {
            const filteredData =
                users && users.length
                    ? users.filter(
                          (item) => item.toLowerCase().indexOf(query) > -1
                      )
                    : [];
            SetFilteredUsers(filteredData);
            SetShowDropdown(true);
        } else {
            SetShowDropdown(false);
        }
    };

    const handleClick = (event) => {
        SetShowDropdown(false);
        SetSearchParam(event.target.innerText);
        SetFilteredUsers([]);
    };

    const fetchListOfUsers = async () => {
        try {
            SetLoading(true);
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();

            if (data && data.users && data.users.length) {
                SetUsers(data.users.map((userItem) => userItem.firstName));
                SetLoading(false);
                SetError(null);
            }
        } catch (error) {
            SetLoading(false);
            console.log(error);
            SetError(error);
        }
    };

    useEffect(() => {
        fetchListOfUsers();
    }, []);

    // console.log(users, filteredUsers);

    return (
        <div className="search-autocomplete-container">
            {loading ? (
                <h1>Loading Data ! Please wait</h1>
            ) : (
                <input
                    value={searchParam}
                    name="search-users"
                    placeholder="Search Users here..."
                    onChange={handleChange}
                />
            )}

            {showDropdown && (
                <Suggestions handleClick={handleClick} data={filteredUsers} />
            )}
        </div>
    );
};
export default SearchAutocomplete;
