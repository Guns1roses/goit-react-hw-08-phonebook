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
        <PageTitle title="WELCOME TO ONLINE PHONE BOOK" />
        <HeroSection>
          <ImgWrapper>
            <Img src={image} alt="woman width notebook" width="320" />
          </ImgWrapper>
          <ContentWrapper>
            <Paper sx={{ p: 4 }} elevation={3}>
              <ContentTitle>About</ContentTitle>
              <ContentText>
                Address Book and Contacts is a simple contacts application. You
                can add people contact informations to the Address Book and
                Contacts, you can edit these informations and you can call on
                these people quickly with PHONEBOOK application. You can now
                easily communicate via Address Book and Contacts application.
              </ContentText>
            </Paper>
          </ContentWrapper>
        </HeroSection>
      </Container>
    </Main>
  );
};

export default HomePage;