import { atom } from "recoil";


export const search = atom({
    key: "searchAtom",
    default: {
        name: "",
        address: "India",
        propertyType: "Villa",
        priceRange: "10000",
    }
})