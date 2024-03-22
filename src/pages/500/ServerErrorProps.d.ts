import { HTMLAttributes } from "react";

export interface ServerErrorStaticProps {
	dictionary: any,
};

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	height: number,
}

export default interface ServerErrorProps extends ServerErrorStaticProps {
 [key: string]: any,
};