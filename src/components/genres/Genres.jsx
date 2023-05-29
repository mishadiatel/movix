import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";
import PropTypes from "prop-types";

const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home);

    return (
        <div className="genres">
            {data?.map((g) => {
                if (!genres[g]?.name) return;
                return (
                    <div key={g} className="genre">
                        {genres[g]?.name}
                    </div>
                );
            })}
        </div>
    );
};

export default Genres;

Genres.propTypes = {
    data: PropTypes.array,
}