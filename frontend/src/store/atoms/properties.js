import {atom, atomFamily, selector, selectorFamily} from "recoil"
import axios from "axios";

export const propertiesAtom = atom({
    key: "propertiesAtom",
    default: selector({
        key: "getProperties",
        get: async() => {

            const token = localStorage.getItem("token");
            try{
                const response = await axios.get(`${process.env.API_URL}/api/v1/listings/show`, {
                headers: {
                    'Content-Type': 'application/json', // Example header
                    'Authorization': `${token}`, // Example header
                }
                });
                return response.data.properties;
            }
            catch(e) {
                return [];
            }
        }
    })
})

export const singlePropSelector = selectorFamily({
    key: "singlePropSelector",
    get: (id) => async () => {
        const token = localStorage.getItem("token");
            try{
                const response = await axios.get(`${process.env.API_URL}/api/v1/listings/getProp/${id}`, {
                headers: {
                    'Content-Type': 'application/json', // Example header
                    'Authorization': `${token}`, // Example header
                }
                });
                return response.data.property;
            }
            catch(e) {
                return null;
            }
    }
})

export const featuredPropAtom = selectorFamily({
    key: "featuredPropAtomFamily",
    get: () => ({get}) => {

        const allProperties = get(propertiesAtom);

        const filteredProps = allProperties.filter(prop => prop.featured === true)

        return filteredProps;
    }
})