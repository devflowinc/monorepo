import React from 'react'
import { PortableText } from '@src/lib/sanity'
import GetImage from '@src/utils/get-image';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { types } from '@shared/cms';
import { parseISO, format } from "date-fns";

export type DynamicPageProps = types.Page & {
  author: types.Author;
}

const DynamicPage = ({ title, body, author, pageType, description, publishedAt }: DynamicPageProps) => {
  const isBlog = pageType == 'blog-post';
  const AuthorImageProps = GetImage(author.image)!;

  return (
    <>
      <NextSeo
        title={`${title} — Debate Land ${isBlog ? 'Blog' : ''}`}
        description={description}
      />
      <article className="pt-8 min-h-screen mx-2">
        <div className="relative max-w-[700px] mx-auto rounded-lg grid place-items-center aspect-video bg-gradient-to-r from-sky-400 via-purple-500 to-red-400">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white mb-4 text-3xl sm:text-4xl md:text-6xl text-center font-black md:!leading-[4.5rem]">{title}</h1>
            {
              isBlog && <div className="flex justify-center items-center gap-3 w-full bg-gray-50/10 px-2 py-1 rounded-2xl max-w-fit">
                <Image
                  src={AuthorImageProps.src}
                  // blurDataURL={AuthorImageProps.}
                  loader={AuthorImageProps.loader}
                  alt={author.name}
                  // placeholder="blur"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <p className="text-gray-200">
                    {author.name}
                    {/* TODO: Go to /team page from here */}
                  </p>
                </div>
              </div>
            }
            <p className="text-white/50 absolute bottom-1 sm:bottom-3 md:bottom-5">
              {
                format(
                  parseISO(publishedAt),
                  "MMMM dd, yyyy"
                )
              }
            </p>
          </div>
        </div>
        <div className="max-w-[700px] mx-auto my-3 prose dark:prose-invert prose-base prose-headings:my-2 w-full">
          <p className="italic">{description}</p>
          {body && <PortableText value={body} />}
        </div>
      </article>
    </>
  )
};

export default DynamicPage;
