export type User = {
  id: number | null;
  name: string | null;
  email: string;
  password: string;
};
export type registredUser = {
  email: string;
  password: string;
};

export type myUserContext = {
  id: string;
  name: string;
  email: string;
  role: string;
  isLogged: boolean;
  avatar: string;
};

export type Params = {
  params: {
    userId: string;
  };
};

export interface CardInterface {
  id: string;
  name: string;
  image_uris: {
    normal: string;
  };
  quantity: number;
}

export interface UserContextType {
  user: myUserContext;
  defaultUser: myUserContext;
  setUser: React.Dispatch<React.SetStateAction<myUserContext>>;
}

export interface CardPromise {
  data: CardInterface[];
  total: number;
  page: number;
  pageCount: number;
}
