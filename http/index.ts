import $http from "./xhr";

export const demoGet = async () => await $http.get(`/url`);
export const demoPost = async (data: any) => await $http.post("/url", data);
