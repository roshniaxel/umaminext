import { useRouter } from "next/router"
import classNames from "classnames"

import config from "site.config"

export function LocaleSwitcher({ ...props }) {
  const { locales, locale: currentLocale } = useRouter()

  if (!locales || locales.length < 2) {
    return null
  }

  return (
    <nav {...props}>
      <ul className="flex space-x-4">
        {locales.map((locale) => (
          <li key={locale}>
            <span
              data-cy={`local-switcher-${locale}`}
              className={classNames(
                locale === currentLocale ? "font-semibold" : "font-normal"
              )}
            >
              {config.locales[locale]}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}
