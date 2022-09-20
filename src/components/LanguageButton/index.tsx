type LanguageButtonProps = {
  code: string;
  name: string;
  iso: string;
  file: string;
}

export const LanguageButton: React.FC<LanguageButtonProps> = ({ code, name, iso }) => {
  return (
    <div>{name}</div>
  )
}
