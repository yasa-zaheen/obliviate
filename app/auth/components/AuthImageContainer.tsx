import Image from "next/image";

function AuthImageContainer({ src }: { src: string }) {
  return (
    <div className="relative h-svh overflow-hidden -z-10">
      <Image
        src={src}
        alt="Image"
        fill={true}
        objectFit="cover"
        className="select-none"
      />
    </div>
  );
}
export default AuthImageContainer;
