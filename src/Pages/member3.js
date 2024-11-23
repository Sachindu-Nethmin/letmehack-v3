import React from 'react';
import RegisterTeam from './register';


export default function Member3() {
  return (
    <RegisterTeam
      member="Member 3"
      nextPage="/register/member4"
      prevPage="/register/member2"
      isLastPage={false}
    />
  );
}

