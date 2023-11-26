'use client';

import { Card, CardBody } from '@nextui-org/react';
import { Tab } from '@nextui-org/tabs';

export default function Tabs() {
  let tabs = [
    {
      id: 'photos',
      label: 'Photos',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 'music',
      label: 'Music',
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: 'videos',
      label: 'Videos',
      content:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];
  return (
    <div className="flex w-full flex-col">
      <Tabs items={tabs}>
        {(item: any) => (
          <Tab key={item.id} title={item.label}>
            one
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
