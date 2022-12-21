export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  team: {
    id: number;
    name: string;
    logo: string;
  };
  profilePicture: string;
  following: Array<string>;
  followers: Array<string>;
  favFixtures: Array<string>;
}

export interface AuthState {
  user: User | null;
  token: string | null;
}

export interface RegisterUser extends LoginUser {
  username: string;
  team: {
    id: number;
    name: string;
    logo: string;
  };
}

export interface LoginUser {
  email: string;
  password: string;
}
