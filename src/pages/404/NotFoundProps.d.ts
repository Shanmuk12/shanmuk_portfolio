import { HTMLAttributes } from "react";

export interface NotFoundStaticProps {
	dictionary: any,
};

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	height: number,
}

export default interface NotFoundProps extends NotFoundStaticProps {
 [key: string]: any,
};