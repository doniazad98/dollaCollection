import React, { useCallback, useContext, useMemo } from 'react'
import type { TranslateOptions, Locales } from 'i18n-js'
import { I18n } from 'i18n-js'
import { translations } from '@/config/locales'

interface Props {
  children: React.ReactChild | React.ReactChild[]
  defaultLocale: 'en' | 'de'
  locale: 'en' | 'de'
}

type TranslateT = <t extends keyof Locales>(
  key0: t,
) => (
  key1: Extract<keyof Locales[t], string>,
  e?: string | number | undefined | null | boolean,
  options?: TranslateOptions,
) => string

type LocalesContextType = {
  translate: TranslateT
}

const localesContext = React.createContext<LocalesContextType>({
  translate: () => () => '',
})

export function LocalesContextProvider({ children, defaultLocale, locale }: Props) {
  const i18n = useMemo(
    () =>
      new I18n(translations, {
        defaultLocale,
        locale: locale || defaultLocale,
      }),
    [locale, defaultLocale],
  )

  const translate = useCallback<TranslateT>(
    (key0) => (key1, e, options) =>
      i18n.t(e !== undefined ? [key0, key1, e].join('.') : [key0, key1].join('.'), options),
    [i18n],
  )
  const contextValue = useMemo((): LocalesContextType => ({ translate }), [translate])

  return <localesContext.Provider value={contextValue}>{children}</localesContext.Provider>
}

export const useTranslation = <t extends keyof Locales>(file: t) => {
  const { translate } = useContext<LocalesContextType>(localesContext)
  return { t: translate(file) }
}
