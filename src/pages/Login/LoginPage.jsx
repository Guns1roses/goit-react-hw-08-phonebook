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
          <PageTitle title="Увійдіть до ТЕЛЕФОННОЇ КНИГИ" />
          <LoginForm />
          <BottomText>
            У вас ще немає облікового запису?{' '}
            <StyledLink to="/registration">Зареєструватися</StyledLink>
          </BottomText>
        </CenteredContainer>
      </Container>
    </Main>
  );
};

export default LoginPage;