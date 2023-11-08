import { useMutation } from 'react-query';
import axios from 'axios';
import { clientProduct } from '@/types/clietProduct';

export function useCreateProduct() {
  return useMutation((productData: clientProduct) => {
    console.log("PRODUCT: ", productData);
    return axios.post("/api/product", productData);
  });
}
