export type ImageFormatType = {
    ext: string,
    url: string,
    hash: string,
    mime: string,
    name: string,
    path: string,
    size: number,
    width: number,
    height: number,
    provider_metadata: {
        public_id: string,
        resource_type: string
    }
}

export type SingleImageType = {
    data: {
        id: number,
        attributes: {
            name: string,
            alternativeText: string,
            caption: string,
            width: number,
            height: number,
            formats: {
                large: ImageFormatType,
                small: ImageFormatType,
                medium: ImageFormatType,
                thumbnail: ImageFormatType
            },
            hash: string,
            ext: string,
            mime: string,
            size: number,
            url: string,
            previewUrl: string,
            provider: string,
            provider_metadata: {
                public_id: string,
                resource_type: string
            },
            createdAt: string,
            updatedAt: string
        }
    }
}

export type SingleBlogLanguageType = {
    content: SingleImageType,
    text: string,
    lang: string
}

export type MultipleBlogLanguageType = SingleBlogLanguageType[];

export type SingleBlogType = {
    id: number,
    attributes: {
        title: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        locale: string,
        english: string,
        hindi: string,
        gujarati: string,
        Image: SingleImageType,
        image1: SingleImageType,
        image2: SingleImageType,
        image3: SingleImageType,
        localizations: {
            [key: string]: any;
        }
    }
}

export type SingleBlogMetaType = {
    pagination: {
        page: number,
        pageSize: number,
        pageCount: number,
        total: number
    }
}

export type SingleBlogListType = Omit<SingleBlogType, "attributes"> & {
    attributes: {
        title: string,
        createdAt: string,
        Image: SingleImageType
    }
}

export type SingleBlogDataType = {
    data: SingleBlogType,
    meta: SingleBlogMetaType
}

export type BlogDataType = {
    data: SingleBlogType[],
    meta: SingleBlogMetaType
}

export type BlogListType = {
    data: SingleBlogListType[],
    meta: SingleBlogMetaType
}
