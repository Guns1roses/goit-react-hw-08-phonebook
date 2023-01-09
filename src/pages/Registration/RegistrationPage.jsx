import RegistrationForm from 'components/RegistratinForm/RegistrationForm';
import { BottomText, Main, StyledLink } from 'pages/common/common.styled';
import ParticlesBox from 'components/ParticlesBox/ParticlesBox';
import { CenteredContainer } from 'pages/common/common.styled';
import PageTitle from 'components/PageTitle/PageTitle';
import { Container } from '@mui/material';

const RegistrationPage = () => {
  return (
    <Main>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
          pt: 2,
          pb: 2,
        }}
        maxWidth="xl"
      >
        <ParticlesBox />
        <CenteredContainer>
          <PageTitle title="Create a PHONEBOOK account" />
          <RegistrationForm />
          <BottomText>
            Already have an account? <StyledLink to="/login">Log in</StyledLink>
          </BottomText>
        </CenteredContainer>
      </Container>
    </Main>
  );
};

export default RegistrationPage;