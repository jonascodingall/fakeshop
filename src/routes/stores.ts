import { writable } from "svelte/store";
import type { Product } from "$lib/types/product";


export const currentProduct = writable<Product|null>(null)
export const nightMode = writable<boolean>(false)