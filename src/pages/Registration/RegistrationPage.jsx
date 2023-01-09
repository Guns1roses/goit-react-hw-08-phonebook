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
          <PageTitle title="Створіть обліковий запис ТЕЛЕФОННОЇ КНИГИ" />
          <RegistrationForm />
          <BottomText>
            Вже є аккаунт? <StyledLink to="/login">Авторизуватися</StyledLink>
          </BottomText>
        </CenteredContainer>
      </Container>
    </Main>
  );
};

export default RegistrationPage;