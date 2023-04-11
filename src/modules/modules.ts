export interface IRestaurants {
  title: string;
  totalElements: number;
  delivery: Delivery[];
  elements: Element[];
}

export interface Delivery {
  storeAddressId: number;
  etaLowerBound: number;
  etaUpperBound: number;
}

export interface Element {
  singleData: SingleData;
}

export interface SingleData {
  storeData: StoreData;
}

export interface StoreData {
  store: Store;
  filters: Filter[];
}

export interface Store {
  id: number;
  name: string;
  slug: string;
  imageId: string;
  serviceFee: number;
  addressId: number;
  promotions: Promotion[];
  ratingInfo: RatingInfo;
}

export interface Filter {
  name: string;
}

export interface Promotion {
  id: number;
  title: string;
  type: string;
  isPrime: boolean;
  origin: string;
}

export interface RatingInfo {
  cardLabel: string;
  detailsLabel: string;
  totalRatingLabel: string;
  icon: Icon;
  color: Color;
  backgroundColor?: any;
}

export interface Scheduling {
  enabled: boolean;
  message?: any;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Icon {
  lightImageId: string;
  darkImageId: string;
}

export interface Color {
  lightColorHex: string;
  darkColorHex: string;
}

export interface SupportedStrategy {
  type: string;
}

export interface ResponseRestaurants {
  config: {
    transitional: {
      silentJSONParsing: boolean;
      forcedJSONParsing: boolean;
      clarifyTimeoutError: boolean;
    };

    transformRequest: any[];
    transformResponse: any[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: {};
    headers: {
      Accept: string;
    };
    baseURL: string;
    method: string;
    url: string;
  };

  data: IRestaurants[];
  headers: {
    "content-type": string;
    "Symbol(defaults)": null;
  };
  request: XMLHttpRequest;
  status: number;
  statusText: string;
}

export interface RestaurantState {
  loading: boolean;
  error: string;
  restaurants: IRestaurants;
}

export interface IJumbotron {
  id: number;
  category: string;
  icon: string;
  subcategory: Subcategory[] | null;
}

export interface Subcategory {
  category: string;
  icon: string;
}

export interface IMenu {
  id: number;
  slug: string;
  brandName: string;
  headerBackgroundImage: string;
  deliveryTime1: number;
  deliveryTime2: number;
  deliveryPrice: number;
  rate: number;
  message: string;
  menu: Menu[];
}

export interface Menu {
  category: {
    categoryName: string;
    categoryImage: string;
    bonus: string;
  };
  products: IProducts[];
}

export interface IProducts {
  name: string;
  description: string;
  price: number;
  image: string;
  bonus: string;
  modifiers: string;
}

export interface Order {
  amount: number;
  name: string;
  price: number;
}

export interface ICart {
  order: Order[];
}

export interface newOrder {
  amount: number;
  name: string;
  price: number;
}

export interface Options {
  img: string | undefined;
  text: string;
}

export interface IDropdownOptions {
  default: { img: string | undefined; text: string };
  options: Options[];
}

export interface IOrderState {
  brandName: string;
  delAddress: null | string;
  delPrice: number;
  delTerms: null | string;
  paymentMethod: null | IPaymentMethod;
  allergyInfo: string;
  cutlery: boolean;
  totalPrice: string;
  promoCode: boolean;
  orderList: ICart | null;
  phoneNumber: string | null;
}

export interface IPaymentMethod {
  img?: string;
  text: string;
}

export interface IModalState {
  allergy: boolean;
  confirmExit: boolean;
  deliveryTerms: boolean;
  phoneVerify: boolean;
  inValidOrder: boolean;
  successOrder: boolean;
  inDevelopment: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone: null | string;
}

export interface UserState {
  currentUser: SignInResponse | null;
  loading: boolean;
  error: string;
  JWT: string | null;
  registerModal: boolean;
  phoneModal: boolean;
  profileModal: boolean;
  user: User | null;
}

export interface IUserSignUp {
  name: string;
  email: string;
  password: string;
}

export interface IUserSignIn {
  email: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
  user: User;
}
