import { defineStore } from "pinia";
import { Entity, IAccessory, IJewelry, IWatch } from "~/types";

export const useCheckoutStore = defineStore("checkout", () => {
  const cart = useCartStore();
  const productsList = computed(() => {
    return [
      ...cart.productCart.products.watches.filter((product) =>
        cart.checkIsSelected(product.product.id, Entity.watches)
      ),
      ...cart.productCart.products.accessories.filter((product) =>
        cart.checkIsSelected(product.product.id, Entity.accessories)
      ),
      ...cart.productCart.products.jewelry.filter((product) =>
        cart.checkIsSelected(product.product.id, Entity.jewelry)
      ),
    ];
  });
  return {
    productsList,
  };
});
