import { BlogListType, SingleBlogDataType } from "@/types/type";
import axios from "axios";

const myaxios = axios.create({
    baseURL: "https://jblog-strapi.onrender.com/api",
})

const api = {
    getBlogList: async (page: number) => {
        if (!page) {
            page = 1;
        }
        try {
            const result = await myaxios.get(`blogs?populate=*&fields[0]=Title&fields[1]=createdAt&pagination[1]=${page}&pagination[pageSize]=10`);
            return result.data as BlogListType;
        } catch (error: any) {
            console.log("error ->", error?.response)
            return {} as BlogListType;
        }
    },
    getSingleBlog: async (id: string) => {
        try {
            const result = await myaxios.get(`blogs/${id}?populate=*`);
            console.log("axios -->", result.data);
            return result.data as SingleBlogDataType;
        } catch (error: any) {
            console.log("error ->", error?.response)
            return {} as SingleBlogDataType;
        }
    }
}


export default api;