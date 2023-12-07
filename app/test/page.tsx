import React, { Fragment, Suspense } from 'react';
import Image from 'next/image';
interface Results {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

interface RandomUserData {
  results: Results[];
  info: Info;
}

const RandomUser = async () => {
  const res = await fetch('https://randomuser.me/api');
  const data: RandomUserData = await res.json();

  return (
    <ul>
      {data.results.map((user) => (
        <Fragment key={user.name.first}>
          <li key={user.name.first}>{user.name.first}</li>
          <li>email: {user.email}</li>
          <Image
            src={user.picture.large}
            alt={user.name.first}
            width={200}
            height={200}
            className="rounded-full"
          />
        </Fragment>
      ))}
    </ul>
  );
};

export default function page() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <RandomUser />
    </Suspense>
  );
}
