import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = ({ width = '60' }) => {
  return (
    <LoaderWrapper>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width={width}
        visible={true}
      />
    </LoaderWrapper>
  );
};

export default Loader;

Loader.propTypes = {
  width: PropTypes.string,
};