import { SingleBlogType, MultipleBlogLanguageType } from "@/types/type";
import React, { useContext, useEffect, useState } from "react";
import { ImageComponent } from "./Render";
import Link from "next/link";
import RenderMarkdown from "@/hoc/RenderMarkdown";
import UserContext from "@/context/UserContext";

const RenderText = ({ text }: { text: string }) => {
    const [references, setReferences] = useState<string[]>([]);
    const { slug, setSlug } = useContext(UserContext);

    useEffect(() => {
        const answer = [];
        let subtext = "";

        for (let i = 0; i < text?.length || 0; i++) {
            if (text[i] === "[") {
                if (subtext) {
                    if (subtext.length > 2) {
                        answer.push(subtext);
                    }
                }
                subtext = "";

                let j = i;
                while (text[j] != ")") {
                    subtext += text[j];
                    j += 1;
                }
                answer.push(subtext + ')');
                subtext = "";
                i = j + 1;
            } else {
                subtext += text[i];
            }
        }

        if (answer.length === 0 || subtext.length > 0) {
            if (subtext.length > 2) {
                answer.push(subtext);
            }
        }

        setReferences(answer);
    }, [])

    return (
        <>
            {
                // answer = ['[1](aconite)', 'is a poison', '[2](plant)']
                // each element is made of [id](reference_text)
                // extract id and reference_text and store it in result
                references.map((text, index) => {
                    if (text[0] !== '[') {
                        return <RenderMarkdown key={index} text={text} />
                    }

                    const regex = /\[(\d+)\]\((.*?)\)/;
                    const match = regex.exec(text);


                    if (match) {
                        const id = match[1];
                        const referenceText = match[2];
                        return (
                            <Link
                                key={index}
                                href={id}
                                passHref={true}
                                onClick={() => {
                                    setSlug(id);
                                    console.log("slug -->", id);
                                }}
                                className="p-1 text-primary backlink "
                            >
                                {referenceText + ' '}
                            </Link>
                        )
                    }
                })
            }
        </>
    )
}

export const Blog = ({ blog }: { blog: SingleBlogType }) => {
    const [language, setLanguage] = useState<string>('gujarati');

    useEffect(() => {
        if (!blog?.attributes?.gujarati) {
            if (!blog.attributes.hindi) {
                setLanguage('english')
            } else {
                setLanguage('hindi');
            }
        }
    }, [])

    const blogData: MultipleBlogLanguageType = [
        {
            image: blog?.attributes?.image3,
            text: blog?.attributes?.gujarati,
            lang: "gujarati"
        },
        {
            image: blog?.attributes?.image2,
            text: blog?.attributes?.hindi,
            lang: "hindi"
        },
        {
            image: blog?.attributes?.image1,
            text: blog?.attributes?.english,
            lang: 'english'
        }
    ]

    const isButtonActive = (blogData: MultipleBlogLanguageType, lang: string) => {
        return blogData.filter((data) => data.lang === lang.toLowerCase())[0].text !== null
    }

    return (
        <section
            className='prose md:prose-md lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto mt-5   '
            aria-label='blog post image'
        >
            <h1>
                {blog?.attributes?.title}
            </h1>

            <div className="inline-flex rounded-md shadow-sm" role="group">
                <div className="join">
                    {
                        ['gujarati', 'hindi', 'english'].map((lang) => {
                            return (
                                <button
                                    type='button'
                                    key={lang}
                                    disabled={
                                        !isButtonActive(blogData, lang)
                                    }
                                    className={
                                        isButtonActive(blogData, lang) ?
                                            `btn btn-sm join-item btn-primary ${lang.toLowerCase() === language ? 'btn-primary ' : 'btn-secondary btn-outline '}` :
                                            `btn btn-sm btn-outline join-item btn-disabled`
                                    }
                                    onClick={() => setLanguage(lang.toLowerCase())}
                                >
                                    {lang.toLowerCase().substring(0, 3)}
                                </button>
                            )
                        })
                    }
                </div>
            </div>

            <p>
                {new Date(blog?.attributes?.createdAt).toLocaleDateString("en")}
            </p>

            <section >
                {
                    blogData.map((attribute, index) => {
                        return (
                            <React.Fragment key={index}>
                                {
                                    attribute.lang === language && (
                                        <>
                                            <ImageComponent image={attribute.image} />
                                            <RenderText
                                                text={attribute.text}
                                            />
                                        </>
                                    )
                                }

                            </React.Fragment>
                        )
                    })
                }
            </section>
        </section>
    )
}