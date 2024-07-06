// productUtils.ts

interface ProductVariant {
    isDefault: number;
    slug: string;
    variantSku: string;
    quantity: number;
  }
  
  interface ProductData {
    productVariants?: ProductVariant[];
    slug?: string;
    sku?: string;
  }
  
  export const findDefaultProductVariant = (data: ProductData): ProductVariant | null => {
    if (!data) return null;
    const { productVariants } = data;
    if (!productVariants) return null;
  
    const defaultVariant = productVariants.find((variant) => variant.isDefault === 1);
    if (defaultVariant) return defaultVariant;
  
    const slugVariant = productVariants.find((variant) => variant.slug === data.slug);
    if (slugVariant) return slugVariant;
  
    const skuVariant = productVariants.find((variant) => variant.variantSku === data.sku);
    if (skuVariant) return skuVariant;
  
    const quantityVariant = productVariants.find((variant) => variant.quantity > 0);
    if (quantityVariant) return quantityVariant;
  
    return null;
  };
  
  export const findSpecificationBySlug = (variant: ProductVariant | undefined, slug: string): any | null => {
    return variant?.productSpecification?.find((spec) => spec.slug === slug) || null;
  };
  