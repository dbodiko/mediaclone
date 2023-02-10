import React from 'react';
import {IconButton, Paper} from "@mui/material";
import {Search} from "@mui/icons-material";

const SearchBar = () => {
    return (
        <Paper component="form"
               onSubmit={() => {
               }}
               sx={{
                   border: 1,
                   borderRadius: 20,
                   pl: '2',
                   boxShadow: 'none',
                   mr: {sm: 5}
               }}>

            <input type="text"
                   className="search-bar"
                   placeholder="Search..."
                   value=""
                   onChange={() => {
                   }}/>
            <IconButton type="submit" sx={{p: '10px', color: 'red'}}>
                <Search/>
            </IconButton>

        </Paper>
    );
};

export default SearchBar;