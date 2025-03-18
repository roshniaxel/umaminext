import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"
import Link from "next/link"

import { MediaImage } from "components/media--image"

interface NodeRecipeCardProps {
  node: DrupalNode
}

export function NodeRecipeCard({ node, ...props }: NodeRecipeCardProps) {
  const { t } = useTranslation()

  return (
    <article
      className="relative flex flex-col p-4 space-y-4 overflow-hidden bg-white border border-border group"
      {...props}
    >
      <h2 className="flex-1 font-serif text-[22px]">{node.title}</h2>
      t("view-recipe")
      <MediaImage media={node.field_media_image} width={335} height={225} />
    </article>
  )
}
