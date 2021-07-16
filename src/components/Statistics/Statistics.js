import React from "react";
import PropTypes from "prop-types";
import StatisticItem from "./StatisticItem";

const Statistics = ({ title, stats }) => (
    <section class="statistics">
        <h2 class="title">{title}</h2>

        <ul class="stat-list">
            {stats.map((stat) => (
                <StatisticItem
                    stat={stat}
                />
            ))}
        </ul>
    </section>
);

Statistics.defaultProps = {
    title: "Upload stats",
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
};

export default Statistics;
