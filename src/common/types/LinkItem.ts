import { IconType } from "react-icons";

export interface LinkItemProps {
  name: string;
  icon: IconType;
  url: string;
  scope: string[];
  isCollapse: boolean;
  collapseList?: LinkItemProps[];
}
