import { BlogListType, SingleImageType } from "./type"

export const ImageDefault: SingleImageType = {
    data: {
        id: 0,
        attributes: {
            name: "",
            alternativeText: "",
            caption: "",
            width: 0,
            height: 0,
            formats: {
                large: {
                    ext: "",
                    url: "",
                    hash: "",
                    mime: "",
                    name: "",
                    path: "",
                    size: 0,
                    width: 0,
                    height: 0,
                    provider_metadata: {
                        public_id: "",
                        resource_type: ""
                    }
                },
                small: {
                    ext: "",
                    url: "",
                    hash: "",
                    mime: "",
                    name: "",
                    path: "",
                    size: 0,
                    width: 0,
                    height: 0,
                    provider_metadata: {
                        public_id: "",
                        resource_type: ""
                    }
                },
                medium: {
                    ext: "",
                    url: "",
                    hash: "",
                    mime: "",
                    name: "",
                    path: "",
                    size: 0,
                    width: 0,
                    height: 0,
                    provider_metadata: {
                        public_id: "",
                        resource_type: ""
                    }
                },
                thumbnail: {
                    ext: "",
                    url: "",
                    hash: "",
                    mime: "",
                    name: "",
                    path: "",
                    size: 0,
                    width: 0,
                    height: 0,
                    provider_metadata: {
                        public_id: "",
                        resource_type: ""
                    }
                }
            },
            hash: "",
            ext: "",
            mime: "",
            size: 0,
            url: "",
            previewUrl: "",
            provider: "",
            provider_metadata: {
                public_id: "",
                resource_type: ""
            },
            createdAt: "",
            updatedAt: ""
        }
    }
}

export const BlogListDefault: BlogListType = {
    data: [
        {
            id: 0,
            attributes: {
                title: "",
                createdAt: "",
                Image: ImageDefault,
            }
        },
        {
            id: 0,
            attributes: {
                title: "",
                createdAt: "",
                Image: ImageDefault,
            }
        }
    ],
    meta: {
        pagination: {
            page: 0,
            pageSize: 0,
            pageCount: 0,
            total: 0
        }
    }
}