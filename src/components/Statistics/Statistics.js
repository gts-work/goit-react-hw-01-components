import React from "react";
import PropTypes from "prop-types";
import StatisticItem from "./StatisticItem";

const Statistics = ({ title, stats }) => (
    <section class="statistics">
        <h2 class="title">{title}</h2>

        <ul class="stat-list">
            {stats.map((stat) => (
                <StatisticItem
                    id={stat.id}
                    label={stat.label}
                    percentage={stat.percentage}
                />
            ))}
        </ul>
    </section>
);

Statistics.defaultProps = {
    title: "Upload stats",
};

Statistics.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    stats: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
};

export default Statistics;
