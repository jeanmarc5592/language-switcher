import localesList from '../../data/locales.json';
import { LanguageButton } from '..';
import styles from './LanguageList.module.css';

export const LanguageList = () => {
  return (
    <div className={styles.languageGrid}>
      {localesList.locales.map(locale => {
        return (
          <LanguageButton {...locale} key={locale.code} />
        )
      })}
    </div>
  )
}
