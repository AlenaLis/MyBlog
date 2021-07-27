import Main from "../components/Main/Main";
import ProfileInfo from "../components/ProfileInfo/ProfileInfo";
import AddArt from "../components/AddArt/AddArt";
import MyArticlePage from "../components/MyArticlePage/MyArticlePage";
import LogIn from "../components/LogIn/LogIn";
import SignIn from "../components/SignIn/SignIn";
import FullArticle from "../components/FullArticle/FullArticle";

export const routes = [
  {
    path: '/',
    component: Main,
    exact: true,
  },
  {
    path: '/inprof/',
    component: MyArticlePage,
    exact: true,
  },
  {
    path: '/addarticle/',
    component: AddArt,
    exact: true,
  },
  {
    path: '/profile/',
    component: ProfileInfo,
    exact: true,
  },
  {
    path: '/login/',
    component: SignIn,
    exact: true,
  },
  {
    path: '/singin/',
    component: LogIn,
    exact: true,
  },
  {
    path: '/fullart/:id/',
    component: FullArticle,
    exact: true,
  },
]
