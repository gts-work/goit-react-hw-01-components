import React from "react";
import PropTypes from "prop-types";

const StatisticItem = ({ id, label, percentage }) => (
    <li class="item" key={id}>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}%</span>
    </li>
);

StatisticItem.propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
