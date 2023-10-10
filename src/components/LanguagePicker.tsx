import styles from "../styles/LanguagePicker.module.scss";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { useState } from "react";

import { TranslateIcon } from "./SVGs/Icons";
import { useLocale } from "@/contexts/LocaleContext";
import { useLanguages } from "@/hooks/useTranslations";

export const LanguagePicker = () => {
  const [open, setOpen] = useState(false);
  const { currentLocale, setCurrentLocale } = useLocale();

  const languages = useLanguages();

  const handleLocaleChange = (newLocale: string) => {
    const extractedLocale = newLocale.split(" ")[0];

    setCurrentLocale(extractedLocale);
  };

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
            {languages.map((language) => (
              <DropdownMenu.Item
                key={language.code}
                className={`${styles.DropdownMenuItem} ${
                  language.code === currentLocale ? styles.active : ""
                }`}
                onSelect={() => handleLocaleChange(language.code)}
              >
                {`${language.code} - ${language.name}`}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      )}
    </DropdownMenu.Root>
  );
};
