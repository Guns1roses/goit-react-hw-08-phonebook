import { SelectedText } from './ContactName.styled';

const { useFilter } = require('hooks/useFilter');

const ContactName = ({ name }) => {
  const { filter } = useFilter();

  if (!filter) {
    return <span>{name}</span>;
  }

  const normalizedName = name.toLowerCase();
  const normalizedFilter = filter.toLowerCase();

  const preHighlighted = name.slice(
    0,
    normalizedName.indexOf(normalizedFilter)
  );
  const postHighlighted = name.slice(
    normalizedName.indexOf(normalizedFilter) + normalizedFilter.length
  );
  const highlighted = name.slice(
    normalizedName.indexOf(normalizedFilter),
    normalizedName.indexOf(normalizedFilter) + normalizedFilter.length
  );

  return (
    <span>
      {preHighlighted}
      <SelectedText>{highlighted}</SelectedText>
      {postHighlighted}
    </span>
  );
};

export default ContactName;