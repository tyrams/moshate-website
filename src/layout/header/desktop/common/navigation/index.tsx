'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/src/utils/shadcn';
import { CustomLink } from '@/src/components/custom-link';
import { HeaderProps } from '../../v1';
import { FaChevronDown } from 'react-icons/fa6';

const menuTriggerClasses = cn([
  // Group hover
  'group-hover/menu-item:text-primary',

  // General
  'text-base leading-[1.3] capitalize py-4 min-h-[3.5rem] font-medium dark:hover:text-primary hover:text-primary transition-colors duration-200',

  // Layout
  'inline-flex items-center justify-center gap-1.5',

  // Focus
  ' focus:text-primary',

  // For sticky header
  'menu-link',

  // Cursor
  'cursor-pointer',
]);

export function Navigation({ menuItems, isSticky }: Pick<HeaderProps, 'menuItems'> & { isSticky?: boolean }) {
  const pathname = usePathname();
  const textColor = isSticky ? 'text-accent-900 dark:text-white' : 'text-white dark:text-white';
  const activeBorder = isSticky
    ? 'border border-accent-900 dark:border-white rounded-md px-3'
    : 'border border-white rounded-md px-3';

  return (
    <nav aria-label="primary navigation">
      <ul className="flex items-center gap-x-6">
        {menuItems.map((menuItem, index) => {
          const isSubMenuActive =
            'title' in menuItem &&
            menuItem.subMenuItems?.some((sub) => sub.href === pathname);

          return (
            <li key={index} className="group/menu-item relative ">
              {'title' in menuItem ? (
                <>
                  {/* Megamenu  */}
                  <span className={cn(menuTriggerClasses, textColor, isSubMenuActive && activeBorder)}>
                    <span>{menuItem.title}</span>
                    <span className="text-[10px]">
                      <FaChevronDown />
                    </span>
                  </span>
                  {menuItem.subMenuItems && menuItem.subMenuItems.length && (
                    <nav
                      aria-label="sumenu-items"
                      className={cn([
                        // Layout
                        'absolute  left-0 top-full z-40 w-[230px] overflow-hidden bg-accent-700 shadow-lg dark:bg-accent-700',

                        // Submenu normal
                        'origin-[0_0_0] scale-y-0 transition-transform duration-350',

                        // Submenu hover
                        'group-hover/menu-item:scale-y-100',
                      ])}
                    >
                      <ul className="grid divide-y divide-white/5">
                        {menuItem.subMenuItems.map((subMenuItem, index) => (
                          <li key={index} className="leading-none">
                            <CustomLink
                              href={subMenuItem.href}
                              openNewTab={subMenuItem.openNewTab}
                              className={cn(
                                'flex min-h-[50px] items-center px-4 py-2 pr-6 text-[15px] font-normal capitalize text-white transition-colors duration-200 hover:bg-primary dark:text-white',
                                subMenuItem.href === pathname && 'bg-primary',
                              )}
                            >
                              {subMenuItem.label}
                            </CustomLink>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  )}
                </>
              ) : (
                <>
                  {/* Normal link  */}
                  <CustomLink
                    href={menuItem.href}
                    openNewTab={menuItem.openNewTab}
                    className={cn(menuTriggerClasses, textColor, menuItem.href === pathname && activeBorder)}
                  >
                    {menuItem.label}
                  </CustomLink>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
