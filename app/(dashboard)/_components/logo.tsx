import Image from "next/image";

export const Logo = () => {
	return (
		<Image
			height={130}
			width={130}
			alt="logo"
			src="https://utfs.io/f/bc2ffd23-1179-44e0-9885-074776de0590-7ahzk5.png"
			className="logo-image"
		/>
	);
};
