export interface mainMenuProps {
  menuEnabled: boolean;
  subEnabled: (value: boolean) => void;
  children?: React.ReactNode; // Optional children prop
  mainDisabled: (value: boolean) => void;

}

export interface subMenuProps {
  subEnabled: boolean;
  subDisabled: (value: boolean) => void;
  mainDisabled: (value: boolean) => void;
}

export interface registerFormInput {
  name: string;
  email: string;
  phone: string;
  referralCode: string;
  password: string;
  rePassword: string;
  aggreeWithTermsAndCondions: boolean;
  otpType:string;

}

export interface apiRegisterData {
  email: string;
  firstName: string;
  phone: string;
  password: string;
  confirmPassword: string;
  aggreeWithTermsAndCondions: boolean;
  otpType:string;

}


export interface loginFormInput {
  email: string;
  password: string;
}
export interface apiLoginData {
  email: string;
  password: string;
}

export interface forgotFormInput {
  email: string;
  password: string;
  rePassword: string;
  otp: string;
}
export interface myProfileInput {
  firstName: string;
  email: string;
  phone: string;
}
export interface apiforgotData {
  email: string;
}

export interface apiResettData {
  email: string;
  password: string;
  confirmPassword: string;
  otp: string;
}

export interface otpFormInput {
  otp: string;
}

export interface apiResendOtp {
  otpType: string;
  email: string;
  userId: string;
}

export interface ProductListParams {
  getattribute: number;
  getimagegallery: number;
  categories?: string;
  specification?: string;
  brand?: string;
  minprice?: number;
  maxprice?: number;
  collectioncategory?: string;
}

export interface apiAddToCartData {
  quantity: number;
  // variantId: string;
  slug: string;
  quantityChange: boolean;

}
export interface apiUpdateCartData {
  quantity: number;
  // variantId: string;
  slug: string;
  quantityChange: boolean;

}
export interface apiDeleteCartData {
  quantity: number;
  // variantId: string;
  slug: string;
}

export interface applyCouponApiData {
  deviceType: any;
}
// types.ts
export interface AttributeDetail {
  _id: string;
  attributeId: number;
  itemName: string;
  itemValue: string;
}

export interface ProductVariantAttribute {
  attributeId: number;
  attributeTitle: string;
  attributeDetail: AttributeDetail;
}

export interface SelectedAttributesPayload {
  productVariantAttributes: ProductVariantAttribute[];
}
export interface wishlistAddData {
  slug: string;
  sku: string;
}