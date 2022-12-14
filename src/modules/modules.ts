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
  type: string;
  singleData: SingleData;
  groupData?: any;
}
export interface Scheduling {
  enabled: boolean;
  message?: any;
}
export interface Location {
  latitude: number;
  longitude: number;
}

export interface Promotion {
  id: number;
  title: string;
  type: string;
  isPrime: boolean;
  origin: string;
}

export interface Icon {
  lightImageId: string;
  darkImageId: string;
}
export interface Color {
  lightColorHex: string;
  darkColorHex: string;
}
export interface RatingInfo {
  cardLabel: string;
  detailsLabel: string;
  totalRatingLabel: string;
  icon: Icon;
  color: Color;
  backgroundColor?: any;
}

export interface SupportedStrategy {
  type: string;
}
export interface Store {
  type: string;
  id: number;
  urn: string;
  name: string;
  slug: string;
  fiscalName: string;
  imageId: string;
  open: boolean;
  emulateOpen: boolean;
  mcdPartner: boolean;
  food: boolean;
  cityCode: string;
  scheduling: Scheduling;
  closedStatusMessage?: any;
  nextOpeningTime?: any;
  serviceFee: number;
  categoryId: number;
  cartUniqueElements?: number;
  cartTotalElements?: number;
  note: string;
  distance: string;
  addressId: number;
  location: Location;
  customDescriptionAllowed: boolean;
  productsInformationText: string;
  productsInformationLink: string;
  deliveryNotAvailable: boolean;
  deliveryNotAvailableMessage?: any;
  specialRequirementsAllowed: boolean;
  etaEnabled: boolean;
  allergiesInformationAllowed: boolean;
  legalCheckboxRequired: boolean;
  dataSharingRequested: boolean;
  marketplace: boolean;
  cashSupported: boolean;
  promotions: Promotion[];
  primeAvailable: boolean;
  cutleryRequestAllowed: boolean;
  ratingInfo: RatingInfo;
  selectedStrategyType: string;
  supportedStrategies: SupportedStrategy[];
  itemsType: string;
  suggestionKeywords: string[];
  phoneNumber: string;
  address: string;
  viewType: string;
  sponsored: boolean;
  feesPricingCalculationId: string;
  edenredEnabled: boolean;
}

export interface Filter {
  name: string;
}

export interface StoreData {
  store: Store;
  filters: Filter[];
}

export interface SingleData {
  type: string;
  storeData: StoreData;
  storeProductsData?: any;
  bannerData?: any;
}

export interface Restaurant {
  type: string;
  singleData: {
    type: {
      store: {
        type: string;
        id: number;
        urn: string;
        name: string;
        slug: string;
        fiscalName: string;
        imageId: string;
        open: boolean;
        emulateOpen: boolean;
        mcdPartner: boolean;
        food: boolean;
        cityCode: string;
        scheduling: { enabled: boolean; message: null };
        closedStatusMessage?: any;
        nextOpeningTime?: any;
        serviceFee: number;
        categoryId: number;
        cartUniqueElements?: number;
        cartTotalElements?: number;
        note: string;
        distance: string;
        addressId: number;
        location: Location;
        customDescriptionAllowed: boolean;
        productsInformationText: string;
        productsInformationLink: string;
        deliveryNotAvailable: boolean;
        deliveryNotAvailableMessage?: any;
        specialRequirementsAllowed: boolean;
        etaEnabled: boolean;
        allergiesInformationAllowed: boolean;
        legalCheckboxRequired: boolean;
        dataSharingRequested: boolean;
        marketplace: boolean;
        cashSupported: boolean;
        promotions: Array<{
          id: number;
          title: string;
          type: string;
          isPrime: boolean;
          origin: string;
        }>;
        primeAvailable: boolean;
        cutleryRequestAllowed: boolean;
        ratingInfo: {
          cardLabel: string;
          detailsLabel: string;
          totalRatingLabel: string;
          icon: {
            lightImageId: string;
            darkImageId: string;
          };
          color: { lightColorHex: string; darkColorHex: string };
          backgroundColor: null;
        };
        selectedStrategyType: string;
        supportedStrategies: Array<{
          type: string;
        }>;
        itemsType: string;
        suggestionKeywords: string[];
        phoneNumber: string;
        address: string;
        viewType: string;
        sponsored: boolean;
        feesPricingCalculationId: string;
        edenredEnabled: boolean;
      };
      filters: Array<{ name: string }>;
    };
    storeProductsData: null;
    bannerData: null;
  };
  groupData: null;
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
  delAddress: null | string;
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
}

export interface UserState {
  loading: boolean;
  error: string;
  isActive: boolean;
  user: {};
}

export interface IUser {
  name?: string;
  email: string;
  password: string;
  phone?: string;
  card?: string;
  token?: string | null;
}
