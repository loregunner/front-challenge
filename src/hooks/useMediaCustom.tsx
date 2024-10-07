/* eslint-disable @typescript-eslint/no-explicit-any */
import  useMediaQuery  from './useMediaQuery'

const useMediaCustom = (): any => {
  const isMobile = useMediaQuery(
  `(min-width: 360px)`,
  );
  const isTable = useMediaQuery(`(min-width: 768px)`);
  const isDesktop = useMediaQuery(`(min-width: 1280px)`);
  return { isMobile, isTable, isDesktop };
};

export const useMedia = (): object => {
  const isMobile = useMediaQuery({
    query: `(min-width: 360px)`,
  });
  const isTable = useMediaQuery({
    query: `(max-width: 768px)`,
  });
  const isDesktop = useMediaQuery({
    query: `(min-width: 1280px)`,
  });
  return { isMobile, isTable, isDesktop };
};
export default useMediaCustom;
