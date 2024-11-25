import { auth } from './firebase';
import Details from './Details';
import { redirect } from 'react-router-dom';
import './home.css'
import Marquee from './Marquee'


const friendsList = [
    {
        id:"1",
      name:"Sexy Sai",
      image:"https://res-console.cloudinary.com/dzglfrpk4/thumbnails/v1/image/upload/v1732444804/c2FpX2JydV90czZoYWI=/drilldown",
      rate:"1800",
      size:"6.3 inch",
      duration:"25 Min",
      number:"7997297578",
    },
    {
      id:"2",
      name:"Oopudu Upendra",
      image:"https://res-console.cloudinary.com/dzglfrpk4/thumbnails/v1/image/upload/v1732535598/dXBfb25zNXlm/drilldown",

      rate:"750",
      size:"5.2 inch",
      duration:"9 Min",
      number:"9908564062",
    },
    {
      id:"3",
      name:"Saava Denge Sekhar",
      image:"https://res-console.cloudinary.com/dzglfrpk4/thumbnails/v1/image/upload/v1732468193/c2VrYV9tY3VxOGo=/drilldown",
      rate:"2400",
      size:"6.5 inch",
      duration:"22 Min",
      number:"7093450507",
    },
    {
      id:"4",
      name:"Modla Manohar",
      image:"https://res-console.cloudinary.com/dzglfrpk4/thumbnails/v1/image/upload/v1732468209/bXVyX2N1eGprMA==/drilldown",
      rate:"800",
      size:"5.1 inch",
      duration:"3 Min",
      number:"9390306473",
    },
    {
      id:"5",
      name:"Vangi Denge Vipul",
      image:"https://res-console.cloudinary.com/dzglfrpk4/thumbnails/v1/image/upload/v1732444818/VmlwdWxfbGlocXkx/drilldown",
      rate:"Fresh 3000",
      size:"5.0 inch",
      duration:"25 Min",
      number:"8297956346",
    },
    {
        id:"6",
        name:"Lavada Lokesh",
        image:"https://res-console.cloudinary.com/dzglfrpk4/thumbnails/v1/image/upload/v1732534777/bXlwX2xlOHV2aQ==/drilldown",
        rate:"2000",
        size:"6.0 inch",
        duration:"21 Min",
        number:"9640815074",
      },
      {
        id:"7",
        name:"Aripinche AB",
        image:"https://res-console.cloudinary.com/dzglfrpk4/thumbnails/v1/image/upload/v1732527701/YWJfaW5lNGRq/drilldown",
        rate:"2100",
        size:"5.0 inch",
        duration:"25 Min",
        number:"7095249381",
      },
      {
          id:"8",
          name:"Ramp Raju",
          image:"https://res-console.cloudinary.com/dzglfrpk4/thumbnails/v1/image/upload/v1732527898/cmFqX2pqNDI1ag==/drilldown",
          rate:"2000",
          size:"6.0 inch",
          duration:"45 Min",
          number:"9030117360",
        },
        {
          id:"9",
          name:"Gudha Denge Guna",
          image:"https://res-console.cloudinary.com/dzglfrpk4/thumbnails/v1/image/upload/v1732535615/cGljX3kwcnY0dw==/drilldown",
          rate:"2000",
          size:"6.0 inch",
          duration:"40 Min",
          number:"9030117360",
        },
  ]
  
  const Home = ({ presentUser }) => {
    const handleSignOut = () => {
      auth.signOut()
        .then(() => {
          console.log("User signed out successfully.");
          redirect("/login")
        })
        .catch((error) => {
          console.error("Error signing out:", error.message);
        });
    };
  
    return (
      <div>
        <Marquee/>
        <h1>Welcome to Porn Rangers, {presentUser.email}</h1> we have <span>{friendsList.length} Rangers</span>
        <ul className="ul-list">
          {friendsList.map((eachFnd) => (
            <Details key={eachFnd.id} eachFnd={eachFnd} />
          ))}
        </ul>
        <button className='signout-button' type="button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    );
  };
  
  export default Home;
  