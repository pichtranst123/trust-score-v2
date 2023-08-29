import dynamic from "next/dynamic";

//-------------------------------------------------------------
export { default as Hero } from "./Hero/Hero";
export const Space = dynamic(() => import("./Space/Space"));
