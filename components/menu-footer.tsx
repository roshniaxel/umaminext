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
            <span className="text-sm font-semibold transition-colors hover:bg-black hover:underline">
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}
