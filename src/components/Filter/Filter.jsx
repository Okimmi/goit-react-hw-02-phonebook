import PropTypes from 'prop-types';

import { Input, Wrapper } from './Filter.styled';

export const Filter = ({ addFilter }) => {
  return (
    <form>
      <Wrapper>
        <span>Find contacts by name</span>
        <Input type="text" onChange={e => addFilter(e.target.value)} />
      </Wrapper>
    </form>
  );
};

Filter.propTypes = {
  addFilter: PropTypes.func.isRequired,
};
