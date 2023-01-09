import PropTypes from 'prop-types';
import { Logo, Title, TitleWrapper } from './PageTitle.styled';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const PageTitle = ({ title }) => {
  return (
    <TitleWrapper>
      <Logo to="/">
        <AutoStoriesIcon sx={{ fontSize: 80, mb: 3 }} />
      </Logo>
      <Title>{title}</Title>
    </TitleWrapper>
  );
};

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};