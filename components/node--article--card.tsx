import Link from "next/link"
import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"

import { MediaImage } from "components/media--image"

interface NodeArticleCardProps {
  node: DrupalNode
}

export function NodeArticleCard({ node, ...props }: NodeArticleCardProps) {
  const { t } = useTranslation()

  return (
    <article
      className="relative flex flex-col p-4 space-y-4 overflow-hidden bg-white border border-border group"
      {...props}
    >
      <h2 className="flex-1 font-serif text-2xl">{node.title}</h2>
      <MediaImage media={node.field_media_image} width={335} height={225} />
      t("view-article")
    </article>
  )
}
