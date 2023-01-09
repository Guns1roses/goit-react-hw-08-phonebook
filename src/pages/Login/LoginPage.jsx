import LoginForm from 'components/LoginForm/LoginForm';
import { BottomText, Main, StyledLink } from 'pages/common/common.styled';
import { CenteredContainer } from 'pages/common/common.styled';
import ParticlesBox from 'components/ParticlesBox/ParticlesBox';
import PageTitle from 'components/PageTitle/PageTitle';
import { Container } from '@mui/material';

const LoginPage = () => {
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
          <PageTitle title="Log in to PHONEBOOK" />
          <LoginForm />
          <BottomText>
            Don’t have an account yet?{' '}
            <StyledLink to="/registration">Sign up</StyledLink>
          </BottomText>
        </CenteredContainer>
      </Container>
    </Main>
  );
};

export default LoginPage;