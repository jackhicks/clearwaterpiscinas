import { useTheme } from '../../hooks/useTheme';

export const ClearwaterpiscinasIsotipo = () => {
  return (
    <div>
      <img
        title="Clear water piscinas"
        className="max-h-[65px]"
        src={
          useTheme().colorTheme === 'dark'
            ? 'public/clearwaterpiscinas_iso.png'
            : 'public/clearwaterpiscinas_iso_white.png'
        }
      />
    </div>
  );
};
