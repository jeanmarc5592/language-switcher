import styles from './LanguageButton.module.css';
type LanguageButtonProps = {
  code: string;
  name: string;
  iso: string;
  file: string;
}

export const LanguageButton: React.FC<LanguageButtonProps> = ({ code, name, iso }) => {
  return (
    <a href="/jo" className={styles.container}>
      {/* TODO: Add dynamic flag */}
      <p className={styles.countryLabel}>{name}</p>
    </a>
  )
}
