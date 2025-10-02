import { ModeToggle } from "./trigger-theme";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

const Header = () => {
  return (
    <NavigationMenu className="flex-none">
      <NavigationMenuList>
        <NavigationMenuItem>
          <p>Header</p>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default Header;
