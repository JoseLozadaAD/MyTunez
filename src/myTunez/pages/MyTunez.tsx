import Content from '../layout/Content';
import Header from '../layout/Header';
import Navigation from '../layout/Navigation';
import SideBar from '../layout/SideBar';

const MyTunez = () => {
  return (
    <div className="app">
      <Header />
      <Navigation />

      <div className="main">
        <SideBar />
        <Content />
      </div>
    </div>
  );
};

export default MyTunez;
