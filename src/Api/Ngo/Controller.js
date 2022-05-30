import ApiClient from "../Client";

export const ngoController = {
    getNgos: async () => {
        try {
            const response = await ApiClient.get("/admin/v1/ngos");
            return response;
        } catch (error) {
            return error;
        }
    },

    getNgoDetails: async (ngoExternalId) => {
        try {
            const response = await ApiClient.get(`/admin/v1/ngos/${ngoExternalId}`);
            return response;
        } catch (error) {
            return error;
        }
    },

    changeNgoStatus: async (ngoExternalId, status) => {
        try {
            const response = await ApiClient.put(`/admin/v1/ngos/${ngoExternalId}/${status}`);
            return response;
        } catch (error) {
            return error;
        }
    }

};
