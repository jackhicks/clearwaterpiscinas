import React, { useEffect, useState } from 'react';
import { RiGlobalLine } from 'react-icons/ri';
import i18next from 'i18next';
import '../../i18n';
import Cookies from 'js-cookie';
import { GB, ES } from 'country-flag-icons/react/3x2';
const countryList = [
  { code: 'en', name: 'English', widget: GB },
  { code: 'es', name: 'Español', widget: ES },
];

export interface LanguageSelectorProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  mobile: boolean;
}
export const LanguageSelector = (mobile: LanguageSelectorProps) => {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [lang, setLang] = useState(
    Cookies.get('clearwaterpiscinasLang') || 'en',
  );

  const toggleOpenLanguageDropdown = (state: string) => {};

  const SetLanguage = (lang: string) => {
    setLang(lang);
    i18next.changeLanguage(lang).then(t => {
      t('key');
    });
    Cookies.set('clearwaterpiscinasLang', lang);
  };

  const handleChange = (event: { target: { value: string } }) => {
    SetLanguage(event.target.value);
  };

  const getSelectedCountry = (codeIn: String) => {
    let idx = countryList.findIndex((item, incode) => item.code === codeIn);
    return countryList[idx];
  };

  const LanguageList = (mobile: boolean) => {
    return (
      <>
        {!mobile ? (
          false
        ) : (
          <div className={'flex flex-col mr-[10px] language-option-mobile'}>
            <button
              className="language-option text-white"
              onClick={() => SetLanguage('en')}
            >
              <GB title="English" className="... language-option-icon " />{' '}
              <span>English</span>
            </button>
            <button
              className="language-option text-white"
              onClick={() => SetLanguage('es')}
            >
              <ES title="Spanish" className="...  language-option-icon " />{' '}
              <span>Español</span>
            </button>
          </div>
        )}
      </>
    );
  };

  const LanguageDropdown = (mobile: boolean) => {
    return (
      <>
        {mobile ? (
          false
        ) : (
          <div className={'language-option min-w-[122px] mr-[10px] '}>
            <button
              className="language-option language-option-selected text-white"
              onClick={() => {
                setLangDropdownOpen(!langDropdownOpen);
              }}
            >
              <RiGlobalLine size={20} />
              <span>{getSelectedCountry(lang).name}</span>
            </button>

            {langDropdownOpen ? (
              <div className="language-menu-open">
                <button
                  className="language-option text-white"
                  onClick={() => {
                    SetLanguage('en');
                    setLangDropdownOpen(!langDropdownOpen);
                  }}
                >
                  <GB title="English" className="... language-option-icon " />{' '}
                  <span>English</span>
                </button>
                <button
                  className="language-option text-white"
                  onClick={() => {
                    SetLanguage('es');
                    setLangDropdownOpen(!langDropdownOpen);
                  }}
                >
                  <ES title="Spanish" className="...  language-option-icon " />{' '}
                  <span>Español</span>
                </button>
              </div>
            ) : null}
          </div>
        )}
      </>
    );
  };

  return (
    <>
      {LanguageDropdown(false)}
      {LanguageList(false)}
    </>
  );
};
