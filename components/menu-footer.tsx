import Link from "next/link"
import { DrupalMenuLinkContent } from "next-drupal"

interface MenuFooterProps {
  items: DrupalMenuLinkContent[]
}

export function MenuFooter({ items, ...props }: MenuFooterProps) {
  return (
    <nav {...props}>
      <ul className="flex flex-col space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            {/* ✅ Updated Link Component */}
            <Link
              href={item.url}
              className="text-sm font-semibold transition-colors hover:bg-black hover:underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
