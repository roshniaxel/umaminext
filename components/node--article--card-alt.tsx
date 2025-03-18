import Link from "next/link"
import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"
import classNames from "classnames"

import { MediaImage } from "components/media--image"

interface NodeArticleCardAltProps extends React.HTMLProps<HTMLElement> {
  node: DrupalNode
}

export function NodeArticleCardAlt({
  node,
  className,
  ...props
}: NodeArticleCardAltProps) {
  const { t } = useTranslation()

  return (
    <article
      className={classNames(
        "relative flex flex-col p-4 space-y-4 overflow-hidden bg-white border border-border group",
        className
      )}
      {...props}
    >
      <div className="flex flex-col flex-1 space-y-4">
        <h2 className="flex-1 font-serif text-2xl">{node.title}</h2>
        t("view-article")
      </div>
      <MediaImage media={node.field_media_image} width={335} height={225} />
    </article>
  )
}
