import styled from '@emotion/styled';
import NavBar from '../../../../Interface/web/components/NavBar/NavBar';
import HumbergerToggel from '../../../../Interface/web/components/UI/HumbergerToggel';
import ToggelMenuState from '../../handlers/toggel/handler';

const HeaderApp = styled('header')`
  position: sticky;
  top: 0;
  height: 8vh;
  align-items: center;
  background-color: #44dc8f;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  z-index: 100;
`;
const HeaderBrand = styled('h1')`
  color: white;
  font-size: 24px;
  @media screen and (min-width: 650px) {
    font-size: 40px;
  }
`;

export default function Header() {
  const [mode, ToggelMenuHandler] = ToggelMenuState();
  return (
    <HeaderApp>
      <span>
        <HeaderBrand>Anime Collection</HeaderBrand>
      </span>
      <HumbergerToggel TogelMenuHandler={ToggelMenuHandler} mode={mode} />
      <NavBar mode={mode} />
    </HeaderApp>
  );
}
