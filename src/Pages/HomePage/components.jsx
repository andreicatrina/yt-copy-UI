import styled from "styled-components";

export const HomepageSection = styled.section`
  display: flex;
`;

export const SideMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100%;
  max-height: 100%;
  width: 100%;
  max-width: 64px;
  padding: 20px 8px;
`;

export const MenuDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 28px;

  svg {
    color: white;
    width: 24px;
    height: 24px;
  }
`;

export const SideHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px 0;
  border-radius: 12px;

  :hover {
    background-color: hsl(0, 0%, 18.82%);
  }

  svg {
    color: white;
    width: 24px;
    height: 24px;
  }

  p {
    color: white;
    font-size: 10px;
  }
`;
export const SideShorts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px 0;
  border-radius: 12px;

  :hover {
    background-color: hsl(0, 0%, 18.82%);
  }
  svg {
    color: white;
    width: 24px;
    height: 24px;
  }

  p {
    color: white;
    font-size: 10px;
  }
`;
export const SideMembership = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px 0;
  border-radius: 12px;

  :hover {
    background-color: hsl(0, 0%, 18.82%);
  }
  svg {
    color: white;
    width: 24px;
    height: 24px;
  }

  p {
    color: white;
    font-size: 10px;
  }
`;
export const SideOriginals = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px 0;
  border-radius: 12px;

  :hover {
    background-color: hsl(0, 0%, 18.82%);
  }
  svg {
    color: white;
    width: 24px;
    height: 24px;
  }

  p {
    color: white;
    font-size: 10px;
  }
`;
export const SideMusic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px 0;
  border-radius: 12px;

  :hover {
    background-color: hsl(0, 0%, 18.82%);
  }
  svg {
    color: white;
    width: 24px;
    height: 24px;
  }

  p {
    color: white;
    font-size: 10px;
    text-align: center;
  }
`;
export const SideLibrary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px 0;
  border-radius: 12px;

  :hover {
    background-color: hsl(0, 0%, 18.82%);
  }
  svg {
    color: white;
    width: 24px;
    height: 24px;
  }

  p {
    color: white;
    font-size: 10px;
  }
`;
export const SideDownload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px 0;
  border-radius: 12px;

  :hover {
    background-color: hsl(0, 0%, 18.82%);
  }
  svg {
    color: white;
    width: 24px;
    height: 24px;
  }

  p {
    color: white;
    font-size: 10px;
    text-align: center;
  }
`;

export const CenterContainer = styled.div`
  width: 100%;
`;

export const HeaderContainerParent = styled.div`
  position: sticky;
  top: 0;
  background-color: #0f0f0f;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 16px;
`;
export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  img {
    width: 32px;
    height: 28px;
    margin-top: 3px;
    cursor: pointer;
  }

  h2 {
    color: white;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;

  input {
    width: 100%;
    max-width: 520px;
    height: 32px;
    border: 1px solid hsl(0, 0%, 18.82%);
    background-color: hsl(0, 0%, 7%);
    border-radius: 14px;
    padding-left: 12px;
    color: white;
    cursor: pointer;
  }
`;

export const MicDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282828;
  width: 35px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  svg {
    width: 16px;
    height: 16px;
    color: white;
  }
`;
export const AccountDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  padding-right: 24px;
  width: 100%;

  svg {
    width: 20px;
    height: 20px;
    color: white;
    cursor: pointer;
  }
`;

export const UserPictureDiv = styled.div`
  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const ShortcutButtonsDiv = styled.div`
  display: flex;
  padding: 24px;
  gap: 12px;
  button {
    width: 100%;
    max-width: 70px;
    height: 32px;
    border-radius: 8px;
    border: none;
    background-color: #282828;
    color: white;
  }

  button:hover {
    background-color: white;
    color: #282828;
  }
`;
export const VideosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  row-gap: 32px;
  padding: 12px 24px;
`;
export const VideoCard = styled.div`
  /* border: 1px solid white; */
  border-radius: 8px;
  cursor: pointer;
`;
export const VideoCardImage = styled.img`
  width: 100%;
  max-width: 360px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;
export const VideoCardText = styled.div``;
export const VideoCardTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  color: #f1f1f1;
  font-size: 16px;

  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
export const VideoCardParagraph = styled.p`
  color: #aaaaaa;
  font-size: 14px;
  padding: 0 24px 0 34px;
`;
