import styles from "../styles/LanguagePicker.module.scss";
import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { TranslateIcon } from "./SVGs/Icons";
import { useLocale } from "@/contexts/LocaleContext";

interface ILocale {
  code: string;
  name: string;
}

const locales: ILocale[] = [
  { code: "en", name: "English" },
  { code: "pt", name: "Portuguese" },
];

export const LanguagePicker = () => {
  const [open, setOpen] = useState(false);
  const { currentLocale, setCurrentLocale } = useLocale();

  const handleLocaleChange = (newLocale: string) => {
    const extractedLocale = newLocale.split(" ")[0];

    setCurrentLocale(extractedLocale);
  };

  console.log(currentLocale);

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenu.Trigger className={styles.DropdownMenuTrigger}>
        <TranslateIcon />
        {currentLocale}
      </DropdownMenu.Trigger>

      {open && (
        <DropdownMenu.Portal forceMount>
          <DropdownMenu.Content
            className={styles.DropdownMenuContent}
            sideOffset={5}
            collisionPadding={5}
          >
            {locales.map((locale: ILocale) => (
              <DropdownMenu.Item
                key={locale.code}
                className={`${styles.DropdownMenuItem} ${
                  locale.code === currentLocale ? styles.active : ""
                }`}
                onSelect={() => handleLocaleChange(locale.code)}
              >
                {`${locale.code} - ${locale.name}`}
              </DropdownMenu.Item>
            ))}

            {/* <DropdownMenu.Arrow className={styles.DropdownMenuArrow} /> */}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      )}
    </DropdownMenu.Root>
  );
};
