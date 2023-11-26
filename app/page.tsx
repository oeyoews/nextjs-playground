// app/page.tsx
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import NextImage from 'next/image';
import { Avatar } from '@nextui-org/avatar';
import { Snippet } from '@nextui-org/react';
import Tabs from '~/components/Tabs';
import ModalComponent from '~/components/Modal';
import Breadcrumb from '~/components/Breakcrumb';

export default function Page() {
  return (
    <div>
      <Button>Click me</Button>
      <Breadcrumb />
      <Snippet>npm install @nextui-org/react</Snippet>
      <ModalComponent />
      {/* <Tabs /> */}
      <Avatar
        isBordered
        color="default"
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
      />
      <Image
        isZoomed
        as={NextImage}
        width={240}
        height={240}
        src="https://images.unsplash.com/photo-1682685797818-c9dc151d241e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
        alt="NextUI Album Cover"
        className="mt-5"
      />
    </div>
  );
}
