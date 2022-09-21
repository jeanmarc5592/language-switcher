import { Link } from 'react-router-dom';
import styles from './LanguageButton.module.css';
import bgFlag from '../../icons/bg.svg';
import deFlag from '../../icons/de.svg';
import enFlag from '../../icons/en.svg';
import huFlag from '../../icons/hu.svg';
import plFlag from '../../icons/pl.svg';
import roFlag from '../../icons/ro.svg';
import ruFlag from '../../icons/ru.svg';

type LanguageButtonProps = {
  code: string;
  name: string;
  iso: string;
  file: string;
}

export const LanguageButton: React.FC<LanguageButtonProps> = ({ code, name, iso }) => {
  const getCountryFlag = (countryCode: string): string => {
    switch (countryCode) {
      case 'bg':
        return bgFlag;
      case 'de':
        return deFlag;
      case 'en':
        return enFlag;
      case 'hu':
        return huFlag;
      case 'pl':
        return plFlag;
      case 'ro':
        return roFlag;
      case 'ru':
        return ruFlag;
      default: 
        return '';
    }
  }

  return (
    <Link to={`/${iso.toLowerCase()}`} className={styles.container}>
      <img width="32px" height="32px" alt={`${code}-flag`} src={getCountryFlag(code)} />
      <p className={styles.countryLabel}>{name}</p>
    </Link>
  )
}
