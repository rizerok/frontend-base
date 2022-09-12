import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import backgroundImg from 'img/homepage.png';
import { Link } from 'react-router-dom';
import routes from 'src/routes';
import LayoutRoot from 'components/layout/root';
import packageJson from 'root/package.json';

const { homepage: repositoryUrl } = packageJson;

const Background = styled.div`
  background-image: url(${backgroundImg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  padding: 50px 100px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px
`;

const NavigationItem = styled.li`
  width: 100%;
  color: rgba(0,0,0,0.7);
  transition: color 0.2s;
  padding: 7px 7px 7px 0;
  cursor: pointer;

  &:hover {
    color: rgba(0,0,0, 1);
  }

  &:first-child {
    padding-top: 0;
  }
`;

const NavigationList = styled.ul`
  border-left: 2px solid rgba(0,0,0,3);
  padding-left: 20px;
  display: inline-block;
`;

const title = 'Home';

const PageHome: React.FC = () => (
  <LayoutRoot>
    <Background>
      <Helmet
        title={title}
      />
      <Title>{title}</Title>
      <NavigationList>
        <NavigationItem key={repositoryUrl}>
          <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">Repo</a>
        </NavigationItem>
        { routes.filter(r => r.name).map(({ name, path }) => (
          <NavigationItem key={String(path)}>
            <Link to={String(path)}>{name}</Link>
          </NavigationItem>
        )) }
      </NavigationList>
    </Background>
  </LayoutRoot>
);

export default PageHome;
