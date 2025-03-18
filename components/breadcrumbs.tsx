import { useTranslation } from "next-i18next"
import Link from "next/link"

export interface BreadcrumbsProps {
  items: {
    title: string
    url?: string
  }[]
}

export function Breadcrumbs({ items, ...props }: BreadcrumbsProps) {
  const { t } = useTranslation()

  // Return nothing if no items
  if (!items?.length) {
    return null
  }

  // Add home as the first breadcrumb
  items.unshift({
    title: t("home"),
    url: "/",
  })

  return (
    <nav className="py-4 text-text" {...props}>
      <ol className="flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center leading-none truncate">
            {item.url ? (
              // ✅ Updated to new Link format
              <Link legacyBehavior={false} href={item.url} className="underline text-link">
                {item.title}
              </Link>
            ) : (
              // Render text if no URL
              item.title
            )}
            {index !== items.length - 1 && (
              <svg
                className="w-3 h-3 mx-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m13 17 5-5-5-5M6 17l5-5-5-5" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
