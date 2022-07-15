import { useTheme } from '../../hooks/useTheme';

export const ClearwaterpiscinasLogo = () => {
  return (
    <div>
      <img
        title="Clear water piscinas logo"
        className="max-w-[50px]"
        src={
          useTheme().colorTheme === 'dark'
            ? 'public/clearwaterpiscinas.png'
            : 'public/clearwaterpiscinas_white.png'
        }
      />
    </div>
  );
};
