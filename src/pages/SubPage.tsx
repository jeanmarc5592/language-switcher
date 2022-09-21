import { useLocation } from "react-router"
import localesList from '../data/locales.json';

type LocaleData = {
  code: string;
  name: string;
  iso: string;
  file: string;
};

type LocalesListData = {
  locales: LocaleData[]
}

export const SubPage = () => {
  const location = useLocation();

  const getCurrentLanguage = (isoCode: string, localesList: LocalesListData): string => {
    // Strips the '/' from the isocode
    const cleanIsoCode = isoCode.replace('/', '');
    const currentLocale = localesList.locales.find(locale => locale.iso.toLowerCase() === cleanIsoCode);
    if (!currentLocale) {
      return `Sorry, but '${cleanIsoCode}' is not available`;
    }
    return currentLocale.name;
  };

  return (
    <>
      <h1>{getCurrentLanguage(location.pathname, localesList)}</h1>
    </>
  )
}
