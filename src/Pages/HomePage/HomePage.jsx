import React from "react";
import {
  AccountDiv,
  CenterContainer,
  HeaderContainer,
  HeaderContainerParent,
  HomepageSection,
  LogoDiv,
  LogoDiv2,
  MenuDiv,
  MicDiv,
  SearchDiv,
  ShortcutButtonsDiv,
  SideDownload,
  SideHome,
  SideLibrary,
  SideMembership,
  SideMenuContainer,
  SideMusic,
  SideOriginals,
  SideShorts,
  UserPictureDiv,
  VideoCard,
  VideoCardImage,
  VideoCardParagraph,
  VideoCardText,
  VideoCardTitle,
  VideosContainer,
} from "./components";
import { FaMicrophone } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { TfiShortcode } from "react-icons/tfi";
import { FaPhotoVideo } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { SiYoutubemusic } from "react-icons/si";
import { MdLibraryMusic } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import Qatar from "../../Images/qatar.jpg";
import Youtube from "../../Icons/youtube.png";
import User from "../../Images/user.jpg";
import Bitcoin from "../../Images/bitcoin.jpg";
import Bitcoin2 from "../../Images/bitcoin2.jpg";
import Chill from "../../Images/chill.jpg";
import Gameofthrones from "../../Images/gameofthrones.jpg";
import Laugh from "../../Images/laugh.jpg";
import Presents from "../../Images/presents.jpg";
import Code from "../../Images/code.jpg";
import Music from "../../Images/music.jpg";
import Guitar from "../../Images/guitar.jpg";
import Balance from "../../Images/balance.jpg";
import Snowboard from "../../Images/snowboard.jpg";

const HomePage = () => {
  return (
    <HomepageSection>
      <SideMenuContainer>
        <MenuDiv>
          <AiOutlineMenu />
        </MenuDiv>
        <SideHome>
          <MdHomeFilled />
          <p>Acasa</p>
        </SideHome>
        <SideShorts>
          <TfiShortcode />
          <p>Shorts</p>
        </SideShorts>
        <SideMembership>
          <FaPhotoVideo />
          <p>Abonamente</p>
        </SideMembership>
        <SideOriginals>
          <RiYoutubeLine />
          <p>Originale</p>
        </SideOriginals>
        <SideMusic>
          <SiYoutubemusic />
          <p>Youtube Music</p>
        </SideMusic>
        <SideLibrary>
          <MdLibraryMusic />
          <p>Biblioteca</p>
        </SideLibrary>
        <SideDownload>
          <HiDownload />
          <p>Continut descarcat</p>
        </SideDownload>
      </SideMenuContainer>
      <CenterContainer>
        <HeaderContainerParent>
          <HeaderContainer>
            <LogoDiv>
              <img src={Youtube} alt="" />
              <h2>Premium</h2>
            </LogoDiv>
            <SearchDiv>
              <input type="search" placeholder="Cauta" />
              <MicDiv>
                <FaMicrophone />
              </MicDiv>
            </SearchDiv>
            <AccountDiv>
              <AiOutlineVideoCameraAdd />
              <BsBell />
              <UserPictureDiv>
                <img src={User} alt="" />
              </UserPictureDiv>
            </AccountDiv>
          </HeaderContainer>
          <ShortcutButtonsDiv>
            <button>Toate</button>
            <button>Muzica</button>
            <button>Live</button>
            <button>Mixaj</button>
            <button>Jocuri</button>
            <button>Fotbal</button>
            <button>Vizionate</button>
          </ShortcutButtonsDiv>
        </HeaderContainerParent>
        <VideosContainer>
          <VideoCard>
            <VideoCardImage src={Bitcoin} alt="" />
            <VideoCardText>
              <VideoCardTitle>
                <img src={Bitcoin} alt="" />
                Where will Bitcoin go now?
              </VideoCardTitle>
              <VideoCardParagraph>BitcoinVerse</VideoCardParagraph>
              <VideoCardParagraph>36 K de vizionari</VideoCardParagraph>
            </VideoCardText>
          </VideoCard>
          <VideoCard>
            <VideoCardImage src={Bitcoin2} alt="" />
            <VideoCardText>
              <VideoCardTitle>
                <img src={Bitcoin2} alt="" />
                Is it the end?
              </VideoCardTitle>
              <VideoCardParagraph>CryptoVerse</VideoCardParagraph>
              <VideoCardParagraph>13 K vizionari</VideoCardParagraph>
            </VideoCardText>
          </VideoCard>
          <VideoCard>
            <VideoCardImage src={Chill} alt="" />
            <VideoCardText>
              <VideoCardTitle>
                <img src={Chill} alt="" />
                Chill || Fantasy Music by Dreyma
              </VideoCardTitle>
              <VideoCardParagraph>Dreyma - Fantasy Composer</VideoCardParagraph>
              <VideoCardParagraph>810 vizionari</VideoCardParagraph>
            </VideoCardText>
          </VideoCard>
          <VideoCard>
            <VideoCardImage src={Gameofthrones} alt="" />
            <VideoCardText>
              <VideoCardTitle>
                <img src={Gameofthrones} alt="" />
                Game of Thrones Music & Ambience | Winterfell
              </VideoCardTitle>
              <VideoCardParagraph>Vibriance</VideoCardParagraph>
              <VideoCardParagraph>111 K vizionari</VideoCardParagraph>
            </VideoCardText>
          </VideoCard>
          <VideoCard>
            <VideoCardImage src={Qatar} alt="" />
            <VideoCardText>
              <VideoCardTitle>
                <img src={Qatar} alt="" />
                Best World Cup EVER?
              </VideoCardTitle>
              <VideoCardParagraph>FootbalFan</VideoCardParagraph>
              <VideoCardParagraph>223 K vizionari</VideoCardParagraph>
            </VideoCardText>
          </VideoCard>
          <VideoCard>
            <VideoCardImage src={Laugh} alt="" />
            <VideoCardText>
              <VideoCardTitle>
                <img src={Laugh} alt="" />
                This will make your life longer
              </VideoCardTitle>
              <VideoCardParagraph>Vsauce</VideoCardParagraph>
              <VideoCardParagraph>24 K vizionari</VideoCardParagraph>
            </VideoCardText>
          </VideoCard>
          <VideoCard>
            <VideoCardImage src={Presents} alt="" />
            <VideoCardText>
              <VideoCardTitle>
                <img src={Presents} alt="" />
                What did Santa bring?
              </VideoCardTitle>
              <VideoCardParagraph>HolidayFM</VideoCardParagraph>
              <VideoCardParagraph>10 K vizonari</VideoCardParagraph>
            </VideoCardText>
          </VideoCard>
          <VideoCard>
            <VideoCardImage src={Code} alt="" />
            <VideoCardText>
              <VideoCardTitle>
                <img src={Code} alt="" />
                Want to learn HOW TO...
              </VideoCardTitle>
              <VideoCardParagraph>Jsdevil</VideoCardParagraph>
              <VideoCardParagraph>14 K vizionari</VideoCardParagraph>
            </VideoCardText>
          </VideoCard>
          <VideoCard>
            <VideoCardImage src={Music} alt="" />
            <VideoCardText>
              <VideoCardTitle>
                <img src={Music} alt="" />
                Programming || Coding || Hacking Music
              </VideoCardTitle>
              <VideoCardParagraph>FilFar</VideoCardParagraph>
              <VideoCardParagraph>546 K vizionari</VideoCardParagraph>
            </VideoCardText>
          </VideoCard>
          <VideoCard>
            <VideoCardImage src={Guitar} alt="" />
            <VideoCardText>
              <VideoCardTitle>
                <img src={Guitar} alt="" />
                Learn to play guitar in 3, 2, 1..
              </VideoCardTitle>
              <VideoCardParagraph>LatinoVibezz</VideoCardParagraph>
              <VideoCardParagraph>35 K vizionari</VideoCardParagraph>
            </VideoCardText>
          </VideoCard>
          <VideoCard>
            <VideoCardImage src={Snowboard} alt="" />
            <VideoCardText>
              <VideoCardTitle>
                <img src={Snowboard} alt="" />
                Season START!
              </VideoCardTitle>
              <VideoCardParagraph>On the edge</VideoCardParagraph>
              <VideoCardParagraph>987 K vizionari</VideoCardParagraph>
            </VideoCardText>
          </VideoCard>
          <VideoCard>
            <VideoCardImage src={Balance} alt="" />
            <VideoCardText>
              <VideoCardTitle>
                <img src={Balance} alt="" />
                10 Tips To Find Your Inner Peace
              </VideoCardTitle>
              <VideoCardParagraph>YogaSoul</VideoCardParagraph>
              <VideoCardParagraph>13 K vizionari</VideoCardParagraph>
            </VideoCardText>
          </VideoCard>
        </VideosContainer>
      </CenterContainer>
    </HomepageSection>
  );
};

export default HomePage;
