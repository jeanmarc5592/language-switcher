import localesList from '../../data/locales.json';
import { LanguageButton } from '..';

export const LanguageList = () => {
  return (
    <div>
      {localesList.locales.map(locale => {
        return (
          <LanguageButton {...locale} key={locale.code} />
        )
      })}
    </div>
  )
}
