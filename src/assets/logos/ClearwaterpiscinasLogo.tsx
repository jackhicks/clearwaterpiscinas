import { useTheme } from '../../hooks/useTheme';

export const ClearwaterpiscinasLogo = () => {
  return (
    <div>
      <img
        title="Clear water piscinas logo"
        className="max-w-[50px]"
        src={
          useTheme().colorTheme === 'dark'
            ? '/corporate/clearwaterpiscinas.png'
            : '/corporate/clearwaterpiscinas_white.png'
        }
      />
    </div>
  );
};
