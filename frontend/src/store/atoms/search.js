import { atom } from "recoil";


export const search = atom({
    key: "searchAtom",
    default: {
        name: "",
        address: "",
        propertyType: "",
        priceRange: "",
    }
})