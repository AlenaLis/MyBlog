import Article from "../components/Artickle/Artickle";
import Main from "../components/Main/Main";
import Prof from "../components/Prof/Prof";
import AddArt from "../components/AddArt/AddArt";
import InProf from "../components/InProf/InProf";
import LogIn from "../components/LogIn/LogIn";
import SignIn from "../components/SignIn/SignIn";
export const routes = [
  {
    path: '/',
    component: Main,
    exact: true,
  },
  {
    path: '/inprof/',
    component: InProf,
    exact: true,
  },
  {
    path: '/addarticle/',
    component: AddArt,
    exact: true,
  },
  {
    path: '/profile/',
    component: Prof,
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
    path: '/art/:id/',
    component: Article,
    exact: true,
  },
]
