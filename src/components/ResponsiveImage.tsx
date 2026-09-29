import Image, { type ImageProps } from "next/image";

type ResponsiveImageProps = Omit<ImageProps, "src"> & {
  /** Hochformat-Foto, sichtbar unter dem `md`-Breakpoint. */
  mobileSrc: string;
  /** Querformat-Foto, sichtbar ab `md`. */
  desktopSrc: string;
};

/**
 * Zwei `next/image`, überlagert im selben `relative`-Container (z.B. via
 * `fill`), per Breakpoint ein-/ausgeblendet — Hochformat auf Mobile,
 * Querformat ab `md`, statt ein einzelnes Bild per `object-cover`
 * unpassend zuzuschneiden.
 */
export default function ResponsiveImage({
  mobileSrc,
  desktopSrc,
  alt,
  className,
  ...rest
}: ResponsiveImageProps) {
  return (
    <>
      <Image
        src={mobileSrc}
        alt={alt}
        className={`${className ?? ""} md:hidden`}
        {...rest}
      />
      <Image
        src={desktopSrc}
        alt={alt}
        className={`${className ?? ""} hidden md:block`}
        {...rest}
      />
    </>
  );
}
