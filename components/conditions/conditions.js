import PropTypes from 'prop-types';
import Card from './card';

function Conditions({ data }) {
    if (!data || !data.length) return <></>;
    return (
        data.map((item, index) => (<Card element={item} key={`conditions_${index}`} />))
    )
}

Conditions.propTypes = {
    data: PropTypes.array,
};

Conditions.defaultProps = {
    data: [],
};


export default Conditions