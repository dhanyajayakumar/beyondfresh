import { useRouter } from "next/navigation";
import { menuType } from "./constants";
import {
  addToCartApi,
  wishlistAddApi,
  wishlistListApi,
} from "@/api/apiService";
import { toast } from "react-toastify";

export const useHandleNavigation = () => {
  const router = useRouter();

  const handleMenuNavigation = (item: any) => {
    switch (item?.menuType) {
      case menuType.CATEGORY:
        router.push(`/product-listing/${item?.linkedMenuItemId}`);
        break;
      case menuType.BRAND:
        router.push(`/brand/${item?.linkedMenuItemId}`);
        break;
      case menuType.BLANK:
        if (item?.customeLink.startsWith("HTML")) {
          window.location.href = item?.customeLink;
        } else {
          router.push(item?.customeLink);
        }
        break;
      default:
        console.warn("Unhandled menuType:", item?.menuType);
    }
  };

  return handleMenuNavigation;
};

export const getUniqueItems = (productVariants: any, type: any) => {
  const seen = new Set();
  const uniqueItems: any = [];

  productVariants?.forEach((variant: any) => {
    variant?.productVariantAttributes?.forEach((item: any) => {
      const itemName = item?.attributeDetail?.itemName;
      if (item?.attributeType === type && !seen?.has(itemName)) {
        seen.add(itemName);
        uniqueItems.push(item);
      }
    });
  });

  return uniqueItems;
};
export const foundVariantItem = (
  productVariants: any,
  slug: string,
  variantSku: string
) => {
  return productVariants?.find(
    (variant: any) =>
      variant.variantSku === variantSku && variant?.slug === slug
  );
};

export const isEmptyObject = (obj: any) => {
  return obj && Object?.keys(obj)?.length === 0;
};

export const offerCalculation = (foundVariant: any, offer: any) => {
  const originalPrice = parseInt(foundVariant?.price);
  const discountPrice = parseInt(foundVariant?.discountPrice);
  const discountPercentage = parseInt(offer?.offerIN);

  if (discountPrice > 0) {
    const percentageDecimal = discountPercentage / 100;
    const discountedPrice = discountPrice * (1 - percentageDecimal);
    const discountDiff = originalPrice - discountedPrice;
    const discountPercentageOfOriginal = (discountDiff / originalPrice) * 100;
    return discountPercentageOfOriginal?.toFixed() + "%";
  } else {
    // const percentageDecimal = originalPrice / 100;
    // const percentageDecimal = originalPrice / 100;
    // const discountedPrice = discountPrice * (1 - percentageDecimal);
    return discountPercentage?.toFixed() + "%";
  }
};

export const addWishlist = (slug: string, sku: string) => {
  try {
    const data = {
      slug: slug,
      sku: sku,
    };
    return wishlistAddApi(data)
      .then((responseData) => {
        if (responseData?.status) {
          toast.success(responseData?.message);
          return responseData?.requestedData;
        } else {
          toast.success(responseData?.message);
          return false;
        }
      })
      .catch((error) => {
        toast.error(error?.message);
        return false;
      });
  } catch (error: any) {
    toast.error(error);
    console.log(error);
    return false;
  }
};

export const addToCart = (
  quantity: number,
  slug: string,
  quantityChange: boolean = false
) => {
  try {
    let data: any = {
      quantity: quantity,
      slug: slug,
    };

    if (quantityChange) {
      data = {
        ...data,
        quantityChange: true,
      };
    }
    return addToCartApi(data)
      .then((responseData) => {
        if (responseData?.status) {
          toast.success(responseData?.message);
          return responseData;
        }
      })
      .catch((error) => {
        toast.error(error?.message);
        return false;
      });
  } catch (error: any) {
    toast.error(error);
    console.log(error);
  }
};

export const FindWishlistItem = async (
  slug: string,
  variantSku: string,
  wishlistResp: any
) => {
  // const result = await wishlistListApi();
  if (wishlistResp) {
    return (
      wishlistResp?.find(
        (item: any) => item?.slug === slug && item?.variantSku === variantSku
      ) || null
    );
  }
};

export const handleCopy = async (text: any) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success("Text copied to clipboard");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};

export function getFirstKeyValue(obj: any) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return obj[key]; // Return the value of the first key
    }
  }
  return null; // Return null if the object is empty
}
