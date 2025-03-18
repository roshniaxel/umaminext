import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"

import { MediaImage } from "components/media--image"
import { Breadcrumbs } from "components/breadcrumbs"
import { FormattedText } from "components/formatted-text"

interface NodeRecipeProps {
  node: DrupalNode
}

export function NodeRecipe({ node, ...props }: NodeRecipeProps) {
  const { t } = useTranslation()

  return (
    <div className="container" {...props}>
      <Breadcrumbs
        items={[
          {
            title: t("recipes"),
            url: "/recipes",
          },
          {
            title: node.title,
          },
        ]}
      />
      <article className="p-6 bg-white border border-border sm:p-9 text-text">
        <div className="flex flex-col space-y-4">
          <h1 className="font-serif text-4xl">{node.title}</h1>
          {node.field_recipe_category?.length ? (
            <div className="flex space-x-2">
              <span className="font-semibold">{t("recipe-category")}: </span>
              {node.field_recipe_category.map((tag) => (
                <span key={tag.id} className="text-link">
                  {tag.name}
                </span>
              ))}
            </div>
          ) : null}
          {node.field_tags?.length ? (
            <div className="flex space-x-2">
              <span className="font-semibold">{t("tags")}: </span>
              {node.field_tags.map((tag) => (
                <span key={tag.id} className="text-link">
                  {tag.name}
                </span>
              ))}
            </div>
          ) : null}
          {node.field_summary && (
            <div>
              <FormattedText text={node.field_summary.processed} />
            </div>
          )}
        </div>
        <div className="grid gap-4 py-10 lg:grid-cols-2">
          <MediaImage media={node.field_media_image} width={770} height={512} />
          <div className="grid gap-4 lg:grid-cols-2">
            {node.field_preparation_time && (
              <div className="flex items-center space-x-2 lg:flex-col">
                <svg
                  className="w-10 h-10 lg:w-14 lg:h-14 text-primary"
                  fill="currentColor"
                  viewBox="0 0 600 600"
                >
                  <defs />
                  <path d="M540.13 125.81C530 105.45 504.5 85.08 479 85.08a41.47 41.47 0 0 0-9.46.73c-7.27 1.45-26.91 5.82-136.73 130.92h-.73c-8.73 0-13.82 0-145.46 138.19C122.66 420.37 60.11 488 59.38 488.74a14.55 14.55 0 0 0 8 24 122.6 122.6 0 0 0 24 2.18c69.09 0 152.73-53.82 210.92-98.91 39.27-30.55 113.46-96.73 115.64-114.19.73-6.55-2.18-13.82-9.46-23.27L487 181.81h3.64c14.55 0 34.91-3.64 47.28-19.64 8.08-9.45 8.76-23.27 2.21-36.36zM102.29 485.1c85.1-90.91 203.65-215.28 230.56-237.83 13.82 8.73 45.09 37.82 53.82 50.91C361.94 330.91 207 474.92 102.29 485.1zM515.4 144.72c-5.82 7.27-18.91 8-24.73 8a45.59 45.59 0 0 1-8-.73c-5.09-.73-10.18 1.45-13.82 5.09l-78.55 96.73a246.41 246.41 0 0 0-30.55-25.46c93.83-104.72 114.2-113.45 115.65-114.18 9.46-2.18 25.46 6.55 34.18 18.91 5.82 6.55 5.82 10.92 5.82 11.64z" />
                  <circle cx="483.4" cy="135.26" r="9.46" />
                </svg>
                <p className="font-semibold">{t("preparation-time")}:</p>
                <p className="lowercase">
                  {node.field_preparation_time} {t("minutes")}
                </p>
              </div>
            )}
            {node.field_cooking_time && (
              <div className="flex items-center space-x-2 lg:flex-col">
                <svg
                  className="w-10 h-10 lg:w-14 lg:h-14 text-primary"
                  fill="none"
                  viewBox="0 0 600 600"
                >
                  <defs />
                  <path d="M299.32 388.92c-1.35 2.7-2 4.73-2.7 6.08-3.38 7.43-5.4 12.83-7.43 16.88h20.94c-2-3.38-4.05-8.1-6.75-14.18-1.38-3.38-2.7-6.08-4.06-8.78zM196.67 276.81a13.51 13.51 0 0 1 27 0v32.42h33.09v-32.42a13.51 13.51 0 1 1 27 0v32.42h32.42v-32.42a13.51 13.51 0 1 1 27 0v32.42h32.42v-32.42a13.51 13.51 0 0 1 27 0v32.42h33.09C424.26 212.66 352 118.11 299.32 118.11c-51.33 0-124.26 95.9-136.42 191.12h33.77z" />
                  <path d="M388.47 336.24H160.88c.68 110.75 71.59 150.6 138.44 150.6s137.77-39.17 137.09-150.6zm-47.95 93.2c-4.73 9.45-12.83 9.45-39.17 9.45h-8.1c-20.26 0-30.39 0-34.44-10.13-2.7-6.75-2-10.13 13.51-44.57 13.51-30.39 16.88-36.47 27-36.47s13.51 6.08 29.71 38.49c13.52 29.05 14.87 35.79 11.49 43.23z" />
                  <path
                    fill="currentColor"
                    d="M299.32 91.1c-75.64 0-164.78 132.37-164.78 243.8 0 108.73 64.83 179 165.46 179s165.46-70.23 165.46-179C464.78 220.76 377 91.1 299.32 91.1zm0 27c52.68 0 124.94 94.55 136.42 191.12h-33.09v-32.41a13.51 13.51 0 0 0-27 0v32.42h-32.43v-32.42a13.51 13.51 0 1 0-27 0v32.42h-32.43v-32.42a13.51 13.51 0 1 0-27 0v32.42h-33.1v-32.42a13.51 13.51 0 0 0-27 0v32.42h-33.78C175.06 214 248 118.11 299.32 118.11zm0 368.73c-66.86 0-137.77-39.84-138.44-150.6h275.54c.67 111.44-70.24 150.61-137.1 150.61z"
                  />
                </svg>
                <p className="font-semibold">{t("cooking-time")}:</p>
                <p className="lowercase">
                  {node.field_cooking_time} {t("minutes")}
                </p>
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  )
}
