export interface IRestaurant {
  title: string;
  totalElements: number;
  elements: Array<{
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
  }>;
}

declare module namespace {
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

  export interface Element {
    type: string;
    singleData: SingleData;
    groupData?: any;
  }

  export interface RootObject {
    title: string;
    totalElements: number;
    offset: number;
    elements: Element[];
  }
}

declare module dataDel {
  export interface Element {
    storeAddressId: number;
    etaLowerBound: number;
    etaUpperBound: number;
  }

  export interface RootObject {
    elements: Element[];
  }
}

export declare module menuGlobal {
  export interface menuUnit {
    id: number;
    slug: string;
    brandName: string;
    headerBackgroundImage: string;
    deliveryTime1: number;
    deliveryTime2: number;
    deliveryPrice: number;
    rate: number;
    message: string;
    menu: Array<category>;
  }

  export interface category {
    category: {
      categoryName: string;
      categoryImage: string;
      bonus: string;
    };
    products: Array<product>;
  }

  export interface product {
    name: string;
    description: string;
    price: number;
    image: string;
    bonus: string;
    modifiers: string;
  }
}
