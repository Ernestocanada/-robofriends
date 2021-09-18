import React from 'react';

const Card = ({ name, email, id, phone }) => {
  //Same as above const { name, email, id } = props;
  return (
    <div className="tc bg-light-green dib br3 ma4 grow bw2 shadow-5">
      <img alt="Robo" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
};

export default Card;
