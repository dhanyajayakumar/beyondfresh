import { linkType } from "./constants";

export const bannerOrSliderLink = (type: any, link: any) => {
  if (!type || !link) return "";

  switch (type) {
    case linkType.CUSTOM:
      if (link.startsWith("http://") || link.startsWith("https://")) {
        // window.location.href = link;
        return link;
      } else {
        return link;
      }
    case linkType.CATEGORY:
      return `/product-listing/${link}`;
    case linkType.PRODUCT:
      return `/product-listing/${link}`;
    case linkType.PRODUCTS:
      return `/product-listing/${link}`;
    case linkType.BRAND:
      return `/brand/${link}`;
    case linkType.BRANDS:
      return `/brand/${link}`;
    default:
      return "";
  }
};

export const collectioncategoryLink = (id: string) => {
  return `/product-listing?collectioncategory=${id}`;
};
export const collectionproductLink = (id: string) => {
  return `/product-listing?collectionproduct=${id}`;
};
