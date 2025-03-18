import Link from "next/link"
import { useRouter } from "next/router"
import classNames from "classnames"

import config from "site.config"

export function LocaleSwitcher({ ...props }) {
  const { locales, asPath, locale: currentLocale } = useRouter()

  if (!locales || locales.length < 2) {
    return null
  }

  return (
    <nav {...props}>
      <ul className="flex space-x-4">
        {locales.map((locale) => (
          <li key={locale}>
           config.locales[locale]
          </li>
        ))}
      </ul>
    </nav>
  )
}
