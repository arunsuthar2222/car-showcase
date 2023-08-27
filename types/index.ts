import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface ShowMoreProps {
  pageNumber: number,
  isNext: boolean,
  setLimit: (limit:number) => void
}

export interface SearchBarProps {
  setManufacturer : (searchManufacturer:string) => void,
  setModal : (searchModal:string) => void
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarCardProps {
  
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;

}

export interface FilterProps{
  manufacturer : string,
  year:number,
  fuel:string,
  limit:number,
  model: string
}