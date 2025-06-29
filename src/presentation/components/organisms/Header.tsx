import React from 'react';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/presentation/components/ui/navigation-menu';

export function Header() {
  return (
    <header className="border-b p-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" passHref legacyBehavior>
              <NavigationMenuLink className="font-medium">
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/videos" passHref legacyBehavior>
              <NavigationMenuLink className="font-medium">
                Videos
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/live" passHref legacyBehavior>
              <NavigationMenuLink className="font-medium">
                Live
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
