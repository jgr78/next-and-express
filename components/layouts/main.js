import { createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from 'next/head';
import { devices, fonts, colors } from '../../constants/styles';

const MainLayout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <GlobalStyle />
      <Wrapper>
        <Content>
          {children}
        </Content>
      </Wrapper>

    </div>
  );
}

// Global style
const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   font-family: ${fonts.default};
   color: ${colors.grey};
  }
`

// Layout styles
const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 20px; 
  max-width: 760px;
  @media (max-width: ${devices.desktop}) {
    max-width: 100%;
  }
`;


MainLayout.propTypes = {
  title: PropTypes.string,
};

MainLayout.defaultProps = {
  title: '',
};

export default MainLayout;