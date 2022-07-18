import { useTheme } from '../../hooks/useTheme';

export const ClearwaterpiscinasImagotipo = () => {
  return (
    <div>
      <img
        title="Clear water piscinas"
        className="max-h-[65px] min-w-[150px
        ]"
        src={
          useTheme().colorTheme === 'dark'
            ? '/public/clearwaterpiscinas_imagotipo.png'
            : '/public/clearwaterpiscinas_imagotipo_white.png'
        }
      />
    </div>
  );
};
