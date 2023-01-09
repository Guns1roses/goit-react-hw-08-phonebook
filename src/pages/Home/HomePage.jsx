import { Container, Paper } from '@mui/material';
import PageTitle from 'components/PageTitle/PageTitle';
import { Main } from 'pages/common/common.styled';
import image from '../../images/writing-923882.jpg';
import {
  ContentText,
  ContentTitle,
  ContentWrapper,
  HeroSection,
  Img,
  ImgWrapper,
} from './HomePage.Styled';

const HomePage = () => {
  return (
    <Main>
      <Container sx={{ pt: 4, pb: 4 }} maxWidth="xl">
        <PageTitle title="ЛАСКАВО ПРОСИМО ДО ТЕЛЕФОННОЇ КНИГИ - ОНЛАЙН" />
        <HeroSection>
          <ImgWrapper>
            <Img src={image} alt="woman width notebook" width="320" />
          </ImgWrapper>
          <ContentWrapper>
            <Paper sx={{ p: 4 }} elevation={3}>
              <ContentTitle>Про нас</ContentTitle>
              <ContentText>
                Телефонна книга - це проста програма для роботи з контактами. Ви можете додавати контактну
                інформацію людей до адресної книги та контактів,
                редагувати цю інформацію та телефонувати до
                цих людей швидко за допомогою данної програми. Ви можете вже зараз
                легко спілкуватися через цей додаток.
              </ContentText>
            </Paper>
          </ContentWrapper>
        </HeroSection>
      </Container>
    </Main>
  );
};

export default HomePage;