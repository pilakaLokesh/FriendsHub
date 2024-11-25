import { useParams } from "react-router-dom";
import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import "./persondetails.css";
import {useNavigate} from 'react-router-dom'


const friendsList = [
  {
    id: "1",
    DMme:"https://www.instagram.com/rune_warrior?igsh=M2Fkajd3OTg0aWQ5",
    name: "Sexy Sai",
    about:"Sexy Sai, better known as BGMi player, is an Vijayada adult film performer, director, and YouTuber. He is consistently among the most popular male talent adult movies searches and is known for his shaved head, muscular physique, and Black eyes. ",
    video: "https://www.youtube.com/watch?v=4qrZAoQpn5s&pp=ygUEa3BoYg%3D%3D", 
    image: "https://res-console.cloudinary.com/dzglfrpk4/thumbnails/v1/image/upload/v1732520476/c2FpRF9taGd3dTg=/drilldown",
    reviews: [
        { rating: 4, reviewText: "Great experience!" },
        { rating: 5, reviewText: "Highly recommended!" }
      ],
    
  },
  {
    id: "2",
    DMme:"https://www.instagram.com/upendra_21_?igsh=MTFmY28zenJ6Yndvbg==",
    name: "Oopudu Upendra",
    about:"oopudu Upendra, better known as Erripuku, is an nellore adult film performer, director, and YouTuber. He is consistently among the most popular male talent adult movies searches and is known for his shaved head, muscular physique, and moddalo eyes. His accolades include three AVN Awards for Male Performer of the Year.",
    video: "https://www.youtube.com/watch?v=S2bi3NXEDiM&pp=ygUXa3BoYiByZWQgbGlnaHQgYXJlYSBuZXc%3D",
    image: "https://res-console.cloudinary.com/dzglfrpk4/thumbnails/v1/image/upload/v1732520231/dXBlbmRyYURfYWh3ZmF2/drilldown",
    reviews: [
        { rating: 4, reviewText: "Chaala Vedi Undi!" },
        { rating: 5, reviewText: "Highly recommended!" }
      ],

  },
  {
    id: "3",
    about:"Sollu Sekhar, better known as Erri modda, is an Sompeta, Dengite Devuda Antaru adult film performer, director, and YouTuber. He is consistently among the most popular male talent adult movies searches and is known for his shaved head, muscular physique, and blue eyes. ",
    DMme:"https://www.instagram.com/sekhar._.01?igsh=MWp5amVhMG5hdzFlNg==",
    name: "Savagotte Sekhar",
    video: "https://www.youtube.com/watch?v=B2ePb4qovMo&pp=ygUXa3BoYiByZWQgbGlnaHQgYXJlYSBuZXc%3D",
    image: "https://res-console.cloudinary.com/dzglfrpk4/thumbnails/v1/image/upload/v1732520218/c2VrYURfejVmcmFm/drilldown",
    reviews: [
        { rating: 4, reviewText: "Ocd Pukgadu!" },
        { rating: 5, reviewText: "Sav Dengutadu!" }
      ],
   
  },
  {
    id: "4",
    name: "Modla Manohar",
    about:"Murali, better known as Thaskara Murali, is an Visakhapatnam, Standing lo Dengadam Fav Position  adult film performer, director, and YouTuber.",
    DMme:"https://www.instagram.com/raju_kolli?igsh=dzd1b3BnanByaDh6",
    video: "https://www.youtube.com/watch?v=ndfCBBEftyY&pp=ygUXa3BoYiByZWQgbGlnaHQgYXJlYSBuZXc%3D",
    image: "https://res-console.cloudinary.com/dzglfrpk4/thumbnails/v1/image/upload/v1732468209/bXVyX2N1eGprMA==/drilldown",
    reviews: [
        { rating: 1, reviewText: "Dengaledu Pukgaadu!" },
        { rating: 1, reviewText: "Not recommended!" }
      ],
   
  },
  {
    id: "5",
    name: "Vangi Denge Vipul",
    about:"Alipesh, better known as Chapri , is an Sompeta . He is fresher and fresh Modda Black Modda",
    DMme:"https://www.instagram.com/vip_ul__03?igsh=MXdhZ2QxaHhmazFtbg==",
    video: "https://www.youtube.com/watch?v=HF_oI3lvOEM&pp=ygUXa3BoYiByZWQgbGlnaHQgYXJlYSBuZXc%3D",
    image: "https://res-console.cloudinary.com/dzglfrpk4/thumbnails/v1/image/upload/v1732444818/VmlwdWxfbGlocXkx/drilldown",
    reviews: [
        { rating: 3, reviewText: "Great experience Fresh Candidate!" },
        { rating: 3, reviewText: "Chinna Pillodu!" }
      ],
    
  },
  {
    id: "6",
    name: "Lavada Lokesh",
    about:"Lokesh, better known as Loki, is an American adult film performer, director, and YouTuber. He is consistently among the most popular male talent adult movies searches and is known for his shaved head, muscular physique, and blue eyes. His accolades include three AVN Awards for Male Performer of the Year.",
    DMme:"https://www.instagram.com/lokey_2899?igsh=enRjZWN2aGU1MmFm",
    video: "https://www.youtube.com/watch?v=UjaBXUiptB8&pp=ygUXa3BoYiByZWQgbGlnaHQgYXJlYSBuZXc%3D",
    image: "https://res-console.cloudinary.com/dzglfrpk4/thumbnails/v1/image/upload/v1732520519/bG9rRF92eHg2M2Y=/drilldown",
    reviews: [
        { rating: 4, reviewText: "Great experience!" },
        { rating: 5, reviewText: "Highly recommended!" }
      ],
    
  },
  {
    id: "7",
    name: "Aripinche AB",
    about:"Ravindra, better known as Ab, is an American adult film performer, director, and YouTuber,Doggy Style Fav Dengite Devara Antaru.",
    DMme:"https://www.instagram.com/show__s_t_o_p_p_e_r?igsh=MWd4d29wYTI0dXF3bw==",
    image: "https://res-console.cloudinary.com/dzglfrpk4/thumbnails/v1/image/upload/v1732527701/YWJfaW5lNGRq/drilldown",
    video: "https://www.youtube.com/watch?v=6d7RgzYLy7E&pp=ygUNc3dhdGhpIG5heXVkdQ%3D%3D",
    reviews: [
        { rating: 4, reviewText: "Great experience!" },
        { rating: 5, reviewText: "Big Cock!" }
      ],
    
  },
  {
    id: "8",
    name: "Ramp Raju",
    about:"Raju, better known as Raju Bhai, is an all india adult film performer, director, and YouTuber. manchi vallaki raju chedda vallaki bhai as raju bhai",
    DMme:"https://www.instagram.com/raju_kolli?igsh=dzd1b3BnanByaDh6",
    image: "https://res-console.cloudinary.com/dzglfrpk4/thumbnails/v1/image/upload/v1732527898/cmFqX2pqNDI1ag==/drilldown",
    video: "https://www.youtube.com/watch?v=NGrQR5RwhuM&pp=ygUFYmhhaSA%3D",
    reviews: [
      { rating: 4, reviewText: "Great experience!" },
      { rating: 5, reviewText: "Kurradiki Kasi ekuva!" }
    ],
   
  },
  {
    id: "9",
    name: "Gudha Denge Guna",
    about:"Guna Sekhar, better known as Pichi, is an all india adult film performer, director, and YouTuber. pain lekunda dengadam veedi speciality",
    DMme:"https://www.instagram.com/raju_kolli?igsh=dzd1b3BnanByaDh6",
    image: "https://res-console.cloudinary.com/dzglfrpk4/thumbnails/v1/image/upload/v1732520498/Z3VuYURfa2lmd2o5/drilldown",
    video: "https://www.youtube.com/watch?v=0S8J-I-uYm8&pp=ygUNc3dhdGhpIG5heXVkdQ%3D%3D",
    reviews: [
        { rating: 3, reviewText: "Nice Painless Dengudu!" },
        { rating: 2, reviewText: "recommended!" }
      ],
   
  },
];

const PersonDetails = () => {
    const { id } = useParams();
    const [friends, setFriends] = useState(friendsList);
  
    
    const person = friends.find((friend) => friend.id === id);
  
    
    const calculateAverageRating = (reviews) =>
      reviews.length
        ? (
            reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
          ).toFixed(1)
        : "No ratings yet";
  
  
    const addReview = (newReview) => {
      const updatedFriends = friends.map((friend) =>
        friend.id === id
          ? { ...friend, reviews: [...friend.reviews, newReview] }
          : friend
      );
      setFriends(updatedFriends);
    };
  
    return (
        <div className="person-details-container">
        <div className="person-details-container">
          {person ? (
            <div className="person-card">
             
              <img className="person-image" alt={person.name} src={person.image} />
      
             
              <div className="person-info">
                <h1>{person.name}</h1>
                <p>About: {person.about}</p>
                <p>
                  DM Link: <a href={person.DMme}>{person.name}</a>
                </p>
      
                {person.video && (
                  <div className="person-video">
                    <h2>Watch Video</h2>
                    <ReactPlayer
                      url={person.video}
                      controls={true}
                      width="100%"
                      height="400px"
                      playing={true}
                    />
                  </div>
                )}
              </div>
      
              
              <div className="reviews-container">
                <h2>Ratings & Reviews</h2>
                <p>
                  Average Rating:{" "}
                  {calculateAverageRating(person.reviews)}
                </p>
                <ul className="review-list">
                  {person.reviews.map((review, index) => (
                    <li key={index}>
                      <strong>Rating:</strong> {review.rating}/5
                      <p>{review.reviewText}</p>
                    </li>
                  ))}
                </ul>
      
                
                <AddReviewForm addReview={addReview} />
              </div>
            </div>
          ) : (
            <h1>Details not found</h1>
          )}
        </div>
        </div>
      );
      
      
  };

  
  const AddReviewForm = ({ addReview }) => {
    const history = useNavigate();
    const onBack = () => {
        history("/")
    }
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (rating > 0 && reviewText.trim()) {
        const newReview = { rating: parseInt(rating), reviewText };
        addReview(newReview);
        setRating(0);
        setReviewText("");
      } else {
        alert("Please provide a valid rating and review.");
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="review-form">
        <label>
          Rating (1-5):
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option value="0">Select</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>
        <label>
          Review:
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review here"
            required
          ></textarea>
        </label>
        <button type="submit">Submit Review</button>
        <button className="but" onClick={onBack} type="submit">Back</button>
      </form>
    );
  };
  
  export default PersonDetails;
